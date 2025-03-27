'use client';
import React from 'react';
import { Person } from '../../types';

interface RecordModalProps {
  person: Person;
  onClose: () => void;
}

const RecordModal: React.FC<RecordModalProps> = ({ person, onClose }) => {
 
  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const formatValue = (key: string, value: any) => {
    if (key === 'id') {
      return (
        <div className="flex items-baseline">
          <span className="font-semibold">${value.toLocaleString()}</span>
          <span className="text-gray-400 text-xs ml-1">USD</span>
        </div>
      );
    } else if (key === 'verified') {
      return (
        <div className={`flex items-center ${value ? 'bg-primary-50 text-primary-500' : 'bg-danger-100 text-danger-500'} py-1.5 px-3 rounded-full text-sm w-fit`}>
          <span className="inline-block w-2 h-2 rounded-full bg-current mr-1.5"></span>
          {value ? 'Completed' : 'Initiated'}
        </div>
      );
    } else if (key === 'salary') {
      return (
        <div className="flex items-baseline">
          <span className="font-semibold">${value.toLocaleString()}</span>
          <span className="text-gray-400 text-xs ml-1">USD</span>
        </div>
      );
    } else {
      return String(value);
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
      onClick={handleOverlayClick}
    >
      <div className="bg-white rounded-xl w-[90%] max-w-xl max-h-[80vh] overflow-y-auto shadow-lg">
        <div className="flex justify-between items-center px-6 py-5 border-b border-gray-100">
          <h3 className="m-0 text-xl text-secondary-500">Transaction Details</h3>
          <button 
            className="bg-transparent border-0 text-2xl text-gray-500 hover:text-gray-800 cursor-pointer"
            onClick={onClose}
          >
            &times;
          </button>
        </div>
        <div className="p-6">
          {Object.entries(person).map(([key, value]) => (
            <div key={key} className="flex mb-4 pb-4 border-b border-gray-100 last:border-b-0">
              <div className="w-2/5 font-medium text-secondary-400 capitalize">
                {key}
              </div>
              <div className="w-3/5 text-secondary-500 flex items-center">
                {formatValue(key, value)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecordModal;