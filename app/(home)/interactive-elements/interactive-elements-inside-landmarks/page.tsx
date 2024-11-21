import React from "react";

const InteractiveLandmarks: React.FC = () => {
  return (
    <div className="w-full min-h-screen flex justify-center flex-col">
      <div role="banner" aria-label="Main Header" className="p-4 bg-green-500 text-white">
        <h1>Accessible Landmark Regions</h1>
        {/* Unfocused element: This button will not receive focus */}
        <button className="mt-2 bg-white text-green-900 p-3" tabIndex={-1}>
          Header Button
        </button>
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

      <div role="main" aria-label="Main Content" className="p-4 flex flex-col justify-center items-center">
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
    </div>
  );
};

export default InteractiveLandmarks;