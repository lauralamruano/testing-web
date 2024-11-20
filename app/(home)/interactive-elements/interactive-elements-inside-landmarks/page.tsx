import React from "react";

const InteractiveLandmarks: React.FC = () => {
    return (
        <div className="w-full min-h-screen flex  justify-center flex-col">
          <header role="banner" aria-label="Main Header" className="p-4 bg-green-500 text-white">
            <h1>Accessible Landamrk regions</h1>
            <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-300 mt-2 bg-white text-green-900 p-3">
              Header Button
            </button>
          </header>
    
          <nav role="navigation" aria-label="Main Navigation" className="p-4 bg-white">
            <ul className="flex wap-6 justify-center items-center p-6 g-4">
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
            </ul>
          </nav>
    
          <main role="main" aria-label="Main Content" className="p-4 flex flex-col justify-center items-center">
            <section id="section1" aria-label="Section 1" className="mb-4  bg-green-100 p-12">
              <h2>Section 1</h2>
              <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-300">
                Click Me
              </button>
              <a href="#" className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-300 ml-2">
                Learn More
              </a>
            </section>
    
            <section id="section2" aria-label="Section 2" className="mb-4  bg-green-200 p-12">
              <h2>Section 2</h2>
              <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-300">
                Click Me
              </button>
              <a href="#" className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-300 ml-2">
                Learn More
              </a>
            </section>
    
            <section id="section3" aria-label="Section 3" className="mb-4  bg-green-300 p-12">
              <h2>Section 3</h2>
              <form>
                <label htmlFor="name" className="block">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="border p-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-300"
                />
    
                <label htmlFor="email" className="block mt-2">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="border p-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-300"
                />
    
                <button type="submit" className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-300 mt-2">
                  Submit
                </button>
              </form>
            </section>
          </main>
    
          <footer role="contentinfo" aria-label="Footer" className="p-4 bg-green-800 text-white">
            <p>Footer Content</p>
            <a href="#" className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-300">
              Contact Us
            </a>
          </footer>
        </div>
      );
    };

export default InteractiveLandmarks;