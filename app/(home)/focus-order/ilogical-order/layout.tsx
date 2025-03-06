import React, { Suspense } from "react";

const IlogicalOrder = ({ children }: { children: React.ReactNode }) => {
  return <Suspense>{children}</Suspense>;
};

export default IlogicalOrder;