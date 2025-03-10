import React, { Suspense } from "react";

const TabindexNeutro = ({ children }: { children: React.ReactNode }) => {
  return <Suspense>{children}</Suspense>;
};

export default TabindexNeutro;