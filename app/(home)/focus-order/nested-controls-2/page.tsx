"use client";
import React, { useEffect, useState, useRef } from "react";

const NestedFocusExample: React.FC = () => {
  const [focusHistory, setFocusHistory] = useState<{ tag: string; id: string | null }[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    
    const handleFocus = (event: FocusEvent) => {
      const target = event.target as HTMLElement;
      setFocusHistory((prev) => [...prev, { tag: target.tagName, id: target.id || null }]);
      
      // Simular que el contenedor también recibe foco cuando un hijo lo obtiene
      if (containerRef.current?.contains(target) && containerRef.current !== target) {
        setFocusHistory((prev) => [...prev, { tag: "DIV", id: "container" }]);
      }
    };

    document.addEventListener("focus", handleFocus, true);
    return () => document.removeEventListener("focus", handleFocus, true);
  }, []);

  return (
    <div className="p-4 border border-gray-300">
      <h2 className="text-lg font-bold">Nested Focus Test</h2>
      <div ref={containerRef} className="p-2 border border-blue-500" id="container">
        <button id="outer-button" className="p-2 bg-blue-500 text-white rounded">Outer Button</button>
        <div className="mt-2 p-2 border border-red-500" id="nested-container">
          <button id="inner-button" className="p-2 bg-green-500 text-white rounded">Inner Button</button>
          <input id="inner-input" type="text" placeholder="Inner Input" className="mt-2 p-2 border border-gray-400" />
        </div>
      </div>
      <div className="mt-4">
        <h3 className="font-medium">Focus History:</h3>
        <ul>
          {focusHistory.map((item, index) => (
            <li key={index}>{item.tag} {item.id ? `(#${item.id})` : ""}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NestedFocusExample;
