import React from "react";

const TabIndexNeutro = () => {
  return (
    <div className="p-4 space-y-4 bg-gray-100 min-h-screen">
      {/* Error: div no interactivo con tabindex="0" */}
      <div tabIndex={0} className="p-4 border rounded bg-white shadow">
        Este es un div con tabindex
      </div>
      
      {/* Error: span no interactivo con tabindex="0" */}
      <span tabIndex={0} className="px-2 py-1 bg-blue-200 rounded">
        Este es un span con tabindex
      </span>
      
      {/* Error: p no interactivo con tabindex="0" */}
      <p tabIndex={0} className="p-2 bg-red-200 rounded">
        Este es un párrafo con tabindex
      </p>

      {/* Contenedor no interactivo con tabindex="0" y elementos hijos interactivos */}
      <div tabIndex={0} className="p-4 border border-gray-300 rounded bg-yellow-100">
        <button className="px-4 py-2 bg-green-500 text-white rounded">Botón dentro de un div con tabindex</button>
        <a href="#" className="text-blue-500 underline ml-4">Enlace dentro de un div con tabindex</a>
      </div>
      <button className="p-2 m-2 bg-blue-200"><span tabIndex={0}>Soy un span dentro de un button</span></button>
    </div>
  );
};

export default TabIndexNeutro;

