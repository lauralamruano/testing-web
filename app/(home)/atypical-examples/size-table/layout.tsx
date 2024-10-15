import React, { Suspense } from "react";

const SizeTable = ({ children }: { children: React.ReactNode }) => {
  return <Suspense>{children}</Suspense>;
};

export default SizeTable;