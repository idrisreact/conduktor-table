import { create } from 'zustand';

import { immer } from 'zustand/middleware/immer';
import { Person } from '../types';

interface TableState {

    data: Person[];
    currentPage: number;
    rowsPerPage: number;
    selectedPerson: Person | null;
    showModal: boolean;


    setData: (data: Person[]) => void;
    setCurrentPage: (page: number) => void;
    setRowsPerPage: (rows: number) => void;
    selectPerson: (person: Person) => void;
    closeModal: () => void;
}

export const useTableStore = create<TableState>()(
    immer((set) => ({

        data: [],
        currentPage: 1,
        rowsPerPage: 10,
        selectedPerson: null,
        showModal: false,


        setData: (data) => set((state) => {
            state.data = data;
        }),

        setCurrentPage: (page) => set((state) => {
            state.currentPage = page;
        }),

        setRowsPerPage: (rows) => set((state) => {
            state.rowsPerPage = rows;
            state.currentPage = 1;
        }),

        selectPerson: (person) => set((state) => {
            state.selectedPerson = person;
            state.showModal = true;
        }),

        closeModal: () => set((state) => {
            state.showModal = false;
        })
    }))
);