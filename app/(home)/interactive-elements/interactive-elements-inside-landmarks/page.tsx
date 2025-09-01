"use client";
import React, { useEffect, useState } from "react";

const InteractiveLandmarks: React.FC = () => {
  const [nonOperable, setNonOperable] = useState<string[]>([]);

  useEffect(() => {
    const checkKeyboardOperability = (event: KeyboardEvent) => {
      const activeElement = document.activeElement as HTMLElement;
      if (!activeElement) return;

      // ERROR: Detectar elementos que reciben foco pero no responden a Enter o Space
      if (
        ((activeElement.tagName === "DIV" || activeElement.tagName === "SPAN" || activeElement.tagName === "BUTTON") &&
        activeElement.getAttribute("tabindex") !== null) ||
        (activeElement.tagName === "BUTTON" && !activeElement.hasAttribute("onclick") && !activeElement.hasAttribute("type")) // Botón sin acción
      ) {
        setNonOperable((prev) => {
          if (!prev.includes(activeElement.tagName)) {
            return [...prev, activeElement.tagName];
          }
          return prev;
        });
      }
    };

    document.addEventListener("keydown", checkKeyboardOperability);
    return () => document.removeEventListener("keydown", checkKeyboardOperability);
  }, []);
  return (
    <div className="w-full min-h-screen flex justify-center flex-col">
      <div role="banner" aria-label="Main Header" className="p-4 bg-green-500 text-white">
        <h1>Accessible Landmark Regions</h1>
        {/* Unfocused element: This button will not receive focus */}
        <button className="mt-2 bg-white text-green-900 p-3" tabIndex={-1} aria-label="Amigo">
          Header Button
        </button>
        <button role="link">Double role</button>
      </div>

      <div role="navigation" aria-label="Main Navigation" className="p-4 bg-white flex flex-col justify-center items-center">
        <span role="heading" className="font-bold text-green-dark"> This is a Heading with ARIA</span>
        <ul className="flex wrap-6 justify-center items-center p-6 g-4 space-x-4">
          <li>
            <a href="#section1" className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-300 outline outline-black p-2">
              Section 1
            </a>
          </li>
          <li>
            <a href="#section2" className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-300 outline outline-black p-2">
              Section 2
            </a>
          </li>
          <li>
            <a href="#section3" className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-300 outline outline-black p-2">
              Section 3
            </a>
          </li>
          {/* Non-interactive element receiving focus */}
          <li tabIndex={0} className=" p-2 bg-red-100">
            Non-interactive item
          </li>
        </ul>
      </div>

      <div role="main" aria-label="Main Content" className="p-4 flex flex-col justify-center items-center space-y-2">
        <h1 className="p-4">This is a native heading</h1>
        <div tabIndex={0} className=" p-2 bg-red-100 outline outline-red-800 space-y-2">
            Non-interactive item 2
          </div>
        <section id="section1" aria-label="Section 1" className="mb-4 bg-green-100 p-12">
          <h2>Section 1</h2>
          <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-300">
            Click Me
          </button>
          <a href="#" className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-300 ml-2">
            Learn More
          </a>
        </section>

        <section id="section2" aria-label="Section 2" className="mb-4 bg-green-200 p-12">
          <h2>Section 2</h2>
          <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-300">
            Click Me
          </button>
          <a href="#" className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-300 ml-2">
            Learn More
          </a>
        </section>

        <section id="section3" aria-label="Section 3" className="mb-4 bg-green-300 p-12 flex-col flex">
          <h2>Section 3</h2>
          <form className="flex-col flex">
            <label htmlFor="name" className="block">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              className="border p-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-300 text-white"
            />

            <label htmlFor="email" className="block mt-2">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              className="border p-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-300 text-white"
            />

            <button type="submit" className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-300 mt-2 p-2 outline outline-black">
              Submit
            </button>
          </form>
        </section>

        {/* Hidden control receiving focus */}
        <button className="hidden focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-300">
          Hidden Button
        </button>
      </div>

      <div role="contentinfo" aria-label="Footer" className="p-4 bg-green-800 text-white">
        <p>Footer Content</p>
        <a href="#" className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-300">
          Contact Us
        </a>
      </div>
      <div className="p-4 border border-gray-300 rounded-lg shadow-md">
      <h2 className="text-lg font-bold mb-2">Detección de Controles No Operables por Teclado</h2>
      {nonOperable.length > 0 && (
        <p className="text-red-500 font-semibold">Elementos no operables detectados: {nonOperable.join(", ")}</p>
      )}
      
      <div className="flex flex-col gap-2">
        <button className="p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
          Botón Operable
        </button>
        
        <button
          tabIndex={0} // ERROR: Botón sin acción asociada
          className="p-2 bg-red-500 text-white rounded-md"
        >
          Botón No Operable
        </button>
        
        <div
          tabIndex={0} // ERROR: Este elemento puede recibir foco pero no responde a Enter o Space
          className="p-2 bg-gray-300 rounded-md"
        >
          DIV No Operable
        </div>
        
        <span
          tabIndex={0} // ERROR: Este elemento también recibe foco pero no es activable
          className="p-2 bg-gray-400 rounded-md"
        >
          SPAN No Operable
        </span>
        
        <a
          href="#"
          className="p-2 text-blue-500 underline hover:text-blue-700"
        >
          Enlace Operable
        </a>
      </div>
    </div>
    </div>
  );
};

export default InteractiveLandmarks;