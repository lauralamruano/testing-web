'use client';

import { NextPage } from 'next';
import { useState, useRef } from 'react';

/**
 * BUGGY A11Y FIXTURES (ARIA) — Focusable in Tab Order, but NOT Keyboard-Operable
 * Objetivo: que TODOS estén en el orden de navegación (tabIndex=0) para que tu
 * herramienta los detecte como interactivos, pero que NO se activen con teclado.
 * -> Responden al mouse (click) únicamente.
 */

// Custom <div> acting as a button (focusable, NO activación por teclado)
const CustomButton: React.FC = () => (
  <div
    role="button"
    tabIndex={0}
    className="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer select-none"
    onClick={() => alert('Custom Button clicked (mouse)')}
  >
    Custom Button (mouse-only)
  </div>
);

// Custom <div> acting as a link within the page (focusable, NO activación por teclado)
const CustomLink: React.FC = () => (
  <div
    role="link"
    tabIndex={0}
    className="text-blue-600 underline cursor-pointer select-none"
    onClick={() => (window.location.hash = '#section')}
  >
    Go to Section (mouse-only)
  </div>
);

// Custom checkbox (focusable, NO activación por teclado)
const CustomCheckbox: React.FC = () => {
  const [checked, setChecked] = useState(false);
  const toggle = () => setChecked((c) => !c);
  return (
    <div
      role="checkbox"
      tabIndex={0}
      aria-checked={checked}
      className="flex items-center cursor-pointer select-none"
      onClick={toggle}
    >
      <div className={`w-4 h-4 mr-2 border ${checked ? 'bg-blue-500' : ''}`} />
      <span>Custom Checkbox (mouse-only)</span>
    </div>
  );
};

// Custom radio group and items (focusable, NO activación por teclado)
const CustomRadioGroup: React.FC = () => {
  const [selected, setSelected] = useState<string | null>(null);
  const options = ['Option 1', 'Option 2', 'Option 3'];
  return (
    <div role="radiogroup" className="flex space-x-4">
      {options.map((opt) => (
        <div
          key={opt}
          role="radio"
          tabIndex={0}
          aria-checked={selected === opt}
          className={`px-2 py-1 border rounded cursor-pointer select-none ${
            selected === opt ? 'bg-green-500 text-white' : ''
          }`}
          onClick={() => setSelected(opt)}
        >
          {opt}
        </div>
      ))}
    </div>
  );
};

