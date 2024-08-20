import React, { Suspense } from "react";

const FocusTrap = ({ children }: { children: React.ReactNode }) => {
  return <Suspense>{children}</Suspense>;
};

export default FocusTrap;