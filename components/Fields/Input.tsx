import { useFormContext } from "react-hook-form";
import { Props } from "./types";
import { FC } from "react";
import ErrorMessage from "./ErrorMessage";
import { useTranslations } from "next-intl";
import { useFormWrapperContext } from "./FormWrapper";
const Input: FC<Props<HTMLInputElement>> = ({
  appendIcon,
  name,
  placeholder,
  label,
  ...props
}) => {
  const { register } = useFormContext();
  const { errors } = useFormWrapperContext();
  const classNames: string = `${errors && errors[name] && "!border-red-500"}`;
  const t = useTranslations();

  return (
    <div className="">
      <div className="relative">
        <label htmlFor={label} className="mb-1.5 text-gray2 text-sm font-medium block">
          {t(`labels.${label}`)}
        </label>
        <div className={`form-input-group relative`}>
          <input
            id={label}
            type="text"
            className={` flex items-center py-2 px-3 rtl:pr-[50px] ltr:pl-[50px] outline-none border border-[#E5E7EB] rounded-lg h-[50px] text-sm placeholder:text-[#9AA4B2] text-secondary  w-full ${classNames}`}
            {...register(name)}
            {...props}
            placeholder={t(`placeholders.${placeholder}`)}
          />
          {appendIcon && <span className="append-icon">{appendIcon()}</span>}
        </div>
        <ErrorMessage errors={errors} name={name} />
      </div>
    </div>
  );
};
export default Input;