// Custom combobox (focusable, NO activación por teclado)
const CustomCombobox: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');
  const toggleOpen = () => setOpen((o) => !o);
  return (
    <div className="relative inline-block">
      <div
        role="combobox"
        tabIndex={0}
        aria-expanded={open}
        aria-haspopup="listbox"
        className="px-4 py-2 border cursor-pointer select-none"
        onClick={toggleOpen}
      >
        {value || 'Select a fruit'}
      </div>
      {open && (
        <div role="listbox" className="absolute mt-1 border bg-white shadow">
          {['Apple', 'Banana', 'Cherry'].map((opt) => (
            <div
              key={opt}
              role="option"
              tabIndex={0}
              className="px-2 py-1 hover:bg-gray-200 cursor-pointer select-none"
              onClick={() => {
                setValue(opt);
                setOpen(false);
              }}
            >
              {opt}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// Custom textarea using contentEditable (focusable pero bloquea typing)
// const CustomTextarea: React.FC = () => {
//   const [text, setText] = useState('');
//   return (
//     <div
//       role="textbox"
//       tabIndex={0}
//       contentEditable
//       className="w-full h-24 p-2 border"
//       onKeyDown={(e) => e.preventDefault()} // bloquea edición con teclado
//       onInput={(e) => setText((e.target as HTMLElement).innerText)}
//     >
//       {text}
//     </div>
//   );
// };

// Custom text input using contentEditable (focusable pero bloquea typing)
const CustomTextInput: React.FC = () => {
  const [text, setText] = useState('');
  return (
    <div
      role="textbox"
      tabIndex={0}
      contentEditable
      className="w-full p-2 border"
      onKeyDown={(e) => e.preventDefault()} // bloquea edición con teclado
      onInput={(e) => setText((e.target as HTMLElement).innerText)}
    >
      {text || 'Custom Text Input (mouse-only)'}
    </div>
  );
};

// Custom spinbutton (focusable; sin manejo de flechas)
const CustomSpinbutton: React.FC = () => {
  const [value, setValue] = useState(0);
  const decrement = () => setValue((v) => Math.max(0, v - 1));
  const increment = () => setValue((v) => Math.min(10, v + 1));
  return (
    <div
      role="spinbutton"
      tabIndex={0}
      aria-valuemin={0}
      aria-valuemax={10}
      aria-valuenow={value}
      className="flex items-center space-x-2"
    >
      <div
        role="button"
        tabIndex={0}
        className="px-2 py-1 border rounded cursor-pointer select-none"
        onClick={decrement}
      >
        -
      </div>
      <div>{value}</div>
      <div
        role="button"
        tabIndex={0}
        className="px-2 py-1 border rounded cursor-pointer select-none"
        onClick={increment}
      >
        +
      </div>
    </div>
  );
};

// Custom slider — div con role slider (focusable; sin flechas)
const CustomSlider: React.FC = () => {
  const [value, setValue] = useState(50);
  const barRef = useRef<HTMLDivElement>(null);
  const onBarClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = barRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = e.clientX - rect.left;
    const pct = Math.max(0, Math.min(1, x / rect.width));
    setValue(Math.round(pct * 100));
  };
  return (
    <div>
      <div
        role="slider"
        tabIndex={0}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={value}
        ref={barRef}
        onClick={onBarClick}
        className="relative h-3 w-full max-w-md cursor-pointer rounded-full bg-gray-300"
      >
        <div className="absolute top-0 left-0 h-3 rounded-full bg-blue-500" style={{ width: `${value}%` }} />
        <div className="absolute -top-1 h-5 w-5 rounded-full bg-white" style={{ left: `calc(${value}% - 10px)` }} />
      </div>
      <div className="mt-2">Value: {value}</div>
    </div>
  );
};

// Native <details> — summary focusable pero bloquea activación por teclado
const CustomDetails: React.FC = () => (
  <details className="mb-2">
    <summary
      role="button"
      tabIndex={0}
      className="cursor-pointer select-none"
      onKeyDown={(e) => e.preventDefault()} // evita toggle con Enter/Espacio
    >
      Toggle Details (mouse-only)
    </summary>
    <div>Here are the details.</div>
  </details>
);

// Custom file input (focusable trigger; sin activación por teclado)
const CustomFileInput: React.FC = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const openFile = () => fileInputRef.current?.click();
  return (
    <>
      <div
        role="button"
        tabIndex={0}
        className="px-4 py-2 bg-gray-200 cursor-pointer select-none"
        onClick={openFile}
      >
        Upload File (mouse-only)
      </div>
      <input
        ref={fileInputRef}
        type="file"
        className="hidden"
        onChange={(e) => e.target.files && alert(`Selected file: ${e.target.files[0].name}`)}
      />
    </>
  );
};

// Custom color picker (focusable trigger; sin activación por teclado)
const CustomColorInput: React.FC = () => {
  const colorInputRef = useRef<HTMLInputElement>(null);
  const [color, setColor] = useState('#ff0000');
  const openPicker = () => colorInputRef.current?.click();
  return (
    <>
      <div
        role="button"
        tabIndex={0}
        className="px-4 py-2 bg-gray-200 cursor-pointer select-none"
        onClick={openPicker}
      >
        Choose Color (mouse-only)
      </div>
      <input
        ref={colorInputRef}
        type="color"
        className="hidden"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
      <div className="w-12 h-12 mt-2 rounded" style={{ backgroundColor: color }} />
    </>
  );
};

// Main page component
const Home: NextPage = () => (
  <div className="p-8 space-y-6">
    <h1 className="text-2xl font-bold">Keyboard Activation — Buggy ARIA Fixtures (Focusable but keyboard-inoperable)</h1>
    <p className="text-sm text-gray-600">
      Todos los widgets están en el <strong>orden de tabulación</strong> (Tab) para ser detectados como interactivos,
      pero <strong>no responden a Enter/Espacio/flechas</strong>. Con <strong>mouse</strong> sí funcionan.
    </p>

    <CustomButton />
    <CustomLink />
    <CustomCheckbox />
    <CustomRadioGroup />
    <CustomCombobox />
    {/* <CustomTextarea /> */}
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
