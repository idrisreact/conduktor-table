'use client'
import { useTableStore } from "@/src/store";
import styled from "styled-components";
import peopleData from '../../data/people.json';
import RowsPerPageSelector from "../RowsPerPage/RowsPerPageSelector";
import { useEffect } from "react";
import {DataTable} from '../Table/DataTable'
import { Pagination } from "../Pagination/Pagination";
import RecordModal from "../RecordModal/RecordModal";



export const Table = ()=>{


    const {
        data,
        currentPage,
        rowsPerPage,
        selectedPerson,
        showModal,
        setData,
        setCurrentPage,
        setRowsPerPage,
        selectPerson,
        closeModal,
      } = useTableStore();
      useEffect(() => {

        setData(peopleData.ctRoot);
      }, [setData]);
    
      const totalPages = Math.ceil(data.length / rowsPerPage);
    
      return (
<main className="p-4">
      <h1 className="text-4xl font-bold mb-2">People Data Table</h1>
      <p className="mb-6">Viewing {data.length} records</p>

      <DataTable
        data={data}
        currentPage={currentPage}
        rowsPerPage={rowsPerPage}
        onRowClick={selectPerson}
      />

      <div className="mt-4">
        <div className="flex items-center">
          <span>Rows per page:</span>
          <select 
            value={rowsPerPage}
            onChange={(e) => setRowsPerPage(Number(e.target.value))}
            className="ml-2 border border-gray-300"
          >
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={50}>50</option>
          </select>
        </div>

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>

      {showModal && selectedPerson && (
        <RecordModal person={selectedPerson} onClose={closeModal} />
      )}
    </main>
    );
}