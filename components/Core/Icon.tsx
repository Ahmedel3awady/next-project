import { ComponentProps } from "react";

interface Props extends ComponentProps<'i'> { }

export default function Icon(props: Props) {
  return (
    <i {...props}></i>
  )
}
