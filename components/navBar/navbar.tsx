"use client";
import Link from "next/link";
import { useState } from "react";

const navItems = [
  { label: "Check List", href: "/check-points" },
  { label: "Focus Order", href: "/focus-order" },
  { label: "Focus Trap", href: "/focus-trap" },
  { label: "Keyboard", href: "/interactive-elements" },
  { label: "Color Contrast", href: "/color-contrast" },
  { label: "Zoom", href: "/zoom/rezise-text" },
  { label: "Atypical", href: "/atypical-examples" },
];

const NavBar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand */}
          <Link
            href="/"
            className="flex items-center gap-2 font-bold text-lg text-green-800 focus:outline-none focus:ring-2 focus:ring-green-600 rounded-md px-1"
          >
            <span
              className="w-8 h-8 bg-green-700 text-white rounded-md flex items-center justify-center text-xs font-mono font-bold select-none"
              aria-hidden="true"
            >
              A¹¹
            </span>
            <span>A11Y Testing</span>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-1" role="list">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-green-50 hover:text-green-800 transition-colors focus:outline-none focus:ring-2 focus:ring-green-600"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 rounded-md text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-600"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div id="mobile-menu" className="lg:hidden border-t border-gray-200 bg-white">
          <ul className="py-2 px-4 space-y-1" role="list">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block px-3 py-2 text-sm font-medium text-gray-700 rounded-md hover:bg-green-50 hover:text-green-800 transition-colors focus:outline-none focus:ring-2 focus:ring-green-600"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
