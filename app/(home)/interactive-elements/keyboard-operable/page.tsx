"use client";
import React, { useState } from "react";

const KeyboardOperable: React.FC = () => {
  const [message2Visible, setMessage2Visible] = useState(false);

  // Bloquear Enter/Space para Pseudo-botón 2 y 3
  const blockKeyboardActivation = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
    }
  };

  // Muestra alerta solo al hacer clic
  const handleClick = (label: string) => {
    alert(`Activated ${label} by mouse click`);
  };

  // Acción original de Pseudo-botón 1
  const handleAction1 = () => {
    console.log("Botón 1 activado");
  };

  // Acción original de Pseudo-botón 2: alternar un mensaje
  const handleAction2 = () => {
    setMessage2Visible((prev) => !prev);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center space-y-6 p-6">
      <h1 className="text-3xl font-bold mb-6">
        Controles con foco con distintas activaciones
      </h1>

      <a href="#link1" className="text-green-700 underline">
        Link 1
      </a>

      {/* Pseudo-botón 1: ahora también activable con teclado */}
      <button
        type="button"
        onClick={() => {
          handleAction1();
          handleClick("Botón 1");
        }}
        className="border border-blue-500 rounded px-4 py-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        Pseudo-botón 1
      </button>

      {/* Pseudo-botón 2: bloquea Enter/Space */}
      <button
        type="button"
        onClick={handleAction2}
        onKeyDown={blockKeyboardActivation}
        className="border border-green-500 rounded px-4 py-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-green-400"
        aria-disabled="true"
      >
        Pseudo-botón 2
      </button>

      {/* Mensaje toggled por Pseudo-botón 2 */}
      {message2Visible && (
        <div className="mt-4 p-4 bg-white rounded shadow">
          <strong>Acción ejecutada:</strong> Este mensaje apareció al hacer clic.
        </div>
      )}

      {/* Pseudo-botón 3: bloquea Enter/Space */}
      <button
        type="button"
        onClick={() => handleClick("Botón 3")}
        onKeyDown={blockKeyboardActivation}
        className="border border-red-500 rounded px-4 py-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-red-400"
        aria-disabled="true"
      >
        Pseudo-botón 3
      </button>
      <button
       type="button"
       className="border border-red-500 rounded px-4 py-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-red-400"
       aria-disabled="true">
      Button 4</button>
      <p className="text-gray-600 text-sm mt-6 max-w-md text-center">
        Todos estos elementos se pueden enfocar con <kbd>Tab</kbd>. El
        <strong> Pseudo-botón 1</strong> responde tanto a clic como a teclado
        (Enter/Space); los <strong>Pseudo-botones 2 y 3</strong> solo con clic.
      </p>

      <a href="#link2" className="text-green-700 underline">
        Link 2
      </a>
    </div>
  );
};

export default KeyboardOperable;
