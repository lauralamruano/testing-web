"use client";
import AccessibleLink from "@/components/Link/native-link-focus-order";
import RadioGroup from "@/components/radio-group/radio-group";
import React, { useEffect, useRef, useState } from "react";

const OtherInteractiveElements: React.FC = () => {
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

  const handleLinkClick = () => {
    alert("Link clicked!");
  };

  return (
    <div className="flex flex-col items-center p-6">
      <main className="flex flex-wrap gap-12">
      <div className="flex flex-col space-y-2">
        <h2 className="font-bold">Interactive Elements</h2>
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
      <h2 className="font-bold">These items cannot be navigated with Shift Tab</h2>
      {["Button 1", "Button 2", "Button 3"].map((label, index) => (
        <button
          key={index}
          ref={(el) => {
            buttonRefs.current[index] = el;
          }}
          className="px-4 py-2 bg-green-700 text-red-500 rounded"
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
      <section className="mt-8 w-full">
        <h2 className="font-bold text-xl">Non-Interactive Elements</h2>
        <div className="flex flex-col space-y-2 mt-4">
          <div
            className="p-4 border rounded bg-gray-100"
            tabIndex={0}
            aria-label="Non-interactive element 1"
          >
            Non-interactive element 1
          </div>
          <div
            className="p-4 border rounded bg-gray-100"
            tabIndex={0}
            aria-label="Non-interactive element 2"
          >
            Non-interactive element 2
          </div>
          <div
            className="p-4 border rounded bg-gray-100"
            tabIndex={0}
            aria-label="Non-interactive element 3"
          >
            Non-interactive element 3
          </div>
        </div>
      </section>
      <div role="region">
        <h2 className="font-bold text-xl">Radio Group with Keydown</h2>
        <RadioGroup/>
        </div>
        <section><AccessibleLink text="Click me" onClick={handleLinkClick} /></section>
      </main>
    </div>
  );
};

export default OtherInteractiveElements;