'use client';
import React, { useRef } from 'react';

const IlogicalOrder: React.FC = () => {
  // Sección A: Referencias y orden personalizado: Botón 1 → Botón 3 → Botón 2
  const buttonRefsA = useRef<(HTMLButtonElement | null)[]>([]);
  const customOrderA = [0, 2, 1];

  // Sección B: Referencias para botones con nombres de frutas
  const buttonRefsB = useRef<(HTMLButtonElement | null)[]>([]);
  // Orden personalizado para la sección B: por ejemplo, [1, 0, 2]
  // DOM Order: [0: 'Manzana', 1: 'Banana', 2: 'Naranja']
  // Custom Order: Banana → Manzana → Naranja
  const customOrderB = [1, 0, 2];

  // Actualizamos el tipo del evento a React.KeyboardEvent<HTMLElement>
  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLElement>,
    buttonRefs: React.MutableRefObject<(HTMLButtonElement | null)[]>,
    customOrder: number[]
  ) => {
    if (e.key === 'Tab') {
      e.preventDefault();
      // Obtener el elemento actualmente enfocado
      const activeElement = document.activeElement;
      // Encontrar el índice del botón enfocado dentro del array de referencias
      const currentIndex = buttonRefs.current.findIndex(
        (button) => button === activeElement
      );
      if (currentIndex === -1) return;
      // Determinar la posición custom actual
      const currentCustomIndex = customOrder.indexOf(currentIndex);
      // Calcular la posición del siguiente elemento (de forma cíclica)
      const nextCustomIndex = (currentCustomIndex + 1) % customOrder.length;
      const nextDomIndex = customOrder[nextCustomIndex];
      // Mover el foco al botón correspondiente
      buttonRefs.current[nextDomIndex]?.focus();
    }
  };

  return (
    <div className="p-4 space-y-8">
      {/* Sección A */}
      <section
        className="border p-4"
        onKeyDown={(e) => handleKeyDown(e, buttonRefsA, customOrderA)}
      >
        <h2 className="text-lg font-bold mb-4">
          Sección A: Orden personalizado (Botón 1 → Botón 3 → Botón 2)
        </h2>
        <div className="flex flex-col space-y-2">
          {['Botón 1', 'Botón 2', 'Botón 3'].map((label, index) => (
            <button
              key={label}
              ref={(el) => {
                buttonRefsA.current[index] = el;
              }}
              className="p-2 bg-blue-500 text-white"
            >
              {label}
            </button>
          ))}
        </div>
        <p className="mt-2 text-sm">
          Orden en el DOM: Botón 1, Botón 2, Botón 3. Orden personalizado: 1, 3, 2.
        </p>
      </section>

      {/* Sección B: Botones con nombres de frutas */}
      <section
        className="border p-4"
        onKeyDown={(e) => handleKeyDown(e, buttonRefsB, customOrderB)}
      >
        <h2 className="text-lg font-bold mb-4">
          Sección B: Frutas - Orden personalizado (Banana → Manzana → Naranja)
        </h2>
        <div className="flex flex-col space-y-2">
          {['Manzana', 'Banana', 'Naranja'].map((label, index) => (
            <button
              key={label}
              ref={(el) => {
                buttonRefsB.current[index] = el;
              }}
              className="p-2 bg-green-500 text-white"
            >
              {label}
            </button>
          ))}
        </div>
        <p className="mt-2 text-sm">
          Orden en el DOM: Manzana, Banana, Naranja. Orden personalizado: Banana, Manzana, Naranja.
        </p>
      </section>
    </div>
  );
};

export default IlogicalOrder;
