import React from "react";

const FocusPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-black p-6">
      <h1 className="text-4xl font-bold mb-6">Patterns</h1>
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-2xl font-semibold mb-4">Combobox</h2>
        <details className="dropdown">
          <summary className="btn m-1 cursor-pointer bg-green-200 text-black py-2 px-4 rounded hover:bg-green-100 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50">
            Open or Close
          </summary>
          <ul className="menu dropdown-content bg-white rounded-box z-[1] w-52 p-2 shadow-lg mt-2">
            <li className="mb-1">
              <a className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded">Item 1</a>
            </li>
            <li>
              <a className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded">Item 2</a>
            </li>
          </ul>
        </details>
      </div>
    </div>
  );
};

export default FocusPage;