import React, { Suspense } from "react";

const KeyboardOperableARIA = ({ children }: { children: React.ReactNode }) => {
  return <Suspense>{children}</Suspense>;
};

export default KeyboardOperableARIA;
