"use client";
import React, { useState } from "react";

const KeyboardOperable: React.FC = () => {
  const [message2Visible, setMessage2Visible] = useState(false);

  // Manejador genérico para mostrar alerta al hacer clic
  const handleClick = (label: string) => {
    alert(`Activated ${label} by mouse click`);
  };

  // Acción original de Pseudo-botón 1
  const handleAction1 = () => {
    console.log("Botón 1 activado");
  };

  // Acción original de Pseudo-botón 2: alternar un mensaje en la página
  const handleAction2 = () => {
    setMessage2Visible((prev) => !prev);
  };

  // Bloquear Enter/Space para Pseudo-botón 2
  const blockKeyboardActivation = (e: React.KeyboardEvent<HTMLSpanElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center space-y-6 p-6">
      <h1 className="text-3xl font-bold mb-6">
        Controles con foco pero no activables por teclado
      </h1>

      <a href="#link1" className="text-green-700 underline">
        Link 1
      </a>

      {/* Pseudo-botón 1: conserva alerta y log */}
      <div
        tabIndex={0}
        onClick={() => {
          handleAction1();
          handleClick("Botón 1");
        }}
        className="border border-blue-500 rounded px-4 py-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        Pseudo-botón 1
      </div>

      {/* Pseudo-botón 2: toggle de mensaje, focusable, pero bloquea teclado */}
      <span
        tabIndex={0}
        onClick={handleAction2}
        onKeyDown={blockKeyboardActivation}
        className="border border-green-500 rounded px-4 py-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-green-400"
      >
        Pseudo-botón 2
      </span>

      {/* Mensaje toggled por Pseudo-botón 2 */}
      {message2Visible && (
        <div className="mt-4 p-4 bg-white rounded shadow">
          <strong>Acción ejecutada:</strong> Este mensaje apareció al hacer clic.
        </div>
      )}

      {/* Pseudo-botón 3 (sin cambios) */}
      <div
        tabIndex={0}
        onClick={() => handleClick("Botón 3")}
        className="border border-red-500 rounded px-4 py-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-red-400"
      >
        Pseudo-botón 3
      </div>

      <p className="text-gray-600 text-sm mt-6 max-w-md text-center">
        Todos estos elementos se pueden enfocar con <kbd>Tab</kbd>, pero solo se
        activan con el mouse. <kbd>Enter</kbd> y <kbd>Space</kbd> están bloqueados
        en Pseudo-botón 2.
      </p>

      <a href="#link2" className="text-green-700 underline">
        Link 2
      </a>
    </div>
  );
};

export default KeyboardOperable;
