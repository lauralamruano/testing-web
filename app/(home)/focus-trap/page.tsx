"use client";
import PatternCard from "@/components/card/card-pattern";

const FocusPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start">
      <h1 className="text-4xl font-bold mb-6 p-6">Patterns</h1>
      <section className="flex gap-6">
        <PatternCard
          title={"Example a modal with a Keyboard Trap"}
          description={
            "The example illustrates an incorrect implementation of a keyboard trap in a modal dialog."
          }
          link={"/focus-trap/modal-trap"}
          imageSrc={"/images/modal-trap.png"}
        />
        <PatternCard
          title={"Keyboard Traps in Interactive Elements"}
          description={
            "Incorrect example with keyboard trap with elements like expanded accordions, collapsed menus, or buttons."
          }
          link={"/focus-trap/other-elements-trap"}
          imageSrc={"/images/other-elements.png"}
        />
        <PatternCard title={"Modal Trap with controls inside"} description={"Modal dialog that captures keyboard focus within its boundaries"} link={"/focus-trap/modal-trap-with-controls"} imageSrc={"/images/modal-wc.png"}/>
      </section>
    </div>
  );
};

export default FocusPage;
