import chevronLeft from "../../assets/chevron_to_left.svg"
import chevronRight from "../../assets/chevron_to_right.svg"


interface PaginationProps {
  totalPages: number;
  currentPage: number;
  setCurrentPage: (page: number) => void;
}

export const Pagination = ({ totalPages, currentPage, setCurrentPage }: PaginationProps) => {
  // generate array with page numbers
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
  return (
    <nav className="flex gap-2">
      <button onClick={() => handlePageChange(currentPage - 1)} className={`${currentPage === 1 ? "pointer-events-none opacity-50" : ""} px-3 py-2 rounded transition duration-300 text-grey hover:bg-lightestGrey hover:text-dark`}><img src={chevronLeft} alt="Previous" /></button>
      {pageNumbers.map((pageNumber) => (
        <button onClick={() => handlePageChange(pageNumber)} key={pageNumber} className={`${pageNumber === currentPage ? "bg-red text-white hover:bg-lightRed" : "text-grey hover:bg-lightestGrey hover:text-dark"} px-4 py-2 rounded transition duration-300`}>
          {pageNumber}
        </button>
      ))}
      <button onClick={() => handlePageChange(currentPage + 1)} className={`${currentPage === totalPages ? "pointer-events-none opacity-50" : ""} px-3 py-2 rounded transition duration-300 text-grey hover:bg-lightestGrey hover:text-dark`}><img src={chevronRight} alt="Next" /></button>
    </nav>
  );
};
