import React, { useState, useRef, useEffect } from "react";

interface AccordionProps {
  title: string;
  content: string;
}

const AccordionTrap: React.FC<AccordionProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(true);
  const accordionRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Tab" && isOpen) {
      const focusableElements = accordionRef.current?.querySelectorAll(
        'a, button, input, textarea, select, details,[tabindex]:not([tabindex="-1"])'
      );
      const firstElement = focusableElements?.[0] as HTMLElement;
      const lastElement = focusableElements?.[focusableElements.length - 1] as HTMLElement;

      if (event.shiftKey) {
        if (document.activeElement === firstElement) {
          lastElement.focus();
          event.preventDefault();
        }
      } else {
        if (document.activeElement === lastElement) {
          firstElement.focus();
          event.preventDefault();
        }
      }
    }
  };

  useEffect(() => {
    if (isOpen) {
      accordionRef.current?.focus();
    }
  }, [isOpen]);

  return (
    <div className="w-full max-w-md mx-auto mt-5" id="accordion-trap">
      <button
        className="flex items-center justify-between w-full p-4 text-left bg-green-200 rounded-t-lg focus:outline-none"
        aria-expanded={isOpen}
        aria-controls="accordion-content"
        onClick={handleToggle}
        onKeyDown={handleKeyDown}
      >
        <span>{title}</span>
        <span className={`transform transition-transform ${isOpen ? "rotate-180" : ""}`}>
          ▼
        </span>
      </button>
      {isOpen && (
        <div
          id="accordion-content"
          ref={accordionRef}
          tabIndex={-1}
          className="p-4 bg-white border border-t-0 border-green-200 rounded-b-lg"
          onKeyDown={handleKeyDown}
        >
          <p>{content}</p>
          <button className="mt-2 p-2 mr-5 bg-green-500 text-white rounded" id="Button1">Focusable Button 1</button>
          <button className="mt-2 p-2 bg-green-500 text-white rounded" id="Button2">Focusable Button 2</button>
        </div>
      )}
    </div>
  );
};

export default AccordionTrap;