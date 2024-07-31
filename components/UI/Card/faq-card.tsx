"use client";

import { useState } from "react";

interface FaqCardProps {
  faq: any;
}

export default function FaqCard(props: FaqCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <article
      className="bg-indigo-50 rounded-md p-4 md:p-5"
      onClick={toggleDropdown}
    >
      <div className="flex justify-between items-center cursor-pointer">
        <p className="text-lg md:text-xl">{props.faq.question}</p>
        <p
          className={`text-2xl md:text-4xl text-customColor ${
            isOpen ? "bg-customColor text-white rounded-md px-3" : ""
          }`}
        >
          {isOpen ? "-" : "+"}
        </p>
      </div>
      <div
        className={`overflow-hidden transition-max-height duration-300 ease-in-out ${
          isOpen ? "max-h-40" : "max-h-0"
        }`}
      >
        <div className="mt-2 text-sm md:text-base">
          <p>{props.faq.answer}</p>
        </div>
      </div>
    </article>
  );
}
