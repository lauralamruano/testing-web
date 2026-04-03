import Link from "next/link";
import React from "react";

interface PatternCardProps {
  title: string;
  description: string;
  link: string;
  imageSrc: string;
  wcag?: string;
  type?: "fail" | "pass" | "neutral";
}

const PatternCard: React.FC<PatternCardProps> = ({
  title,
  description,
  link,
  imageSrc,
  wcag,
  type = "neutral",
}) => {
  const typeStyles = {
    fail: "border-l-4 border-l-red-500",
    pass: "border-l-4 border-l-green-500",
    neutral: "",
  };

  const typeBadge = {
    fail: <span className="badge-fail">Fail example</span>,
    pass: <span className="badge-pass">Pass example</span>,
    neutral: null,
  };

  return (
    <div className={`test-card ${typeStyles[type]}`}>
      {imageSrc && (
        <div className="h-36 bg-gray-100 overflow-hidden">
          <img
            src={imageSrc}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      )}
      {!imageSrc && (
        <div className="h-36 bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center" aria-hidden="true">
          <svg className="w-10 h-10 text-green-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </div>
      )}
      <div className="p-4 flex flex-col gap-2 flex-1">
        <div className="flex items-center gap-2 flex-wrap">
          {wcag && <span className="badge-wcag">{wcag}</span>}
          {typeBadge[type]}
        </div>
        <h3 className="font-semibold text-gray-900 leading-snug">{title}</h3>
        <p className="text-sm text-gray-600 leading-relaxed flex-1">{description}</p>
        <Link
          href={link}
          className="inline-flex items-center gap-1 text-sm font-medium text-green-700 hover:text-green-600 transition-colors focus:outline-none focus:ring-2 focus:ring-green-600 rounded mt-1"
          aria-label={`View example: ${title}`}
        >
          View example
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default PatternCard;
