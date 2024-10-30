import React, { Suspense } from "react";

const FormTrap = ({ children }: { children: React.ReactNode }) => {
  return <Suspense>{children}</Suspense>;
};

export default FormTrap;