import { useTranslation } from "react-i18next";
import Spinner from "../Spinner";
import { TData, TableProps } from "./types";
import { Each } from "../Core/Each";

interface TableContentProps<T> extends Omit<TableProps<T>, 'reqName'> {
  data: TData<T> | undefined;
  isLoading: boolean;
}

export default function TableContent<T>({ headers, render, data, isLoading }: TableContentProps<T>) {
  const { t } = useTranslation();

  const renderLoadingRow = () => (
    <td colSpan={headers.length} className="text-center">
      <Spinner />
    </td>
  );

  const renderNoResultsRow = () => (
    <td colSpan={headers.length} className="text-center">
      {t('table.no_results')}
    </td>
  );
  return (
    <tbody>
      <tr>{isLoading ? renderLoadingRow() : data?.data.length === 0 ? renderNoResultsRow() : null}</tr>
      <Each
        of={data?.data || []}
        render={(item, index) => (
          <tr key={index}>{render({ item, index })}</tr>
        )}
      />
    </tbody>
  );
}
