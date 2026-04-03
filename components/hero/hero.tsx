import Link from "next/link";
import React from "react";

const categories = [
  {
    title: "Focus Trap",
    wcag: "2.1.2",
    description: "Test keyboard traps in modals, forms, and interactive components.",
    href: "/focus-trap",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    color: "bg-red-50 text-red-700 border-red-200",
  },
  {
    title: "Focus Order",
    wcag: "2.4.3",
    description: "Explore logical focus sequences, tabindex usage, and nested controls.",
    href: "/focus-order",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
      </svg>
    ),
    color: "bg-blue-50 text-blue-700 border-blue-200",
  },
  {
    title: "Keyboard",
    wcag: "2.1.1",
    description: "Verify all functionality is accessible via keyboard navigation.",
    href: "/interactive-elements",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    color: "bg-purple-50 text-purple-700 border-purple-200",
  },
  {
    title: "Color Contrast",
    wcag: "1.4.3",
    description: "Identify links and text that rely solely on color with insufficient contrast.",
    href: "/color-contrast",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    color: "bg-yellow-50 text-yellow-700 border-yellow-200",
  },
  {
    title: "Zoom & Text Resize",
    wcag: "1.4.4",
    description: "Test content behavior when text is scaled to 200% zoom.",
    href: "/zoom/rezise-text",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
      </svg>
    ),
    color: "bg-orange-50 text-orange-700 border-orange-200",
  },
  {
    title: "Atypical Examples",
    wcag: "ARIA",
    description: "Advanced accessible patterns: sortable tables, file upload, email templates.",
    href: "/atypical-examples",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    color: "bg-green-50 text-green-700 border-green-200",
  },
];

const Hero = () => {
  return (
    <>
      {/* Hero section */}
      <section className="bg-gradient-to-br from-green-800 to-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-2xl">
            <span className="badge-wcag mb-4 inline-block bg-green-700/50 text-green-100 border-green-600">
              WCAG 2.1 Compliance
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-4">
              Web Accessibility<br />
              <span className="text-green-200">Testing Suite</span>
            </h1>
            <p className="text-lg text-green-100 mb-8 leading-relaxed">
              Explore, test, and understand accessibility patterns and anti-patterns.
              Each example is built to demonstrate real WCAG success criteria — both correct
              implementations and intentional failures.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/check-points"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-green-800 font-semibold rounded-lg hover:bg-green-50 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-green-700"
              >
                View WCAG Checklist
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="/atypical-examples"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-green-700/50 text-white font-semibold rounded-lg border border-green-500 hover:bg-green-700 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-green-700"
              >
                Atypical Examples
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Test categories section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16" aria-labelledby="categories-heading">
        <div className="mb-10">
          <h2 id="categories-heading" className="text-2xl font-bold text-gray-900">
            Test Categories
          </h2>
          <p className="text-gray-600 mt-1">
            Each category maps to one or more WCAG 2.1 success criteria.
          </p>
        </div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5" role="list">
          {categories.map((cat) => (
            <li key={cat.href}>
              <Link
                href={cat.href}
                className="flex flex-col gap-3 p-5 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:border-green-300 transition-all group focus:outline-none focus:ring-2 focus:ring-green-600 h-full"
              >
                <div className={`w-10 h-10 rounded-lg border flex items-center justify-center ${cat.color}`}>
                  {cat.icon}
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold text-gray-900 group-hover:text-green-700 transition-colors">
                      {cat.title}
                    </h3>
                    <span className="badge-wcag text-[10px]">{cat.wcag}</span>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">{cat.description}</p>
                </div>
                <span className="text-sm font-medium text-green-700 group-hover:text-green-600 mt-auto inline-flex items-center gap-1">
                  Explore
                  <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default Hero;
