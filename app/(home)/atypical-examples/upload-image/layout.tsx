import React, { Suspense } from "react";

const UploadImage = ({ children }: { children: React.ReactNode }) => {
  return <Suspense>{children}</Suspense>;
};

export default UploadImage;