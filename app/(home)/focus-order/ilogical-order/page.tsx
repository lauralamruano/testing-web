'use client';
import React, { useRef } from 'react';

const IlogicalOrder: React.FC = () => {
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);
  // Orden custom: índice 0 (Botón 1) → índice 2 (Botón 3) → índice 1 (Botón 2)
  const customOrder = [0, 2, 1];

  const handleContainerKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Tab') {
      e.preventDefault();
      // Obtener el elemento actualmente enfocado
      const activeElement = document.activeElement;
      // Encontrar el índice en nuestro array de refs
      const currentIndex = buttonRefs.current.findIndex((button) => button === activeElement);
      if (currentIndex === -1) return;
      // Buscar la posición del índice actual dentro del orden custom
      const currentCustomIndex = customOrder.indexOf(currentIndex);
      // Calcular el siguiente índice custom de forma cíclica
      const nextCustomIndex = (currentCustomIndex + 1) % customOrder.length;
      const nextDomIndex = customOrder[nextCustomIndex];
      // Mover el foco al botón correspondiente
      buttonRefs.current[nextDomIndex]?.focus();
    }
  };

  return (
    <div className="p-4" onKeyDown={handleContainerKeyDown}>
      <h1 className="text-xl mb-4">
        Ejemplo de error de accesibilidad: Foco modificado por evento
      </h1>
      <div className="flex flex-col space-y-2">
        {['Botón 1', 'Botón 2', 'Botón 3'].map((label, index) => (
          <button
            key={label}
            ref={(el) => {
              buttonRefs.current[index] = el;
            }}
            className="p-2 bg-blue-500 text-white"
          >
            {label}
          </button>
        ))}
      </div>
      <p className="mt-4 text-sm">
        Nota: Aunque en el DOM el orden es Botón 1, Botón 2, Botón 3, al presionar Tab el foco
        se mueve en el orden: Botón 1 → Botón 3 → Botón 2.
      </p>
    </div>
  );
};

export default IlogicalOrder;

