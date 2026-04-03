import Link from "next/link";
import React from "react";

const principles = [
  {
    name: "Perceivable",
    color: "bg-blue-50 text-blue-800",
    items: [
      { label: "1.1.1 Non-text Content", href: null },
      { label: "1.2.1 Audio-only and Video-only (Prerecorded)", href: null },
      { label: "1.3.1 Info and Relationships", href: null },
      { label: "1.4.1 Use of Color", href: null },
      { label: "1.4.3 Color Contrast", href: "/color-contrast" },
      { label: "1.4.4 Resize Text", href: "/zoom/rezise-text" },
    ],
  },
  {
    name: "Operable",
    color: "bg-green-50 text-green-800",
    items: [
      { label: "2.1.1 Keyboard", href: "/interactive-elements" },
      { label: "2.1.2 No Keyboard Trap", href: "/focus-trap" },
      { label: "2.2.1 Timing Adjustable", href: "/timing-adjustable" },
      { label: "2.4.3 Focus Order", href: "/focus-order" },
    ],
  },
  {
    name: "Understandable",
    color: "bg-purple-50 text-purple-800",
    items: [
      { label: "3.1.1 Language of Page", href: null },
      { label: "3.2.1 On Focus", href: null },
      { label: "3.3.1 Error Identification", href: null },
      { label: "3.3.2 Labels or Instructions", href: null },
    ],
  },
  {
    name: "Robust",
    color: "bg-orange-50 text-orange-800",
    items: [
      { label: "4.1.1 Parsing", href: null },
      { label: "4.1.2 Name, Role, Value", href: null },
    ],
  },
];

const CheckListTable = () => {
  return (
    <div className="w-full overflow-x-auto">
      <table
        className="w-full border-collapse bg-white text-sm"
        aria-describedby="accessibility-table-description"
      >
        <thead>
          <tr className="border-b border-gray-200">
            <th
              scope="col"
              className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider bg-gray-50 w-48"
            >
              Principle
            </th>
            <th
              scope="col"
              className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider bg-gray-50"
            >
              Success Criteria
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {principles.map((principle) => (
            <tr key={principle.name} className="align-top">
              <td className="px-6 py-4">
                <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold ${principle.color}`}>
                  {principle.name}
                </span>
              </td>
              <td className="px-6 py-4">
                <ul className="space-y-2" role="list">
                  {principle.items.map((item) => (
                    <li key={item.label} className="flex items-center gap-2">
                      {item.href ? (
                        <>
                          <span className="w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0" aria-hidden="true" />
                          <Link
                            href={item.href}
                            className="text-green-700 hover:text-green-600 hover:underline font-medium focus:outline-none focus:ring-2 focus:ring-green-600 rounded"
                          >
                            {item.label}
                          </Link>
                          <span className="badge-pass text-[10px]">Test available</span>
                        </>
                      ) : (
                        <>
                          <span className="w-1.5 h-1.5 rounded-full bg-gray-300 flex-shrink-0" aria-hidden="true" />
                          <span className="text-gray-600">{item.label}</span>
                        </>
                      )}
                    </li>
                  ))}
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CheckListTable;
