'use client';

import { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';

const FocusLost: NextPage = () => {
   // Generic handler to perform an action and then remove focus
   const handleActivate = (action: () => void) => {
    return (e: React.MouseEvent<HTMLElement>) => {
      e.currentTarget.blur();
      action();
    };
  };

  // Example actions for each element
  const onButtonClick = () => {
    console.log('Button clicked');
  };
  const onLinkClick = () => {
    console.log('Link activated');
  };
  const onInputActivate = () => {
    console.log('Input activated');
  };
  const onMenuActivate = () => {
    console.log('Menu item selected');
  };

  return (
    <>
      <Head>
        <title>Landing Page - Focus Blur Demo</title>
        <meta name="description" content="Demo landing page where activating an element removes focus." />
      </Head>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
        <h1 className="text-4xl font-bold mb-8">Welcome to Our Site</h1>

        <div className="space-y-4 w-full max-w-md">
          {/* Button */}
          <button
            className="w-full px-4 py-2 bg-blue-600 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-300"
            onClick={handleActivate(onButtonClick)}
          >
            Click Me
          </button>

          {/* Link */}
          <a
            href="#"
            className="block w-full px-4 py-2 bg-green-600 text-white rounded-md text-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-300"
            onClick={handleActivate(onLinkClick)}
          >
            Visit Feature
          </a>

          {/* Input */}
          <div className="relative">
            <input
              type="text"
              placeholder="Type something..."
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300"
              onClick={handleActivate(onInputActivate)}
            />
          </div>

          {/* Menu Items */}
          <ul className="flex space-x-2">
            {['Home', 'About', 'Contact'].map((item) => (
              <li key={item}>
                <button
                  className="px-3 py-1 bg-purple-600 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-300"
                  onClick={handleActivate(onMenuActivate)}
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};


export default FocusLost;
