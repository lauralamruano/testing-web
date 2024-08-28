import React, { Suspense } from "react";

const CheckPoints = ({ children }: { children: React.ReactNode }) => {
  return <Suspense>{children}</Suspense>;
};

export default CheckPoints;