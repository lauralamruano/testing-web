import React, { Suspense } from "react";

const OrderTable = ({ children }: { children: React.ReactNode }) => {
  return <Suspense>{children}</Suspense>;
};

export default OrderTable;