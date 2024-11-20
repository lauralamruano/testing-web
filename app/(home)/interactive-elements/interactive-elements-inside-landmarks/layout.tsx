import React, { Suspense } from "react";

const InteractiveLandmarks = ({ children }: { children: React.ReactNode }) => {
  return <Suspense>{children}</Suspense>;
};

export default InteractiveLandmarks;