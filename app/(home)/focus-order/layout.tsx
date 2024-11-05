import React, { Suspense } from "react";

const FocusOrder = ({ children }: { children: React.ReactNode }) => {
  return <Suspense>{children}</Suspense>;
};

export default FocusOrder;