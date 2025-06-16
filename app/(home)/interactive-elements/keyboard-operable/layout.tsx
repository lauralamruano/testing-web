import React, { Suspense } from "react";

const KeyboardOperable = ({ children }: { children: React.ReactNode }) => {
  return <Suspense>{children}</Suspense>;
};

export default KeyboardOperable;