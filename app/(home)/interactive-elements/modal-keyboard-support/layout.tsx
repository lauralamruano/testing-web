import React, { Suspense } from "react";

const ModalEscape = ({ children }: { children: React.ReactNode }) => {
  return <Suspense>{children}</Suspense>;
};

export default ModalEscape;