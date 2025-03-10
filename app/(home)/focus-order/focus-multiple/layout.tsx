import React, { Suspense } from "react";

const MultipleFocusDetection = ({ children }: { children: React.ReactNode }) => {
  return <Suspense>{children}</Suspense>;
};

export default MultipleFocusDetection;