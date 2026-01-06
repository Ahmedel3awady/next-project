import { ComponentProps, ReactNode } from "react";

export type THead = {
  title: string;
}

export interface TableProps<T> extends ComponentProps<'table'> {
  headers: THead[],
  reqName?: string,
  render: (value: { item: T, index: number }) => ReactNode
}

export interface MetaOption {
  current_page: number
  last_page: number
  per_page: number
  total: number
}
export type TData<T> = {
  data: T[],
  meta: MetaOption
}

export interface PaginationProps {
  pagination: MetaOption,
  visible: number
}