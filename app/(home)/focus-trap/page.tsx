import React from "react";

const FocusPage = () => {
  return (
    <div>
      <h1>Patterns</h1>
      <h2>Combobox</h2>
      <details className="dropdown">
        <summary className="btn m-1">open or close</summary>
        <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
          <li>
            <a>Item 1</a>
          </li>
          <li>
            <a>Item 2</a>
          </li>
        </ul>
      </details>
    </div>
  );
};
export default FocusPage;
