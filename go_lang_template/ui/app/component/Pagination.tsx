import React from 'react';

const Pagination = ({ totalPages, currentPage, onPageChange, size}: {onPageChange: (page: number) => void, totalPages: number, currentPage: number, size: 'md'|'sm'|'lg'}) => {
  
  const getPageNumbers = () => {
    const pages = [];
    const showMax = 2; // How many pages to show on either side of current

    for (let i = 1; i <= totalPages; i++) {
      // Always show first, last, and pages within the 'showMax' range of current
      if (
        i === 1 || 
        i === totalPages || 
        (i >= currentPage - showMax && i <= currentPage + showMax)
      ) {
        pages.push(i);
      } 
      // Add ellipsis if there is a gap
      else if (
        (i === currentPage - showMax - 1) || 
        (i === currentPage + showMax + 1)
      ) {
        pages.push('...');
      }
    }
    // Remove consecutive duplicates of '...' if any (though logic above prevents it)
    return pages;
  };

  const pageNumbers = getPageNumbers();

  return (
    <ul className={`pagination pagination-${size}`}>
      {/* Previous Button */}
      <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
        <button className="page-link" onClick={() => onPageChange(currentPage - 1)}>
          Previous
        </button>
      </li>

      {/* Page Numbers */}
      {pageNumbers.map((page, index) => (
        <li 
          key={index} 
          className={`page-item ${page === currentPage ? 'active' : ''} ${page === '...' ? 'disabled' : ''}`}
        >
          <button 
            className="page-link" 
            onClick={() => typeof page === 'number' && onPageChange(page)}
          >
            {page}
          </button>
        </li>
      ))}

      {/* Next Button */}
      <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
        <button className="page-link" onClick={() => onPageChange(currentPage + 1)}>
          Next
        </button>
      </li>
    </ul>
  );
};

export default Pagination;