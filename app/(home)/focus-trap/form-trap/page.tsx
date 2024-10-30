"use client";
import React from "react";

const FormTrapPage: React.FC = () => {
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.shiftKey && event.key === "Tab") {
      event.preventDefault();
      alert("Teclado atrapado: Shift + Tab detectado");
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between items-center">
    <h1 className="text-4xl font-bold mb-4 text-green-dark mt-8">Negative Effects of Keyboard Traps</h1>
      <section className="flex items-center bg-green-dark-50 p-8">
        <div>
        <p>
          Keyboard traps can prevent users from navigating away from a component, 
          leading to frustration and accessibility issues. It's important to ensure 
          that all interactive elements are accessible and that users can navigate 
          freely using their keyboard.
        </p>
        <form className="p-8 text-white">
        <label htmlFor="name" className="block mb-2">Name: <span className="text-red-800">(Here have a Keyboard Trap)</span></label>
        <input
          type="text"
          id="name"
          className="border p-2 mb-4 w-full bg-green-dark"
          onKeyDown={handleKeyDown}
        />
      </form>
      </div>
        <img className="w-6/12" src="/images/women-mobile.png" alt="" />
      </section>
      <footer className="p-8 bg-green-dark flex justify-center w-full w-heigh">
        <button className="mr-4 p-2 bg-green-500 text-white">Button 1</button>
        <button className="mr-4 p-2 bg-green-500 text-white">Button 2</button>
        <button className="p-2 bg-green-500 text-white" onKeyDown={handleKeyDown}>
          Button with Trap
        </button>
      </footer>
    </div>
  );
};

export default FormTrapPage;