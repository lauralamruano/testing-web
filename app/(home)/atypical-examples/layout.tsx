import React, { Suspense } from "react";

const AtypicalExamples = ({ children }: { children: React.ReactNode }) => {
  return <Suspense>{children}</Suspense>;
};

export default AtypicalExamples;