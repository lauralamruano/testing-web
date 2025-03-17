import React from "react";

const TabindexNegative: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Este elemento tiene tabIndex negativo y no está oculto, debe ser reportado */}
      <button tabIndex={-1} className="mt-2 p-2 bg-red-500 text-white rounded">Botón no enfocable</button>

      {/* Este elemento tiene tabIndex negativo pero está oculto con CSS, no debe ser reportado */}
      <div tabIndex={-2} style={{ display: "none" }} className="text-gray-500">Elemento oculto</div>

      {/* Este elemento tiene tabIndex negativo pero aria-hidden=true, no debe ser reportado */}
      <span tabIndex={-3} aria-hidden="true" className="text-gray-700">Texto accesible solo para lectores de pantalla</span>

      {/* Este elemento tiene tabIndex negativo y no cumple condiciones de exclusión, debe ser reportado */}
      <input type="text" tabIndex={-5} placeholder="Campo de texto no enfocable" className="mt-2 p-2 border rounded w-full" />
      <button  className="mt-2 p-2 bg-red-500 text-white rounded m-2">Botón 1</button>
      <button  className="mt-2 p-2 bg-red-500 text-white rounded m-2">Botón 2</button>
      <button  className="mt-2 p-2 bg-red-500 text-white rounded m-2">Botón 3</button>
      <div tabIndex={-1} className="mt-2 p-2 bg-red-500 text-white rounded m-2">Div con tabindex negative</div>

    </div>
  );
};

export default TabindexNegative;
