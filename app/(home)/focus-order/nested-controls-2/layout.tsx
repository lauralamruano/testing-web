import React, { Suspense } from "react";

const NestedFocusExample2= ({ children }: { children: React.ReactNode }) => {
  return <Suspense>{children}</Suspense>;
};

export default NestedFocusExample2;