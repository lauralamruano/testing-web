
import React, { Suspense } from "react";

const TabIndexPositive = ({ children }: { children: React.ReactNode }) => {
  return <Suspense>{children}</Suspense>;
};

export default TabIndexPositive;