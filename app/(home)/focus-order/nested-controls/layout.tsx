import React, { Suspense } from "react";

const NestedFocusExample= ({ children }: { children: React.ReactNode }) => {
  return <Suspense>{children}</Suspense>;
};

export default NestedFocusExample;