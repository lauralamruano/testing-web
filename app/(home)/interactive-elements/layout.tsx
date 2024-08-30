import React, { Suspense } from "react";

const InteractiveElements = ({ children }: { children: React.ReactNode }) => {
  return <Suspense>{children}</Suspense>;
};

export default InteractiveElements;