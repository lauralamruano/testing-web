"use client";
import React, { useEffect, useState } from "react";

const NestedFocusExample: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setIsModalOpen(true);
  }, []);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={isModalOpen ? "overflow-hidden" : ""}>
      <div aria-hidden={isModalOpen}>
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
          </section>
        </div>
      </div>

      {isModalOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div className="bg-white rounded-lg p-6 w-80">
            <h2 id="modal-title" className="text-lg font-bold">
              Bienvenido
            </h2>
            <p className="mt-2">
              Este es un modal que aparece al abrir la página.
            </p>
            <button
              onClick={closeModal}
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NestedFocusExample;