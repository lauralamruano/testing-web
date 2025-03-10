import React, { Suspense } from "react";

const TabindexNegative = ({ children }: { children: React.ReactNode }) => {
  return <Suspense>{children}</Suspense>;
};

export default TabindexNegative;