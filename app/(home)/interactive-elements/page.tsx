"use client";
import React, { useEffect, useRef } from "react";

const InteractiveElements: React.FC = () => {
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.shiftKey && event.key === "Tab") {
        event.preventDefault();
      }
    };

    buttonRefs.current.forEach((button) => {
      button?.addEventListener("keydown", handleKeyDown);
    });

    return () => {
      buttonRefs.current.forEach((button) => {
        button?.removeEventListener("keydown", handleKeyDown);
      });
    };
  }, []);

  const handleClick = (label: string) => {
    alert(`Button ${label} clicked`);
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="font-bold text-2xl mt-0">2.1.1 Keyboard</h1>
      <div className="flex flex-wrap gap-12">
      <div className="flex flex-col space-y-2">
        <h2 className="font-bold">Elementos interactivos</h2>
        <a href="#link1" className="text-green-700 underline">
          Link 1
        </a>
        <a href="#link2" className="text-green-700 underline">
          Link 2
        </a>
        <a href="#link3" className="text-green-700 underline">
          Link 3
        </a>
      </div>
    <div className="flex flex-col space-y-2">
      <h2 className="font-bold">Estos elementos no se pueden navegar con Shift Tab</h2>
      {["Button 1", "Button 2", "Button 3"].map((label, index) => (
        <button
          key={index}
          ref={(el) => {
            buttonRefs.current[index] = el;
          }}
          className="px-4 py-2 bg-green-700 text-white rounded"
          onClick={() => handleClick(label)}
          aria-label={`Interactive ${label}`}
        >
          {label}
        </button>
      ))}
    </div>
    <div className="flex flex-col space-y-2">
        <label htmlFor="input1" className="text-gray-700">
          Input 1
        </label>
        <input
          id="input1"
          type="text"
          className="px-4 py-2 border rounded bg-white"
          aria-label="Input 1"
        />

        <label htmlFor="input2" className="text-gray-700">
          Input 2
        </label>
        <input
          id="input2"
          type="text"
          className="px-4 py-2 border rounded bg-white"
          aria-label="Input 2"
        />
      </div>
      </div>
    </div>
  );
};

export default InteractiveElements;