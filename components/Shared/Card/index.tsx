import { HTMLAttributes, PropsWithChildren } from "react";

export default function Card({ className, children, ...props }: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) {
  return (
    <div className={`w-full rounded-lg shadow-3xl p-2 ${className}`} {...props}>
      {children}
    </div>
  )
}
