import Link from "next/link";

interface PaginationProps {
  basePath: string;
  currentPage: number;
  totalPages: number;
  totalItems?: number;
  itemsPerPage?: number;
}

function getPageHref(basePath: string, page: number) {
  return page === 1 ? basePath : `${basePath}?page=${page}`;
}

function getPageNumbers(currentPage: number, totalPages: number) {
  const pages: Array<number | string> = [];
  const maxVisible = 7;

  if (totalPages <= maxVisible) {
    for (let page = 1; page <= totalPages; page++) {
      pages.push(page);
    }

    return pages;
  }

  pages.push(1);

  if (currentPage > 3) {
    pages.push("...");
  }

  const start = Math.max(2, currentPage - 1);
  const end = Math.min(totalPages - 1, currentPage + 1);

  for (let page = start; page <= end; page++) {
    pages.push(page);
  }

  if (currentPage < totalPages - 2) {
    pages.push("...");
  }

  pages.push(totalPages);

  return pages;
}

export default function Pagination({
  basePath,
  currentPage,
  totalPages,
  totalItems,
  itemsPerPage,
}: PaginationProps) {
  if (totalPages <= 1) {
    return null;
  }

  const hasResultsInfo =
    typeof totalItems === "number" && typeof itemsPerPage === "number";
  const startItem = hasResultsInfo ? (currentPage - 1) * itemsPerPage + 1 : 0;
  const endItem = hasResultsInfo
    ? Math.min(currentPage * itemsPerPage, totalItems)
    : 0;

  return (
    <div className="mt-12 flex flex-col items-center justify-between gap-4 sm:flex-row">
      {hasResultsInfo && (
        <p className="text-sm text-gray-700">
          Mostrando <span className="font-medium">{startItem}</span> a{" "}
          <span className="font-medium">{endItem}</span> de{" "}
          <span className="font-medium">{totalItems}</span> resultados
        </p>
      )}

      <nav className="flex items-center gap-1" aria-label="Paginacion">
        {currentPage > 1 ? (
          <Link
            href={getPageHref(basePath, currentPage - 1)}
            className="inline-flex rounded-lg px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100"
            aria-label="Pagina anterior"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </Link>
        ) : (
          <span
            className="inline-flex cursor-not-allowed rounded-lg px-3 py-2 text-sm font-medium text-gray-400"
            aria-label="Pagina anterior"
            aria-disabled="true"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </span>
        )}

        {getPageNumbers(currentPage, totalPages).map((page, index) => {
          if (page === "...") {
            return (
              <span key={`ellipsis-${index}`} className="px-3 py-2 text-gray-500">
                ...
              </span>
            );
          }

          const pageNumber = page as number;
          const isActive = pageNumber === currentPage;

          return (
            <Link
              key={pageNumber}
              href={getPageHref(basePath, pageNumber)}
              aria-label={`Pagina ${pageNumber}`}
              aria-current={isActive ? "page" : undefined}
              className={`inline-flex min-w-10 items-center justify-center rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                isActive
                  ? "bg-primary text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              {pageNumber}
            </Link>
          );
        })}

        {currentPage < totalPages ? (
          <Link
            href={getPageHref(basePath, currentPage + 1)}
            className="inline-flex rounded-lg px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100"
            aria-label="Pagina siguiente"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        ) : (
          <span
            className="inline-flex cursor-not-allowed rounded-lg px-3 py-2 text-sm font-medium text-gray-400"
            aria-label="Pagina siguiente"
            aria-disabled="true"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </span>
        )}
      </nav>
    </div>
  );
}
