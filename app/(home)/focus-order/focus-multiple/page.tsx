"use client";
import React, { useEffect, useState, useRef } from "react";

const MultipleFocusDetection: React.FC = () => {
  const [focusHistory, setFocusHistory] = useState<
    { tag: string; id: string | null }[]
  >([]);
  const lastKeyRef = useRef<string>("");
  const [lastFocused, setLastFocused] = useState<HTMLElement | null>(null);
  const [duplicateFocus, setDuplicateFocus] = useState(false);
  const focusButtonRef = useRef<HTMLButtonElement | null>(null);
  const focusCountRef = useRef<number>(0);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Tab") {
        lastKeyRef.current = event.shiftKey ? "shiftTab" : "tab";
      } else {
        lastKeyRef.current = "";
      }
    };

    const handleFocus = (event: FocusEvent) => {
      const target = event.target as HTMLElement;
      if (!target) return;

      setFocusHistory((prev) => [
        ...prev,
        { tag: target.tagName, id: target.id || null },
      ]);

      // Detectar si el mismo elemento recibe el foco consecutivamente
      if (lastFocused === target && lastKeyRef.current === "tab") {
        setDuplicateFocus(true);
      } else {
        setDuplicateFocus(false);
      }

      setLastFocused(target);
    };

    document.addEventListener("keydown", handleKeyDown, true);
    document.addEventListener("focusin", handleFocus, true);

    return () => {
      document.removeEventListener("keydown", handleKeyDown, true);
      document.removeEventListener("focusin", handleFocus, true);
    };
  }, [lastFocused]);

  useEffect(() => {
    const enforceDuplicateFocus = (event: KeyboardEvent) => {
      if (event.key === "Tab" && document.activeElement === focusButtonRef.current) {
        if (focusCountRef.current < 2) {
          event.preventDefault(); // Evita que pase al siguiente elemento
          focusCountRef.current += 1;
          setTimeout(() => {
            focusButtonRef.current?.focus();
          }, 100); // Forzar el enfoque en el mismo botón hasta 2 veces
        }
      }
    };

    document.addEventListener("keydown", enforceDuplicateFocus, true);

    return () => {
      document.removeEventListener("keydown", enforceDuplicateFocus, true);
    };
  }, []);

  return (
    <div className="p-4 border border-gray-300 rounded-lg shadow-md">
      <h2 className="text-lg font-bold mb-2">Detección de Enfoque Múltiple</h2>
      {duplicateFocus && (
        <p className="text-red-500 font-semibold">¡Se detectó un enfoque duplicado!</p>
      )}
      
      <div className="flex flex-col gap-2">
        <button id="button1" className="p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
          Button 1
        </button>
        <button id="button2" className="p-2 bg-green-500 text-white rounded-md hover:bg-green-600">
          Button 2
        </button>
        <input
          id="input1"
          type="text"
          placeholder="Escribe aquí"
          className="p-2 border border-gray-400 rounded-md"
        />
        <a
          className="sc-pc-view-button"
          href="/p/mobo-triton-ultimate-three-wheeled-cruiser/prod25350556"
          aria-label="Link to: Shocking Values Mobo Triton: Ultimate Three-Wheeled Cruiser Average Rating: 4 out of 5 stars. Free shipping Plus Current price: $299.98"
          draggable="false"
        >
          <button
            className="sc-btn sc-btn-primary sc-btn-block sc-pc-action-button p-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600"
            type="button"
          >
            <span>View</span>
          </button>
        </a>
        <button
          id="focusButton"
          ref={focusButtonRef}
          className="p-2 bg-purple-500 text-white rounded-md hover:bg-purple-600"
        >
          Haz clic aquí
        </button>
        <button className="p-2 bg-red-500 text-white rounded-md hover:bg-red-600">
          Otro botón
        </button>
      </div>
    </div>
  );
};

export default MultipleFocusDetection;

