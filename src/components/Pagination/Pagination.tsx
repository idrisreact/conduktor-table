'use client';
import React from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  return (
    <div>
      <div className="flex items-center mt-4">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="bg-gray-100 border border-gray-300 px-4 py-1 mr-2 disabled:opacity-50"
        >
          Previous
        </button>
        
        <button
          className="bg-gray-200 border border-gray-300 px-3 py-1 mx-1"
          onClick={() => onPageChange(1)}
        >
          1
        </button>
        
        <button
          className="border border-gray-300 px-3 py-1 mx-1"
          onClick={() => onPageChange(2)}
        >
          2
        </button>
        
        <span className="mx-1">...</span>
        
        <button
          className="border border-gray-300 px-3 py-1 mx-1"
          onClick={() => onPageChange(50)}
        >
          50
        </button>
        
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="bg-gray-100 border border-gray-300 px-4 py-1 ml-2 disabled:opacity-50"
        >
          Next
        </button>
      </div>
      
      <div className="mt-2">
        Page {currentPage} of {totalPages}
      </div>
    </div>
  );
};

export default Pagination;