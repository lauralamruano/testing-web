import React, { Suspense } from "react";

const Tabindex = ({ children }: { children: React.ReactNode }) => {
  return <Suspense>{children}</Suspense>;
};

export default Tabindex;