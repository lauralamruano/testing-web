"use client";
import React, { useEffect, useState, useRef } from "react";

const MultipleFocusDetection: React.FC = () => {
  const [focusHistory, setFocusHistory] = useState<
    { tag: string; id: string | null }[]
  >([]);
  const lastKeyRef = useRef<string>("");

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
      setFocusHistory((prev) => [
        ...prev,
        { tag: target.tagName, id: target.id || null },
      ]);

      if (
        (target.id === "button1" && lastKeyRef.current === "tab") ||
        (target.id === "button2" && lastKeyRef.current === "shiftTab")
      ) {
        // Forzar que el mismo elemento reciba foco dos veces consecutivas
        target.blur();
        target.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown, true);
    document.addEventListener("focus", handleFocus, true);

    return () => {
      document.removeEventListener("keydown", handleKeyDown, true);
      document.removeEventListener("focus", handleFocus, true);
    };
  }, []);
  const [lastFocused, setLastFocused] = useState<HTMLElement | null>(null);
  const [duplicateFocus, setDuplicateFocus] = useState(false);

  useEffect(() => {
    const handleFocus = (event: FocusEvent) => {
      const target = event.target as HTMLElement;
      if (!target) return;

      // ERROR: No compara correctamente si el elemento ya tenía el foco
      if (lastFocused === target) {
        setDuplicateFocus(true);
      } else {
        setDuplicateFocus(false); // ERROR: Esto puede ocultar el problema en algunos casos
      }

      // ERROR: No maneja correctamente la navegación con Shift + Tab
      setLastFocused(target);
    };

    document.addEventListener("focusin", handleFocus);
    return () => document.removeEventListener("focusin", handleFocus);
  }, [lastFocused]);

  return (
    <div className="p-4 border border-gray-300">
      <h2 className="text-lg font-bold">Multiple Focus Detection</h2>
      <button id="button1" className="p-2 bg-blue-500 text-white rounded">
        Button 1
      </button>
      <button id="button2" className="p-2 bg-green-500 text-white rounded ml-2">
        Button 2
      </button>
      <input
        id="input1"
        type="text"
        placeholder="Type here"
        className="mt-2 p-2 border border-gray-400"
      />
      <a
        className="sc-pc-view-button"
        href="/p/mobo-triton-ultimate-three-wheeled-cruiser/prod25350556"
        aria-label="Link to: Shocking Values Mobo Triton: Ultimate Three-Wheeled Cruiser Average Rating: 4 out of 5 stars. Free shipping Plus Current price: $299.98"
        draggable="false"
      >
        <button
          className="sc-btn sc-btn-primary sc-btn-block sc-pc-action-button"
          type="button"
        >
          <span>View</span>
        </button>
      </a>
      <div>
        <h2>Detección de Enfoque Duplicado</h2>
        {duplicateFocus && (
          <p style={{ color: "red" }}>¡Se detectó un enfoque duplicado!</p>
        )}

        <input type="text" placeholder="Campo 1" />
        <button>Botón</button>
        <input type="text" placeholder="Campo 2" />
        <a href="#">Enlace</a>
      </div>
    </div>
  );
};

export default MultipleFocusDetection;
