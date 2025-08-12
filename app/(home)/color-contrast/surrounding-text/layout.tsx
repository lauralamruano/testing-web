import React, { Suspense } from "react";

const LinkContrastFixtures = ({ children }: { children: React.ReactNode }) => {
  return <Suspense>{children}</Suspense>;
};

export default LinkContrastFixtures;