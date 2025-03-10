import React from "react";
import Link from 'next/link';
import PatternCard from "@/components/card/card-pattern";

const Tabindex: React.FC = () => {
  return (
    <div>
      <h1  className="text-4xl font-bold mt-4 text-green-dark">Prueba de Accesibilidad - Tabindex</h1>
      <section id="tabindex-1">
      <PatternCard title={"Tabindex Negative"}
            description={"These examples  have controls are Nested Focus"}
            link={"/focus-order/tabindex/tabindex-negative"}
            imageSrc={""}></PatternCard>
      </section>
    </div>
  );
};

export default Tabindex;
