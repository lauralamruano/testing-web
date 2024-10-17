import React, { Suspense } from "react";

const OtherElements = ({ children }: { children: React.ReactNode }) => {
  return <Suspense>{children}</Suspense>;
};

export default OtherElements;