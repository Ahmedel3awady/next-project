import { useTranslation } from "react-i18next";
import { Each } from "../Core/Each";
import { TableProps } from "./types";

interface TableHeaderProps<T> extends Pick<TableProps<T>, 'headers'> { }

export default function TableHeader<T>({ headers }: TableHeaderProps<T>) {
  const { t } = useTranslation()
  return (
    <thead >
      <tr>
        <Each
          of={headers}
          render={(item, index) => (
            <th
              key={index}
              className="px-4 py-5  bg-primary/25 capitalize text-start sticky top-0 backdrop-blur-md "
            >
              {t(`table.${item.title}`)}
            </th>
          )}
        />
      </tr>
    </thead>
  )
}
