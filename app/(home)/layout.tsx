import React, { Suspense } from "react";
import NavBar from "@/components/navBar/navbar";
import Footer from "@/components/footer/footer";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Suspense>
      <div className="flex flex-col min-h-screen">
        <header>
          <NavBar />
        </header>
        <main className="flex-1">
          {children}
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </Suspense>
  );
};

export default HomeLayout;
