import React, { Suspense } from "react";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
};

export default HomeLayout;
