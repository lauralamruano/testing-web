import PatternCard from "@/components/card/card-pattern";
import React from "react";

const FocusOrderPage: React.FC = () => {
  return (
    <div>
      <main className="flex min-h-screen items-center justify-center flex-col">
        <h1 className="text-4xl font-bold mt-4 text-green-dark">Focus Order</h1>
        <section className="flex items-center bg-green-dark-50 p-12">
          <img
            className="w-6/12"
            src="/images/women-mobile.png"
            alt="Woman using a mobile phone"
          />
          <p className="text-lg mr-8 text-green-dark font-bold">
            This section demonstrates how to manage focus order on a webpage.
            Ensuring a logical focus order is crucial for accessibility,
            allowing users to efficiently navigate through interactive elements
            using the keyboard.
          </p>
        </section>
        <section className="flex items-center justify-center gap-4 bg-green-dark w-full p-4">
          <PatternCard
            title={"Hidden CSS elements"}
            description={"These examples  have controls are hidden with CSS"}
            link={"/focus-order/hidden-css"}
            imageSrc={"/images/hidden-css.png"}
          ></PatternCard>
          <PatternCard
            title={"Nested Focus Example"}
            description={"These examples  have controls are Nested Focus"}
            link={"/focus-order/nested-controls"}
            imageSrc={"/images/nested.png"}
          ></PatternCard>
          <PatternCard
            title={"Ilogical Order"}
            description={"These examples  have controls are Nested Focus"}
            link={"/focus-order/ilogical-order"}
            imageSrc={"/images/nested.png"}
          ></PatternCard>
        </section>
      </main>
    </div>
  );
};

export default FocusOrderPage;
