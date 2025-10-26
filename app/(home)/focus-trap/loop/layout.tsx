import React, { Suspense } from "react";

const LoopTrap = ({ children }: { children: React.ReactNode }) => {
  return <Suspense>{children}</Suspense>;
};

export default LoopTrap;