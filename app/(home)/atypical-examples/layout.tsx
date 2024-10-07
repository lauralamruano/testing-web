import React, { Suspense } from "react";

const ExportPage = ({ children }: { children: React.ReactNode }) => {
  return <Suspense>{children}</Suspense>;
};

export default ExportPage;