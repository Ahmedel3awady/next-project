import { useErrorsStore } from "@/store/errors";
import { useFormContext } from "react-hook-form";
import { useTranslations } from "next-intl";

export default function useField(name: string) {
  const { register, formState, getFieldState, ...args } = useFormContext();
  const t = useTranslations();
  const { errors: serverErrors } = useErrorsStore()
  const { errors } = formState
  const hasError: any = getFieldState(name).error || serverErrors && serverErrors[name]
  const errorStyle: string = `${hasError && "border-red-500"}`;
  return {
    errorStyle,
    register,
    t,
    hasError,
    errors,
    serverErrors,
    ...args
  }
}
