import React, { Suspense } from "react";

const FocusLost = ({ children }: { children: React.ReactNode }) => {
  return <Suspense>{children}</Suspense>;
};

export default FocusLost;