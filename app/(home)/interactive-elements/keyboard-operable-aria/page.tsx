'use client';

import { NextPage } from 'next';
import { useState, useRef, KeyboardEvent } from 'react';

// Helper to handle Enter/Space as click
const handleKeyActivate = (e: KeyboardEvent, onActivate: () => void) => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    onActivate();
  }
};

// Custom <div> acting as a button
const CustomButton: React.FC = () => (
  <div
    role="button"
    tabIndex={0}
    className="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer"
    onClick={() => alert('Custom Button clicked')}
    onKeyDown={e => handleKeyActivate(e, () => alert('Custom Button clicked'))}
  >
    Custom Button
  </div>
);

// Custom <div> acting as a link within the page
const CustomLink: React.FC = () => (
  <div
    role="link"
    tabIndex={0}
    className="text-blue-600 underline cursor-pointer"
    onClick={() => window.location.hash = '#section'}
    onKeyDown={e => handleKeyActivate(e, () => window.location.hash = '#section')}
  >
    Go to Section
  </div>
);

// Custom checkbox
const CustomCheckbox: React.FC = () => {
  const [checked, setChecked] = useState(false);
  const toggle = () => setChecked(c => !c);
  return (
    <div
      role="checkbox"
      tabIndex={0}
      aria-checked={checked}
      className="flex items-center cursor-pointer"
      onClick={toggle}
      onKeyDown={e => handleKeyActivate(e, toggle)}
    >
      <div className={`w-4 h-4 mr-2 border ${checked ? 'bg-blue-500' : ''}`} />
      <span>Custom Checkbox</span>
    </div>
  );
};

// Custom radio group and items
const CustomRadioGroup: React.FC = () => {
  const [selected, setSelected] = useState<string | null>(null);
  const options = ['Option 1', 'Option 2', 'Option 3'];
  const handleKey = (e: KeyboardEvent, opt: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setSelected(opt);
    }
  };
  return (
    <div role="radiogroup" className="flex space-x-4">
      {options.map(opt => (
        <div
          key={opt}
          role="radio"
          tabIndex={0}
          aria-checked={selected === opt}
          className={`px-2 py-1 border rounded cursor-pointer ${selected === opt ? 'bg-green-500 text-white' : ''}`}
          onClick={() => setSelected(opt)}
          onKeyDown={e => handleKey(e, opt)}
        >
          {opt}
        </div>
      ))}
    </div>
  );
};

// Custom combobox
const CustomCombobox: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');
  const toggleOpen = () => setOpen(o => !o);
  const handleKey = (e: KeyboardEvent) => handleKeyActivate(e, toggleOpen);
  return (
    <div className="relative inline-block">
      <div
        role="combobox"
        tabIndex={0}
        aria-expanded={open}
        aria-haspopup="listbox"
        className="px-4 py-2 border cursor-pointer"
        onClick={toggleOpen}
        onKeyDown={handleKey}
      >
        {value || 'Select a fruit'}
      </div>
      {open && (
        <div role="listbox" className="absolute mt-1 border bg-white">
          {['Apple', 'Banana', 'Cherry'].map(opt => (
            <div
              key={opt}
              role="option"
              tabIndex={0}
              className="px-2 py-1 hover:bg-gray-200 cursor-pointer"
              onClick={() => { setValue(opt); setOpen(false); }}
              onKeyDown={e => handleKeyActivate(e, () => { setValue(opt); setOpen(false); })}
            >
              {opt}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// Custom textarea using contentEditable
const CustomTextarea: React.FC = () => {
  const [text, setText] = useState('');
  return (
    <div
      role="textbox"
      tabIndex={0}
      contentEditable
      className="w-full h-24 p-2 border"
      onInput={e => setText((e.target as HTMLElement).innerText)}
    >
      {text}
    </div>
  );
};

// Custom text input using contentEditable
const CustomTextInput: React.FC = () => {
  const [text, setText] = useState('');
  return (
    <div
      role="textbox"
      tabIndex={0}
      contentEditable
      className="w-full p-2 border"
      onInput={e => setText((e.target as HTMLElement).innerText)}
    >
      {text || 'Custom Text Input'}
    </div>
  );
};

// Custom spinbutton
const CustomSpinbutton: React.FC = () => {
  const [value, setValue] = useState(0);
  const decrement = () => setValue(v => Math.max(0, v - 1));
  const increment = () => setValue(v => Math.min(10, v + 1));
  const handleKey = (e: KeyboardEvent) => {
    if (e.key === 'ArrowDown') decrement();
    if (e.key === 'ArrowUp') increment();
  };
  return (
    <div
      role="spinbutton"
      tabIndex={0}
      aria-valuemin={0}
      aria-valuemax={10}
      aria-valuenow={value}
      className="flex items-center space-x-2"
      onKeyDown={handleKey}
    >
      <button onClick={decrement}>-</button>
      <div>{value}</div>
      <button onClick={increment}>+</button>
    </div>
  );
};

// Custom slider wrapping a native input
const CustomSlider: React.FC = () => {
  const [value, setValue] = useState(50);
  return (
    <div>
      <input
        role="slider"
        tabIndex={0}
        type="range"
        min={0}
        max={100}
        value={value}
        onChange={e => setValue(Number(e.target.value))}
        className="w-full mb-2"
      />
      <div>Value: {value}</div>
    </div>
  );
};

// Native <details> with <summary> role=button (focusable by default)
const CustomDetails: React.FC = () => (
  <details className="mb-2">
    <summary role="button" tabIndex={0} className="cursor-pointer">Toggle Details</summary>
    <div>Here are the details.</div>
  </details>
);

// Custom file input
const CustomFileInput: React.FC = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const openFile = () => fileInputRef.current?.click();
  return (
    <>
      <div
        role="button"
        tabIndex={0}
        className="px-4 py-2 bg-gray-200 cursor-pointer"
        onClick={openFile}
        onKeyDown={e => handleKeyActivate(e, openFile)}
      >
        Upload File
      </div>
      <input
        ref={fileInputRef}
        type="file"
        className="hidden"
        onChange={e => e.target.files && alert(`Selected file: ${e.target.files[0].name}`)}
      />
    </>
  );
};

// Custom color picker
const CustomColorInput: React.FC = () => {
  const colorInputRef = useRef<HTMLInputElement>(null);
  const [color, setColor] = useState('#ff0000');
  const openPicker = () => colorInputRef.current?.click();
  return (
    <>
      <div
        role="button"
        tabIndex={0}
        className="px-4 py-2 bg-gray-200 cursor-pointer"
        onClick={openPicker}
        onKeyDown={e => handleKeyActivate(e, openPicker)}
      >
        Choose Color
      </div>
      <input
        ref={colorInputRef}
        type="color"
        className="hidden"
        value={color}
        onChange={e => setColor(e.target.value)}
      />
      <div className="w-12 h-12 mt-2 rounded" style={{ backgroundColor: color }} />
    </>
  );
};

// Main page component
const Home: NextPage = () => (
  <div className="p-8 space-y-6">
    <CustomButton />
    <CustomLink />
    <CustomCheckbox />
    <CustomRadioGroup />
    <CustomCombobox />
    <CustomTextarea />
    <CustomTextInput />
    <CustomSpinbutton />
    <CustomSlider />
    <CustomDetails />
    <CustomFileInput />
    <CustomColorInput />
    <div id="section" className="mt-8 text-lg font-semibold">Target Section</div>
  </div>
);

export default Home;
