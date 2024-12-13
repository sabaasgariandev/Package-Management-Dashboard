import React, { useState } from 'react';
// Defining the structure of accordian
interface AccordionProps {
  title: string;
  children: React.ReactNode;
}
//passing props
const Accordion: React.FC<AccordionProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [toggleTitle, setToggleTitle] = useState(title);
//change when click 
  const handleToggle = () => {
    setIsOpen(!isOpen);
    setToggleTitle(isOpen ? "More..." : "Less...");
  };

  return (
    <div>
      <button onClick={handleToggle} className='p-2 bg-[#a9dfd8] text-black w-fit rounded-lg border-white border-8 shadow-lg shadow-white'>{toggleTitle}</button>
      {isOpen && (
        <div>
          {children}
        </div>
      )}
    </div>
  );
};

export default Accordion;
