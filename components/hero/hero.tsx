import Link from "next/link";
import React from "react";
import Image from "next/image";
import accessibility from "../../assets/images/Accessibility.jpg";

const Hero = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-centerp-24">
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <Image
            src={accessibility}
            className="max-w-lg rounded-lg shadow-2xl" alt={""}/>
          <div>
            <h1 className="text-5xl font-bold">Testing Web</h1>
            <p className="py-6 max-w-lg">
            Website designed to evaluate and ensure web accessibility compliance.
            </p>
            <button className="btn">Get Started</button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;