import { VariantProps, cva } from "class-variance-authority";
import { ButtonProps } from "./types";
import { cn } from "@/utils/cn";
import { ElementType } from "react";
const buttonVariants = cva("btn", {
  variants: {
    variant: {
      default: "default-btn",
      outline: "outline-btn",
      light: "light-btn",
      lightDefault: "light-default-btn",
      transparent: "transparent p-2 rounded-md size-1 w-fit",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});
interface Props extends VariantProps<typeof buttonVariants>, ButtonProps {
  as?: ElementType | React.ComponentType<any>;
}
export default function Button({
  children,
  loading,
  as,
  variant,
  className,
  ...props
}: Props) {
  const Component = as || "button";
  return (
    <Component
      disabled={loading}
      className={cn(buttonVariants({ className, variant }))}
      {...props}
    >
      {loading ? (
        <i className="fa-solid fa-spinner animate-spin block"></i>
      ) : (
        children
      )}
    </Component>
  );
}
