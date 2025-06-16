"use client";
import React from "react";

const KeyboardOperable = () => {
  const handleClick = (label: string) => {
    alert(`Activated ${label} by mouse click`);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center space-y-6 p-6">
      <h1 className="text-3xl font-bold mb-6">Controles con foco pero no activables por teclado</h1>

      {/* Control 1 */}
      <div
        tabIndex={0}
        onClick={() => handleClick("Botón 1")}
        className="border border-blue-500 rounded px-4 py-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        Pseudo-botón 1
      </div>

      {/* Control 2 */}
      <span
        tabIndex={0}
        onClick={() => handleClick("Botón 2")}
        className="border border-green-500 rounded px-4 py-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-green-400"
      >
        Pseudo-botón 2
      </span>

      {/* Control 3 */}
      <div
        tabIndex={0}
        onClick={() => handleClick("Botón 3")}
        className="border border-red-500 rounded px-4 py-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-red-400"
      >
        Pseudo-botón 3
      </div>

      <p className="text-gray-600 text-sm mt-6 max-w-md text-center">
        Todos estos elementos se pueden enfocar con la tecla <kbd>Tab</kbd>, pero no se activan con <kbd>Enter</kbd> o <kbd>Space</kbd>. Solo se activan con el mouse, lo cual representa una barrera de accesibilidad.
      </p>
    </div>
  );
};

export default KeyboardOperable;
