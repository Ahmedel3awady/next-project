import { useState } from "react";
import Button from "../Button";
import { PaginationProps } from "./types";
import { cn } from "@/utils/cn";
import { useQueryStore } from "@/store/query";

export default function Pagination({ visible = 10, pagination }: PaginationProps) {
  const [page, setPage] = useState<number>(pagination.current_page || 1);
  const queryStore = useQueryStore()


  if (!pagination) {
    return null;
  }

  const { current_page, last_page } = pagination;
  // const pages = last_page > visible ? visible : last_page

  const handlePagination = (page: number) => {
    setPage(page);
    queryStore.setQuery({ page })

  };

  const renderEllipsis = (key: string | number) => (
    <li key={key} className="mx-1 text-primary">
      ...
    </li>
  );

  const renderPaginationButton = (p: number) => (
    <li key={p} className="mx-1">
      <Button
        onClick={() => handlePagination(p)}
        variant="outline"
        className={cn("h-10 w-10 ", p === page && "active-page")}
      >
        {p}
      </Button>
    </li>
  );

  const renderFirstPage = () => (
    current_page > Math.floor(visible / 2) + 1 &&
    renderPaginationButton(1)
  );

  const renderLastPage = () => (
    current_page < last_page - Math.floor(visible / 2) &&
    renderPaginationButton(last_page)
  );

  const renderMiddlePages = () => {
    const startPage = Math.max(1, current_page - Math.floor(visible / 2));
    const endPage = Math.min(startPage + visible - 1, last_page);

    return Array.from({ length: endPage - startPage + 1 }, (_, index) =>
      renderPaginationButton(startPage + index)
    );
  };
  return (
    <ul className="text-center flex items-center justify-center  w-full my-5">
      {renderFirstPage()}

      {current_page > Math.floor(visible / 2) + 1 &&
        renderEllipsis("ellipsis-start")}

      {renderMiddlePages()}

      {current_page < last_page - Math.floor(visible / 2) &&
        renderEllipsis("ellipsis-end")}
      {renderLastPage()}
    </ul>
  );

}

Pagination.defaultProps = {
  visible: 10,
};
