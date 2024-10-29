"use client";
import React, { useEffect, useRef } from "react";

interface ModalTrapProps {
  isOpen: boolean;
}

const ModalTrapWithControls: React.FC<ModalTrapProps> = ({ isOpen }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const firstButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const trapFocus = (e: KeyboardEvent) => {
      if (e.key === "Tab" && firstButtonRef.current) {
        e.preventDefault();
        firstButtonRef.current.focus();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", trapFocus);
      firstButtonRef.current?.focus();
    }

    return () => {
      document.removeEventListener("keydown", trapFocus);
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
        <button
          ref={firstButtonRef}
          className="bg-green-500 text-white px-4 py-2 rounded mr-2"
        >
          Button 1
        </button>
        <button
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Button 2
        </button>
      </div>
    </div>
  );
};

export default ModalTrapWithControls;