import React, { Suspense } from "react";

const OtherTrap = ({ children }: { children: React.ReactNode }) => {
  return <Suspense>{children}</Suspense>;
};

export default OtherTrap;