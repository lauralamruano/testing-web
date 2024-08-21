"use client";
import AccordionTrap from "@/components/accordion/accordion-trap";
import React, { useState, useRef, useEffect } from "react";

const FocusPage: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const firstFocusableElement = useRef<HTMLAnchorElement>(null);
  const lastFocusableElement = useRef<HTMLAnchorElement>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Tab") {
      if (e.shiftKey) {
        // Shift + Tab
        if (document.activeElement === firstFocusableElement.current) {
          e.preventDefault();
          lastFocusableElement.current?.focus();
        }
      } else {
        // Tab
        if (document.activeElement === lastFocusableElement.current) {
          e.preventDefault();
          firstFocusableElement.current?.focus();
        }
      }
    }
  };

  useEffect(() => {
    if (isOpen) {
      firstFocusableElement.current?.focus();
    }
  }, [isOpen]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-start">
      <h1 className="text-4xl font-bold mb-6">Patterns</h1>
      <div className="flex items-start justify-center gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Combobox</h2>
          <details className="dropdown" open={isOpen}>
            <summary
              className="btn m-1 cursor-pointer bg-green-200 text-black py-2 px-4 rounded hover:bg-green-100 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
              onClick={toggleDropdown}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  toggleDropdown();
                }
              }}
              tabIndex={0}
              aria-expanded={isOpen}
            >
              Open or Close
            </summary>
            {isOpen && (
              <ul
                className="menu dropdown-content bg-white rounded-box z-[1] w-52 p-2 shadow-lg mt-2"
                onKeyDown={handleKeyDown}
              >
                <li className="mb-1">
                  <a
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded"
                    href="#"
                    tabIndex={0}
                  >
                    Item 1
                  </a>
                </li>
                <li>
                  <a
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded"
                    href="#"
                    tabIndex={0}
                  >
                    Item 2
                  </a>
                </li>
              </ul>
            )}
          </details>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Accordion</h2>
          <AccordionTrap title={"Accordion Trap (Tab)"} content={""} />
        </div>
      </div>
    </div>
  );
};

export default FocusPage;