import React from "react";

const TabIndexPositive = () => {
  return (
    <div className="p-4">
        <button>Button 1</button>
        <button>Button 2</button>
        <button>Button 3</button>
      {/* Error: tabindex positivo en un elemento interactivo */}
      <button className="bg-blue-500 text-white p-2" tabIndex={5}>
        Botón con tabindex positivo
      </button>
      
      {/* Error: tabindex positivo en un elemento no interactivo */}
      <div className="mt-4" tabIndex={3}>
        Contenedor no interactivo con tabindex positivo
      </div>
      
      {/* Error: contenedor no interactivo con tabindex positivo y elementos hijos interactivos */}
      <div className="mt-4 border p-4" tabIndex={4}>
        <input type="text" placeholder="Entrada dentro de un contenedor con tabindex" />
        <button className="ml-2 bg-green-500 text-white p-2">Enviar</button>
      </div>
      
      {/* Elemento no interactivo con tabindex innecesario */}
      <p className="mt-4" tabIndex={2}>
        Párrafo con tabindex positivo innecesario
      </p>
    </div>
  );
};

export default TabIndexPositive;
