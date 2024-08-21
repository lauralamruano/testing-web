"use client";
import AccordionTrap from "@/components/accordion/accordion-trap";
import ComboboxTrap from "@/components/combobox/combobox-trap";
import React from "react";

const FocusPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start">
      <h1 className="text-4xl font-bold mb-6">Patterns</h1>
      <section>
        <p></p>
      <div className="flex items-start justify-center gap-8">
        <ComboboxTrap/>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Accordion</h2>
          <AccordionTrap title={"Accordion Trap (Tab)"} content={""} />
        </div>
      </div>
      </section>
    </div>
  );
};

export default FocusPage;