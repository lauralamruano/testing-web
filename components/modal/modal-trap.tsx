"use client;"
import React, { useEffect, useRef } from "react";

interface ModalTrapProps {
  isOpen: boolean;
}

const ModalTrap: React.FC<ModalTrapProps> = ({ isOpen}) => {
    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const trapFocus = (e: FocusEvent) => {
        if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
          e.preventDefault();
          modalRef.current.focus();
        }
      };
  
      if (isOpen) {
        document.addEventListener("focusin", trapFocus);
        modalRef.current?.focus();
      }
  
      return () => {
        document.removeEventListener("focusin", trapFocus);
      };
    }, [isOpen]);
  
    if (!isOpen) return null;
  
    return (
      <div
        className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center"
        role="dialog"
        aria-modal="true"
      >
        <div
          ref={modalRef}
          tabIndex={-1}
          className="bg-white p-6 rounded shadow-lg w-1/3"
        >
          <h2 className="text-xl font-bold mb-4">Modal Title</h2>
          <p className="mb-4">This is a modal with keyboard trap.</p>
          {/* No close button or escape functionality */}
        </div>
      </div>
    );
  };
  
export default ModalTrap;