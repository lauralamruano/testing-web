import React from 'react';
import PatternCard from '../components/card/card-pattern';

const patterns = [
  {
    title: 'Accordion',
    description: 'A vertically stacked set of interactive headings.',
    link: 'https://www.w3.org/WAI/ARIA/apg/patterns/accordion/',
    imageSrc: 'https://via.placeholder.com/150/accordion-icon.png', // Reemplaza con la URL real
  },
  {
    title: 'Breadcrumb',
    description: 'A type of secondary navigation scheme that reveals the user’s location in a website or web application.',
    link: 'https://www.w3.org/WAI/ARIA/apg/patterns/breadcrumb/',
    imageSrc: 'https://via.placeholder.com/150/breadcrumb-icon.png', // Reemplaza con la URL real
  },
  {
    title: 'Carousel',
    description: 'A rotating set of images or items, also known as a slider.',
    link: 'https://www.w3.org/WAI/ARIA/apg/patterns/carousel/',
    imageSrc: 'https://via.placeholder.com/150/carousel-icon.png', // Reemplaza con la URL real
  },
  {
    title: 'Combobox',
    description: 'A single-line input that enables the user to provide a selection from a list of options.',
    link: 'https://www.w3.org/WAI/ARIA/apg/patterns/combobox/',
    imageSrc: 'https://via.placeholder.com/150/combobox-icon.png', // Reemplaza con la URL real
  },
  {
    title: 'Disclosure',
    description: 'A button that controls the visibility of a section of content.',
    link: 'https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/',
    imageSrc: 'https://via.placeholder.com/150/disclosure-icon.png', // Reemplaza con la URL real
  },
  {
    title: 'Listbox',
    description: 'A widget that allows the user to select one or more items from a list of options.',
    link: 'https://www.w3.org/WAI/ARIA/apg/patterns/listbox/',
    imageSrc: 'https://via.placeholder.com/150/listbox-icon.png', // Reemplaza con la URL real
  },
  {
    title: 'Menu',
    description: 'A list of options or commands that a user can choose from.',
    link: 'https://www.w3.org/WAI/ARIA/apg/patterns/menu/',
    imageSrc: 'https://via.placeholder.com/150/menu-icon.png', // Reemplaza con la URL real
  },
  {
    title: 'Menubar',
    description: 'A menu that is typically displayed horizontally.',
    link: 'https://www.w3.org/WAI/ARIA/apg/patterns/menubar/',
    imageSrc: 'https://via.placeholder.com/150/menubar-icon.png', // Reemplaza con la URL real
  },
  {
    title: 'Radiogroup',
    description: 'A group of radio buttons where only one button in the group can be selected at a time.',
    link: 'https://www.w3.org/WAI/ARIA/apg/patterns/radiogroup/',
    imageSrc: 'https://via.placeholder.com/150/radiogroup-icon.png', // Reemplaza con la URL real
  },
  {
    title: 'Slider',
    description: 'An input control that lets the user specify a value from a given range.',
    link: 'https://www.w3.org/WAI/ARIA/apg/patterns/slider/',
    imageSrc: 'https://via.placeholder.com/150/slider-icon.png', // Reemplaza con la URL real
  },
  {
    title: 'Spinbutton',
    description: 'An input that allows the user to incrementally adjust a value in a specific range.',
    link: 'https://www.w3.org/WAI/ARIA/apg/patterns/spinbutton/',
    imageSrc: 'https://via.placeholder.com/150/spinbutton-icon.png', // Reemplaza con la URL real
  },
  {
    title: 'Tabs',
    description: 'A set of layered sections of content, displayed one at a time.',
    link: 'https://www.w3.org/WAI/ARIA/apg/patterns/tabs/',
    imageSrc: 'https://via.placeholder.com/150/tabs-icon.png', // Reemplaza con la URL real
  },
  {
    title: 'Toolbar',
    description: 'A container for grouping a set of controls.',
    link: 'https://www.w3.org/WAI/ARIA/apg/patterns/toolbar/',
    imageSrc: 'https://via.placeholder.com/150/toolbar-icon.png', // Reemplaza con la URL real
  },
  {
    title: 'Tooltip',
    description: 'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.',
    link: 'https://www.w3.org/WAI/ARIA/apg/patterns/tooltip/',
    imageSrc: 'https://via.placeholder.com/150/tooltip-icon.png', // Reemplaza con la URL real
  },
  {
    title: 'Treeview',
    description: 'A widget that allows the user to interactively explore a tree-like structure.',
    link: 'https://www.w3.org/WAI/ARIA/apg/patterns/treeview/',
    imageSrc: 'https://via.placeholder.com/150/treeview-icon.png', // Reemplaza con la URL real
  },
];

const PatternList: React.FC = () => {
    return (
      <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {patterns.map((pattern) => (
          <PatternCard
            key={pattern.title}
            title={pattern.title}
            description={pattern.description}
            link={pattern.link}
            imageSrc={pattern.imageSrc}
          />
        ))}
      </div>
    );
  };
  
  export default PatternList;