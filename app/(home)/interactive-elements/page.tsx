import PatternCard from "@/components/card/card-pattern";

const InteractiveElements: React.FC = () => {
  return (
    <div className="flex gap-6">
      <PatternCard title={"Modal Support (Escape)"} description={""} link={"/interactive-elements/modal-keyboard-support"} imageSrc={"/images/escape-modal.png"}></PatternCard>
      <PatternCard title={"Interactive Elements"} description={""} link={"/interactive-elements/other-elements"} imageSrc={"/images/other-int-elements.png"}></PatternCard>
    </div>
  );
};

export default InteractiveElements;