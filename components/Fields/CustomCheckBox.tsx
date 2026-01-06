import { cn } from "@/utils/cn";
import { ComponentProps, ChangeEvent } from "react";

interface IProps extends ComponentProps<"input"> {
  inputStyle?: string;
}
export default function CustomCheckBox({
  children,
  className,
  inputStyle,
  ...props
}: IProps) {
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    // Call onChange if provided
    if (props.onChange) {
      props.onChange(event.target.checked as any);
    }
  };

  return (
    <>
      <div
        className={cn(
          " group flex items-center cursor-pointer gap-2",
          className
        )}
      >
        <input
          hidden
          type="checkbox"
          className="peer"
          {...props}
          onChange={handleInputChange}
        />
        <i className="w-8 h-8 !rounded-lg border border-[#CED7E3]  fa-solid fa-check text-lg text-transparent peer-checked:!text-primary flex items-center justify-center transition-all duration-300 "></i>

        {children}
      </div>
    </>
  );
}
