import React from "react";

interface AccessibleLinkProps {
  text: string;
  onClick: () => void;
}

const AccessibleLink: React.FC<AccessibleLinkProps> = ({ text, onClick }) => {
  return (
    <a
      href="#"
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
      className="text-green-300 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500"
      role="button"
      aria-label={text}
    >
      {text}
    </a>
  );
};

export default AccessibleLink;