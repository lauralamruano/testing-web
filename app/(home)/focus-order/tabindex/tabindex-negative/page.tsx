import React from "react";

const TabindexNegative: React.FC = () => {
  return (
    <div>
      {/* Este elemento tiene tabIndex negativo y no está oculto, debe ser reportado */}
      <button tabIndex={-1}>Botón no enfocable</button>

      {/* Este elemento tiene tabIndex negativo pero está oculto con CSS, no debe ser reportado */}
      <div tabIndex={-2} style={{ display: "none" }}>Elemento oculto</div>

      {/* Este elemento tiene tabIndex negativo pero aria-hidden=true, no debe ser reportado */}
      <span tabIndex={-3} aria-hidden="true">Texto accesible solo para lectores de pantalla</span>

      {/* Este elemento tiene tabIndex negativo y no cumple condiciones de exclusión, debe ser reportado */}
      <input type="text" tabIndex={-5} placeholder="Campo de texto no enfocable" />
    </div>
  );
};

export default TabindexNegative;
