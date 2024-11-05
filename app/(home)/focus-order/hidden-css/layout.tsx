import React, { Suspense } from "react";

const HiddenCss = ({ children }: { children: React.ReactNode }) => {
  return <Suspense>{children}</Suspense>;
};

export default HiddenCss;