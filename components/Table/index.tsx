import { TableProps } from "./types";
import TableContent from "./TableContent";
import TableHeader from "./TableHeader";
import { tableActions } from "./TableActions";
import Pagination from "./Pagination";
import { useTable } from "./useTable";

export default function Table<T>({ headers = [], reqName, render }: TableProps<T>) {
  const { data, isLoading } = useTable<T>(reqName!)
  return (
    <div className="overflow-x-auto rounded-lg max-h-[80svh] overflow-y-auto">
      <table className="w-full border-collapse  " cellPadding={10}>
        <TableHeader headers={headers} />
        <TableContent headers={headers} isLoading={isLoading} data={data} render={render} />
        {(data && data?.meta.last_page >= data?.meta.current_page) && <tfoot>
          <tr>
            <td colSpan={headers.length} className="text-center">
              <Pagination pagination={data?.meta!} />
            </td>
          </tr>
        </tfoot>}

      </table>
    </div>
  );
}

Table.action = tableActions
