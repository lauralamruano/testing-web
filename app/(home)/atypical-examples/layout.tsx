import React, { Suspense } from "react";

const UploadImagePage = ({ children }: { children: React.ReactNode }) => {
  return <Suspense>{children}</Suspense>;
};

export default UploadImagePage;