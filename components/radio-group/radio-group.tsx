import React, { useState, useRef, KeyboardEvent, useEffect } from "react";

const RadioGroup: React.FC = () => {
  const [selectedValue, setSelectedValue] = useState<string>("option1");
  const radioRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>, index: number) => {
    const radioButtons = radioRefs.current;
    let newIndex = index;

    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault();

      if (event.key === "ArrowDown") {
        newIndex = (index + 1) % radioButtons.length;
      } else if (event.key === "ArrowUp") {
        newIndex = (index - 1 + radioButtons.length) % radioButtons.length;
      }

      radioButtons[newIndex]?.focus();
      setSelectedValue(radioButtons[newIndex]?.value || "");
    }
  };

  useEffect(() => {
    const selectedRadio = radioRefs.current.find(radio => radio?.value === selectedValue);
    selectedRadio?.focus();
  }, [selectedValue]);

  return (
    <div role="radiogroup" aria-labelledby="radio-group-label" className="space-x-4 p-4">

      {["option1", "option2", "option3"].map((option, index) => (
        <label key={option}>
          <input
            type="radio"
            value={option}
            checked={selectedValue === option}
            onChange={() => setSelectedValue(option)}
            aria-checked={selectedValue === option}
            tabIndex={selectedValue === option ? 0 : -1}
            ref={(el) => {
              radioRefs.current[index] = el;
            }}
            onKeyDown={(event) => handleKeyDown(event, index)}
          />
          {`Option ${index + 1}`}
        </label>
      ))}
    </div>
  );
};

export default RadioGroup;