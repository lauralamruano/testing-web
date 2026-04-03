import React from "react";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-gray-700">
            <span
              className="w-7 h-7 bg-green-700 text-white rounded-md flex items-center justify-center text-xs font-mono font-bold select-none"
              aria-hidden="true"
            >
              A¹¹
            </span>
            <span className="font-semibold text-sm">A11Y Testing Web</span>
          </div>
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} — Built for accessibility education and testing.
          </p>
          <nav aria-label="Footer navigation">
            <ul className="flex items-center gap-4" role="list">
              <li>
                <Link
                  href="/check-points"
                  className="text-sm text-gray-500 hover:text-green-700 transition-colors focus:outline-none focus:ring-2 focus:ring-green-600 rounded"
                >
                  Check List
                </Link>
              </li>
              <li>
                <Link
                  href="/atypical-examples"
                  className="text-sm text-gray-500 hover:text-green-700 transition-colors focus:outline-none focus:ring-2 focus:ring-green-600 rounded"
                >
                  Atypical Examples
                </Link>
              </li>
              <li>
                <a
                  href="https://www.w3.org/WAI/WCAG21/quickref/"
                  className="text-sm text-gray-500 hover:text-green-700 transition-colors focus:outline-none focus:ring-2 focus:ring-green-600 rounded"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WCAG 2.1
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
