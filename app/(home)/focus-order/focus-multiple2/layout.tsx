import React, { Suspense } from "react";

const MultipleFocusDetection2 = ({ children }: { children: React.ReactNode }) => {
  return <Suspense>{children}</Suspense>;
};

export default MultipleFocusDetection2;