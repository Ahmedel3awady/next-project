import { InputHTMLAttributes, ReactNode } from "react";

interface BaseProps {
  name: string;
  label: string;
}
export interface Props<T> extends InputHTMLAttributes<T> {
  name: string;
  label: string
  appendIcon?: () => ReactNode
}

export interface SelectProps<T, K> extends Props<T> {
  items: K[];
  item_label: keyof K;
  item_value: keyof K;
  loading: boolean;
  render?: (value: { item: K, index: number }) => ReactNode
}

export interface FileUploadProps extends BaseProps { 
  multiple?: boolean;
}

export enum ViewType {
  ImagePreview = "ImagePreview",
  FilePreview = "FilePreview",
  UploadContent = "UploadContent",
}
export type ViewTypeFile  = keyof typeof ViewType


export type TImage = {type:string;url:string;id:string}