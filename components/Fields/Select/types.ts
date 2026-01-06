import { ReactNode } from "react";
import { SelectProps } from "react-tailwindcss-select/dist/components/type";

export interface IOption {
  label: string;
  value: string
}
export interface ISelectProps extends Partial<SelectProps> {
  suffix?: () => ReactNode;
  appendIcon?: () => ReactNode;
  name: string;
  label: string;
  options: IOption[]
}