'use client';
import React from 'react';

interface RowsPerPageSelectorProps {
  rowsPerPage: number;
  onRowsPerPageChange: (rows: number) => void;
}

const rowsOptions = [5, 10, 20, 50, 100];

const RowsPerPageSelector: React.FC<RowsPerPageSelectorProps> = ({
  rowsPerPage,
  onRowsPerPageChange,
}) => {
  return (
    <div className="flex items-center">
      <label htmlFor="rows-per-page" className="mr-2 text-sm text-secondary-400">
        Rows per page:
      </label>
      <select
        id="rows-per-page"
        value={rowsPerPage}
        onChange={(e) => onRowsPerPageChange(Number(e.target.value))}
        className="p-1.5 border border-gray-300 rounded text-sm bg-white"
      >
        {rowsOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default RowsPerPageSelector;