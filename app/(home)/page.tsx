import Footer from "@/components/footer/footer";
import Hero from "@/components/hero/hero";
import NavBar from "@/components/navBar/navbar";
import React from "react";

const HomePage = () => {
// test7
  return (
    <div>
      <header>
        <NavBar/>
      </header>
      <main>
        <Hero/>
      </main> 
      <footer>
        <Footer/>
      </footer>
    </div>
  );
};

export default HomePage;
