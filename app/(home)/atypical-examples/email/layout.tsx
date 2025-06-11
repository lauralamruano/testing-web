import React, { Suspense } from "react";

const EmailTemplate = ({ children }: { children: React.ReactNode }) => {
  return <Suspense>{children}</Suspense>;
};

export default EmailTemplate;