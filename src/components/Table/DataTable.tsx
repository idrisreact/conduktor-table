'use client';
import React from 'react';
import TableHeader from './TableHeader';
import TableRow from './TableRow';
import { Person } from '../../types';

interface DataTableProps {
  data: Person[];
  currentPage: number;
  rowsPerPage: number;
  onRowClick: (person: Person) => void;
}

export const DataTable: React.FC<DataTableProps> = ({
  data,
  currentPage,
  rowsPerPage,
  onRowClick,
}) => {

  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const displayData = data.slice(startIndex, endIndex);

  return (
    <table className="w-full">
      <TableHeader />
      <tbody>
        {displayData.length > 0 ? (
          displayData.map((person) => (
            <TableRow
              key={person.id}
              person={person}
              onRowClick={onRowClick}
            />
          ))
        ) : (
          <tr className="h-24">
            <td colSpan={5} className="text-center text-gray-500">
              No data available
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default DataTable;