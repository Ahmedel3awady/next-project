import { ComponentProps } from "react";

const Tags = 'button' || 'a'
export interface ButtonProps extends ComponentProps<typeof Tags> {
  loading?: boolean,
  [key: string]: any

}