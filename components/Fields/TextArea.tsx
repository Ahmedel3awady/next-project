import { useFormContext } from "react-hook-form";
import { Props } from "./types";
import { FC } from "react";
import ErrorMessage from "./ErrorMessage";
import { useTranslations } from "next-intl";
import { useFormWrapperContext } from "./FormWrapper";
import { cn } from "@/utils/cn";
const TextArea: FC<Props<HTMLTextAreaElement>> = ({
  label,
  name,
  className,
  placeholder,
  appendIcon,
  ...props
}) => {
  const { register } = useFormContext();
  const t = useTranslations();
  const { errors } = useFormWrapperContext();

  const classNames: string = `${errors && errors[name] && "border-red-500"}`;

  return (
    <div className={cn(" min-h-[100px]", className)}>
      <label
        htmlFor={label}
        className="mb-1.5 text-gray2 text-sm font-medium block"
      >
        {t(`labels.${label}`)}
      </label>
      <div className="relative">
        <textarea
          id={label}
          rows={5}
          className={` flex items-center py-2 px-3 rtl:pr-[50px] ltr:pl-[50px] outline-none border border-[#E5E7EB] rounded-lg text-sm placeholder:text-[#9AA4B2] text-secondary  w-full ${classNames}`}
          {...register(name)}
          {...props}
          placeholder={t(`placeholders.${placeholder}`)}
        />
        {appendIcon && <span className="append-icon">{appendIcon()}</span>}

        <ErrorMessage errors={errors} name={name} />
      </div>
    </div>
  );
};
export default TextArea;
