import React from "react";

const HiddenCss: React.FC = () => {
  return (
    <main>
      <section className="flex items-center justify-center gap-4 p-4">
        <div className="flex">
          <button className="focus:outline-none focus:ring-2 focus:ring-green-900 bg-gray-100 px-4 py-2 text-green-dark">
            Button 0
          </button>
          <div className="relative">
          <button
          className="focus:outline-none focus:ring-2 focus:ring-blue-500"
          style={{
            opacity: 0,
            position: "absolute",
          }}
        >
          Hidden Button (Opacity)
        </button>
        {/* Hidden using position absolute and left */}
       <button
          className="focus:outline-none focus:ring-2 focus:ring-blue-500"
          style={{
            position: "absolute",
            left: "-9999px",
          }}
        >
          Hidden Button (Position Absolute)
        </button>
          </div>
        </div>
        <button className="px-4 py-2 bg-green-900 text-white rounded focus:outline-none focus:ring-2 focus:ring-green-200">
          Button 1
        </button>
        <button className="px-4 py-2 bg-green-900 text-white rounded focus:outline-none focus:ring-2 focus:ring-green-200">
          Button 2
        </button>
        <button className="px-4 py-2 bg-green-900 text-white rounded focus:outline-none focus:ring-2 focus:ring-green-200">
          Button 3
        </button>
      </section>
      <section className="p-8 text-white font-bold outline">In this section here have a controls are hidden with CSS but are focusable con tabindex="0"</section>
        {/* Hidden using position fixed and top */}
        <button
          className="focus:outline-none focus:ring-2 focus:ring-blue-500"
          style={{
            position: "fixed",
            top: "-9999px",
          }}
          tabIndex={0}
        >
          Hidden Button (Position Fixed)
        </button>

        {/* Hidden using clip */}
        <button
          className="focus:outline-none focus:ring-2 focus:ring-blue-500"
          style={{
            position: "absolute",
            clip: "rect(0, 0, 0, 0)",
            overflow: "hidden",
          }}
          tabIndex={0}
        >
          Hidden Button (Clip)
        </button>

        {/* Hidden using height and overflow */}
        <button
          className="focus:outline-none focus:ring-2 focus:ring-blue-500"
          style={{
            height: "0",
            overflow: "hidden",
          }}
          tabIndex={0}
        >
          Hidden Button (Height & Overflow)
        </button>
    </main>
  );
};

export default HiddenCss;