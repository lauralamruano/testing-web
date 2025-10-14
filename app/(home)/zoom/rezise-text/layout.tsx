import React, { Suspense } from "react";

const ResizeTextMock = ({ children }: { children: React.ReactNode }) => {
  return <Suspense>{children}</Suspense>;
};

export default ResizeTextMock;