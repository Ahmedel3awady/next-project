import { cn } from "@/utils/cn";
import Select from "react-tailwindcss-select";
import { ISelectProps } from "./types";
// import { ErrorMessage } from '@hookform/error-message';
// import ErrorMessage from "../ErrorMessage";

import useField from "../useField";
import CustomCheckBox from "../CustomCheckBox";
import ErrorMessage from "../ErrorMessage";

export default function SelectField({
  name,
  label,
  placeholder,
  appendIcon,
  onChange,
  suffix,
  ...props
}: ISelectProps) {
  const {
    register,
    errorStyle,
    hasError,
    t,
    errors,
    getValues,
    setValue,
    watch,
    trigger,
    serverErrors,
  } = useField(name);

  const { ref, ...fields } = register(name);
  const handleChange = (value: any) => {
    setValue(name, value);
    trigger(name);
    onChange && onChange(value);
  };
  watch(name);

  const classNames = {
    searchIcon: "w-4 h-4 text-paragraph absolute ms-[10px]",
    searchBox:
      "bg-[#F9FAFB] border-0 h-10 outline-none rounded-lg w-full px-8 placeholder:text-[#9AA4B2] text-sm text-secondary",
    menuButton() {
      return cn(
        `flex items-center justify-between py-2 px-3 rtl:pr-[50px] ltr:pl-[50px] outline-none border border-[#E5E7EB] rounded-lg h-[50px] text-sm placeholder:text-[#9AA4B2] text-secondary  w-full ${errorStyle}`
      );
    },
    placeholder: "text-gray2 text-sm font-medium",
    // tagItemIconContainer: "hover:bg-transparent cursor-pointer",
    // tagItemIcon:
    //   "fill-error text-[14px] h-[20px] w-[20px]  p-[2px] rounded-[50%] border-error border",
    // tagItem() {
    //   return "bg-off-white p-[8px] rounded-[12px] !text-light-gray-4 !text-[16px]  capitalize font-semibold flex items-center gap-3";
    // },
    searchInputPlaceholder: "Search",
    searchContainer: "flex items-center",
    menu: "border border-[#E5E7EB] rounded-lg shadow-sm absolute w-full bg-white z-50 min-h-[100px] p-4 top-[55px]",
    list: "max-h-[120px] overflow-y-auto pt-8",
  };
  return (
    <div className="relative select-field">
      <label
        htmlFor={label}
        className="mb-1.5 text-gray2 text-sm font-medium block"
      >
        {t(`labels.${label}`)}
      </label>

      <div className={`select-field-wrapper relative`}>
        {suffix && suffix()}
        <Select
          searchInputPlaceholder={t("placeholders.search")}
          isClearable
          isSearchable
          placeholder={t(`placeholders.${placeholder}`)}
          classNames={classNames}
          {...props}
          value={getValues(name)}
          primaryColor="primary"
          {...fields}
          onChange={handleChange}
          noOptionsMessage={t("labels.no_results")}
          formatOptionLabel={(data) => (
            <div
              className={cn(
                "text-dark w-full text-[14px] h-[36px] list-none border-b border-[#E5E7EB] flex items-center font-medium capitalize cursor-pointer gap-3 mb-3 pb-3"
              )}
            >
              <CustomCheckBox checked={data.isSelected}>
                {data.label}
              </CustomCheckBox>
            </div>
          )}
        />
        {appendIcon && <span className="append-icon">{appendIcon()}</span>}
      </div>
      <ErrorMessage errors={errors} name={name} />

      {/* <ErrorMessage
        errors={serverErrors || errors}
        name={name}
        render={({ message }) => <p className={cn(`text-red-500 absolute bottom-[-25px]  text-[13px] transition-all duration-300
           max-h-[20px]
            }`)}>{message}</p>}
      /> */}
    </div>
  );
}
