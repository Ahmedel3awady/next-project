import { cn } from "@/utils/cn";
import { ComponentProps } from "react";
import useField from "../useField";
import { ErrorMessage } from '@hookform/error-message';


interface IProps extends ComponentProps<'input'> { }
export default function CheckBox({ children, name, ...props }: IProps) {
  const { register, hasError, errors, serverErrors } = useField(name!);

  return (
    <div className="relative">
      <label className={cn("flex items-center gap-3 cursor-pointer")} >
        <input className="peer" type="checkbox" hidden  {...props}
          {...register(name!)}
        />
        <div className={cn("w-[22px] flex items-center justify-center h-[22px] bg-off-white rounded-[4px] border transition-all duration-200 border-light-gray-2  peer-checked:bg-success")}>
          <i className="fa-solid fa-check text-[14px] transition-all duration-200 text-off-white"></i>
        </div>
        <div className={cn("text-[14px] text-primary font-medium capitalize text-clip", hasError && 'text-error')}>
          {children}
        </div>
      </label>
      <ErrorMessage
        errors={serverErrors || errors}
        name={name!}
        render={({ message }) => <p className={cn(`text-error absolute bottom-[-25px] text-[13px] transition-all duration-300
           max-h-[20px]
            }`)}>{message}</p>}
      />

    </div>
  )
}
