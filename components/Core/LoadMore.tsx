import { useTranslation } from "react-i18next";
import Button from "../Button";
import { ComponentProps } from "react";

export interface IMeta {

  count: number;
  current_page: number;
  last_page: number;
  per_page: number;
}
export interface Props extends ComponentProps<'button'> {
  meta: IMeta,
  loading: boolean;
}

export default function LoadMore({ loading, meta, ...props }: Props) {
  const { t } = useTranslation()
  if (meta.last_page > meta.current_page) {
    return (
      <Button loading={loading} {...props}>
        {t('button.load_more')}
      </Button>
    )
  }

}
