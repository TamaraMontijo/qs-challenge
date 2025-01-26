// components/menuSection.tsx
"use client";
import { useState } from "react";
import MenuItem from "./menuItem";

interface MenuSectionProps {
  sectionTitle: string;
  items: {
    title: string;
    description?: string;
    price: string;
    image: string;
  }[];
}

export default function MenuSection({ sectionTitle, items }: MenuSectionProps) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="flex flex-col mb-4 bg-white">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full px-4 py-3 font-medium text-[24px] leading-[28px] text-[#121212] border-b border-gray-300"
      >
        {sectionTitle}
        <span
          className={`transition-transform ${isOpen ? "rotate-180" : "rotate-0"} text-[24px]`}
        >
          <svg width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M2.41414 9C2.02361 9.39053 1.39045 9.39053 0.999924 9C0.6094 8.60948 0.6094 7.97631 0.999926 7.58579L8.29282 0.292892C8.68334 -0.0976315 9.31651 -0.0976305 9.70703 0.292893L16.9999 7.58579C17.3904 7.97631 17.3904 8.60948 16.9999 9C16.6094 9.39053 15.9762 9.39053 15.5857 9L9.70703 3.12132C9.31651 2.7308 8.68334 2.7308 8.29282 3.12132L2.41414 9Z" fill="#4F372F" />
          </svg>

        </span>
      </button>
      {isOpen && (
        <div className="flex flex-col">
          {items.map((item, index) => (
            <MenuItem
              key={index}
              title={item.title}
              description={item.description}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
      )}
    </div>
  );
}