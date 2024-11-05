import exp from "constants";
import React from "react";

const HiddenCss: React.FC = () => {
  return (
    <main>
      <section className="flex items-center justify-center gap-4">
        <div className="flex">
          <button className="focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-100 px-4 py-2 text-green-dark">
            Button 0
          </button>
          <div className="relative">
            <button
              className="absolute focus:outline-none focus:ring-2 focus:ring-blue-500"
              style={{
                position: "absolute",
                width: "1px",
                height: "1px",
                margin: "-1px",
                padding: "0",
                border: "0",
                clip: "rect(0, 0, 0, 0)",
                overflow: "hidden",
                whiteSpace: "nowrap",
              }}
              tabIndex={0}
            >
              Hidden Button
            </button>
          </div>
        </div>
        <button className="px-4 py-2 bg-green-900 text-white rounded">
          Button 1
        </button>
        <button className="px-4 py-2 bg-green-900 text-white rounded">
          Button 2
        </button>
        <button className="px-4 py-2 bg-green-900 text-white rounded">
          Button 3
        </button>
      </section>
    </main>
  );
};

export default HiddenCss;