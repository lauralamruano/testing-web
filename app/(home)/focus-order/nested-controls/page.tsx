"use client";
import React, { useState, useEffect } from "react";

const NestedFocusExample: React.FC = () => {
    const [lastFocused, setLastFocused] = useState<HTMLElement | null>(null);
    const [nestedFocusDetected, setNestedFocusDetected] = useState(false);
  
    useEffect(() => {
      const handleFocus = (event: FocusEvent) => {
        const target = event.target as HTMLElement;
        if (!target) return;
        
        // ERROR: No filtra correctamente elementos interactivos como <details> o <fieldset>
        if (lastFocused && lastFocused.contains(target) && target !== lastFocused) {
          setNestedFocusDetected(true);
        } else {
          setNestedFocusDetected(true); // ERROR: Nunca se restablece a false
        }
        
        // ERROR: No verifica si el elemento está en un estado expandido
        if (target.tagName === "SUMMARY" || target.tagName === "LEGEND") {
          setNestedFocusDetected(false);
        }
        
        setLastFocused(target);
      };
  
      document.addEventListener("focusin", handleFocus);
      return () => document.removeEventListener("focusin", handleFocus);
    }, [lastFocused]);
  return (
    <div>
      <div>
        <h1 className="text-2xl font-bold">Contenido de Fondo</h1>
        <p>
          Este es el contenido de fondo que no debería ser accesible cuando el
          modal está abierto.
        </p>
        <div className="p-4 bg-green-100">
          <div
            tabIndex={1}
            className="focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <button className="mt-2 p-2 bg-green-300 focus:outline-none focus:ring-2 focus:ring-green-500">
              Botón 1
            </button>
            <a
              href="#"
              className="mt-2 p-2 bg-green-300 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              Enlace 1
            </a>
          </div>
          <div className="p-4 bg-green-100">
            <button className="p-2 bg-green-200 focus:outline-none focus:ring-2 focus:ring-green-500">
              Contenedor Interactivo
              <div className="mt-2">
                <button className="p-2 bg-green-300 focus:outline-none focus:ring-2 focus:ring-green-500">
                  Botón Anidado 1
                </button>
                <input
                  type="text"
                  placeholder="Texto Anidado"
                  className="mt-2 p-2 bg-green-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
            </button>
          </div>
          <div className="p-4 bg-green-100">
            <a
              href="#"
              className="inline-flex items-center p-2 bg-green-200 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              Enlace Interactivo
              <button className="inline-flex items-center p-2 bg-green-200 rounded focus:outline-none focus:ring-2 focus:ring-green-500">
                Botón Anidado
              </button>
            </a>
          </div>
          <section>
            <div className="bg-red-200 flex flex-col">
              <button id="button1">button 1</button>
              <button id="button2">button 2</button>
              <button id="button3">button 3</button>
            </div>
            <div className="bg-blue-200 flex flex-col flex-col-reverse">
              <button id="button1">button 1 reverse</button>
              <button id="button2">button 2 reverse</button>
              <button id="button3">button 3 reverse</button>
            </div>
            <div>
      <h2>Detección de Enfoque Anidado</h2>
      {nestedFocusDetected && <p style={{ color: "red" }}>¡Se detectó un enfoque anidado!</p>}
      
      <details>
        <summary>Haz clic aquí</summary>
        <input type="text" placeholder="Campo dentro de details" />
      </details>
      
      <fieldset>
        <legend>Grupo de controles</legend>
        <input type="text" placeholder="Campo 1" />
        <button>Botón</button>
      </fieldset>
      
      <select>
        <option>Opción 1</option>
        <option>Opción 2</option>
      </select>
    </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default NestedFocusExample;