'use client';
import React from 'react';
import { Person } from '../../types';

interface TableRowProps {
  person: Person;
  onRowClick: (person: Person) => void;
}

const TableRow: React.FC<TableRowProps> = ({ person, onRowClick }) => {
  return (
    <tr className="cursor-pointer" onClick={() => onRowClick(person)}>
      <td className="py-2 px-4">{person.name}</td>
      <td className="py-2 px-4">{person.dob}</td>
      <td className="py-2 px-4">{person.email}</td>
      <td className="py-2 px-4">{person.verified ? 'Yes' : 'No'}</td>
      <td className="py-2 px-4">${person.salary.toLocaleString()}USD</td>
    </tr>
  );
};

export default TableRow;