import { ChangeEvent, DragEvent, MouseEvent, ReactNode, useEffect, useRef, useState } from "react";
import { TImage, ViewType, ViewTypeFile } from "../types";
import { useTranslation } from "react-i18next";
import { useFormContext } from "react-hook-form";
import { useFormWrapperContext } from "../FormWrapper";
import Icon from "@/components/Core/Icon";
import Image from "@/components/Core/Image";

export default function useFileUpload(name: string) {
  const inputRef = useRef<HTMLInputElement>(null);
  const { t } = useTranslation();
  const { setValue, trigger, getValues } = useFormContext();
  const { errors } = useFormWrapperContext();

  const [preview, setPreview] = useState<string>("");
  const [fileType, setFileType] = useState<ViewTypeFile>(ViewType.UploadContent);
  const errorStyle = errors && errors[name] ? 'border-red-500' : '';

  const onClick = () => inputRef.current?.click();

  const handleFileValues = () => {
    const fileItem: TImage | undefined = getValues(name);
    if (fileItem?.url) {
      setFileTypeValue(fileItem.url, fileItem.type);
    }
  };

  const onFileInputChange = (e: ChangeEvent<HTMLInputElement> | DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = 'dataTransfer' in e ? e.dataTransfer?.files?.[0] : (e.target as HTMLInputElement)?.files?.[0] || null;

    if (file) {
      const fileUrl = URL.createObjectURL(file);
      setFileTypeValue(fileUrl, file.type);
    }

    setValue(name, file);
    trigger(name);
  };

  const setFileTypeValue = (value: string, type: string) => {
    setPreview(value);
    setFileType(type === 'application/pdf' ? ViewType.FilePreview : ViewType.ImagePreview);
  };

  const onDelete = (event: MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    setPreview('');
    setFileType(ViewType.UploadContent);
    setValue(name, null);
    trigger(name);
  };

  const ImagePreview = () => (
    <div className="h-[150px] relative">
      <Icon
        title="delete"
        onClick={onDelete}
        className="fa-solid fa-close text-white flex justify-center items-center rounded-[50%] bg-primary w-[20px] h-[20px] p-3 pointer absolute left-1 top-0"
      />
      <Image src={preview} className="h-full object-fill rounded-md" />
    </div>
  );

  const FilePreview = () => (
    <div
      className="relative"
    >
      <Icon
        title="delete"
        onClick={onDelete}
        className="fa-solid fa-close text-primary flex justify-center items-center rounded-[50%] bg-white w-[20px] h-[20px] p-3 pointer absolute left-[-10px] top-[-15px]"
      />
      <a target="_blank" href={preview}>
        <Icon className="fa-solid fa-file-pdf text-[50px] text-primary" />
      </a>
    </div>
  );

  const UploadContent = () => (
    <div className="text-center">
      <Icon className="fa-solid fa-cloud-arrow-up text-[50px] text-secondary" />
      <p className="text-center capitalize text-[20px]"> drag or upload</p>
    </div>
  );

  const ViewContent: { [key in ViewTypeFile]: () => ReactNode } = {
    ImagePreview,
    FilePreview,
    UploadContent,
  };

  const View = ViewContent[fileType];

  useEffect(() => {
    handleFileValues();
  }, [getValues(name)]);

  return {
    View,
    errorStyle,
    onClick,
    onFileInputChange,
    fileType,
    errors,
    inputRef,
    t,
  };
}
