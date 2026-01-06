import { ComponentProps } from "react";
import Button from "../Button";
import Icon from "../Core/Icon";

const createAction = (variantClass: string, iconClass: string) => (props: ComponentProps<'button'> | any) => (
  <Button variant='transparent' className={`text-white ${variantClass}`} {...props}>
    <Icon className={`fa-solid ${iconClass}`} />
  </Button>
);

export const tableActions = {
  Delete: createAction('bg-primary', 'fa-trash'),
  Edit: createAction('bg-secondary', 'fa-edit'),
  View: createAction('bg-orange-500', 'fa-eye'),
} as const;
