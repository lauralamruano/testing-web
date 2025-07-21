import PatternCard from "@/components/card/card-pattern";

const InteractiveElements: React.FC = () => {
  return (
    // Esto es la 6ta prueba
    <main className="flex min-h-screen items-center justify-center flex-col">
      <h1 className="text-4xl font-bold mt-4 text-green-dark">
        2.1.1 Keyboard
      </h1>
      <section className="flex items-center bg-green-dark-50 p-12">
        <img className="w-6/12" src="/images/women-mobile.png" alt="" />
        <p className="text-lg mr-8 text-green-dark font-bold">
          Web accessibility is crucial to ensure that all individuals, including
          those with disabilities, can effectively interact with digital
          content. One of the key principles of accessibility is that all
          functionalities of a website must be accessible using the keyboard,
          unless the functionality cannot be accomplished in any known way using
          this type of device. This principle is part of the Web Content
          Accessibility Guidelines (WCAG) and relates to Success Criterion 2.1.1
          "Keyboard" of WCAG 2.1.
        </p>
      </section>
      <section className="flex gap-6 justify-center items-center bg-green-dark p-6 w-full">
        <PatternCard
          title={"Modal Support (Escape)"}
          description={
            "A dialog that cannot be closed with the Escape key ensures users complete necessary actions before dismissal."
          }
          link={"/interactive-elements/modal-keyboard-support"}
          imageSrc={"/images/escape-modal.png"}
        ></PatternCard>
        <PatternCard
          title={"Interactive Elements"}
          description={
            "Interactive elements should be easily navigable and clearly labeled for accessibility."
          }
          link={"/interactive-elements/other-elements"}
          imageSrc={"/images/other-int-elements.png"}
        ></PatternCard>
        <PatternCard
          title={"Interactive Elements Inside Landmarks Regions"}
          description={"Interactive elements within landmarks powered by ARIA"}
          link={"/interactive-elements/interactive-elements-inside-landmarks"}
          imageSrc={"/images/interactive-with-landmark.png"}
        />
         <PatternCard
          title={"Keyboard Operable"}
          description={"Interactive elements within landmarks powered by ARIA"}
          link={"/interactive-elements/keyboard-operable"}
          imageSrc={"/images/interactive-with-landmark.png"}
        />
        <PatternCard
          title={"Keyboard Operable Aria"}
          description={"Interactive elements within landmarks powered by ARIA"}
          link={"/interactive-elements/keyboard-operable-aria"}
          imageSrc={"/images/interactive-with-landmark.png"}
        />
      </section>
    </main>
  );
};

export default InteractiveElements;
