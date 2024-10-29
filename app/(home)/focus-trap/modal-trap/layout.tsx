import React, { Suspense } from "react";

const ModalTrap = ({ children }: { children: React.ReactNode }) => {
  return <Suspense>{children}</Suspense>;
};

export default ModalTrap;