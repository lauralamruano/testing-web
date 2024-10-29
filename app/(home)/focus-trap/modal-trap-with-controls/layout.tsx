import React, { Suspense } from "react";

const ModalTrapControls = ({ children }: { children: React.ReactNode }) => {
  return <Suspense>{children}</Suspense>;
};

export default ModalTrapControls;