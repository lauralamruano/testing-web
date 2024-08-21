import Hero from "@/components/hero/hero";
import NavBar from "@/components/navBar/navbar";
import React from "react";

const HomePage = () => {

  return (
    <div>
      <header>
        <NavBar/>
      </header>
      <main>
        <Hero/>
      </main>
    </div>
  );
};

export default HomePage;
