import { FileUploadProps, } from "../types";
import { cn } from "@/utils/cn";
import ErrorMessage from "../ErrorMessage";
import AnimatedLayout from "@/layouts/AnimatedLayout";
import useFileUpload from "./useFileUpload";

const FileUpload = ({ name, label }: FileUploadProps) => {
  const { View, errorStyle, onClick, onFileInputChange, fileType, errors, inputRef, t } = useFileUpload(name)

  return (
    <section className="relative">
      <label className="mb-2 inline-block text-third">{t(`label.${label}`)}</label>
      <div
        className={cn("h-[190px] cursor-pointer border border-dashed border-slate-400 rounded-md flex items-center justify-center relative", errorStyle)}
        onClick={onClick}
        draggable="false"
        onDragOver={(e) => e.preventDefault()}
        onDrop={onFileInputChange}
      >
        <AnimatedLayout key={fileType}>
          <View />
        </AnimatedLayout>
      </div>
      <ErrorMessage errors={errors} name={name} />
      <input accept=".png, .jpg, .jpeg, .pdf" type="file" hidden ref={inputRef} onChange={onFileInputChange} />
    </section>
  );
};

export default FileUpload;
