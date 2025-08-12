import React, { Suspense } from "react";

const ColorContrast = ({ children }: { children: React.ReactNode }) => {
  return <Suspense>{children}</Suspense>;
};

export default ColorContrast;