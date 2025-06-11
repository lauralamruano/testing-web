import Head from 'next/head';
import React from 'react';

const EmailTemplate: React.FC = () => {
  return (
    <>
      <Head>
        <title>Barcelo.com</title>
        <meta name="robots" content="noindex, nofollow" />
        <meta name="referrer" content="no-referrer" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <link
          rel="icon"
          type="image/png"
          href="https://image.news.barcelo.com/lib/fe5315707c610d747210/m/1/277c4c92-6e61-418f-b90b-c06ff79d200d.png"
        />
      </Head>

      <div className="min-h-screen bg-gray-100">
        {/* Wrapper */}
        <table className="w-full max-w-screen-md mx-auto bg-white" cellPadding={0} cellSpacing={0}>
          <tbody>
            <tr>
              <td className="p-4">
                {/* Header */}
                <div className="flex justify-between items-center">
                  <img
                    src="https://image.news.barcelo.com/lib/fe5315707c610d747210/m/1/277c4c92-6e61-418f-b90b-c06ff79d200d.png"
                    alt="Barcelo Logo"
                    className="h-12 w-auto"
                  />
                  {/* Mobile menu toggle (if needed) */}
                  <label htmlFor="mobile-menu" className="block md:hidden cursor-pointer p-2">
                    <span className="block h-1 w-6 mb-1 bg-gray-800"></span>
                    <span className="block h-1 w-6 mb-1 bg-gray-800"></span>
                    <span className="block h-1 w-6 bg-gray-800"></span>
                  </label>
                </div>

                {/* Content */}
                <div className="mt-6">
                  <h1 className="text-2xl font-bold text-gray-800 mb-4">Welcome to Barceló</h1>
                  <p className="text-gray-600 leading-relaxed">
                    Thank you for joining Barceló. We are excited to have you on board.
                  </p>

                  {/* Button example */}
                  <div className="mt-6">
                    <a
                      href="#"
                      className="inline-block bg-blue-600 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                      Get Started
                    </a>
                  </div>
                </div>

                {/* Footer */}
                <div className="mt-12 border-t pt-6 text-sm text-gray-500">
                  <p>© {new Date().getFullYear()} Barceló. All rights reserved.</p>
                  <p>
                    <a href="#" className="underline">
                      Unsubscribe
                    </a>
                  </p>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default EmailTemplate;
