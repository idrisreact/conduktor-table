'use client';
import React from 'react';

const TableHeader: React.FC = () => {
  return (
    <thead>
      <tr>
        <th className="py-2 px-4 text-left font-bold">Name</th>
        <th className="py-2 px-4 text-left font-bold">DOB</th>
        <th className="py-2 px-4 text-left font-bold">Email</th>
        <th className="py-2 px-4 text-left font-bold">Verified</th>
        <th className="py-2 px-4 text-left font-bold">Salary</th>
      </tr>
    </thead>
  );
};

export default TableHeader; 