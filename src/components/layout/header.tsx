"use client";

import { useState } from "react";
import BannerImage from "./banner";

export function Header() {
  const [activeIndex, setActiveIndex] = useState(-1);
  const menuItems = [
    { name: "Menu", href: "#menu" },
    { name: "Entrar", href: "#entrar" },
    { name: "Contato", href: "#contato" },
  ];

  return (
    <>
      <header className="bg-primary fixed top-0 w-full z-50 h-[4em] md:h-[3.25em]">
        <div className="flex justify-between items-center h-full">
          {/* Desktop */}
          <nav className="hidden md:flex w-full justify-center items-center text-white gap-[0.63em] relative">
            {menuItems.map((item, index) => (

              <div
                key={index}
                className="w-[232px] h-[52px] flex items-center justify-center relative group"
              >
                <a
                  href={item.href}
                  className={`uppercase tracking-wide text-[20px] font-thin ${activeIndex === index ? "text-white" : "text-gray-300"
                    }`}
                  onClick={() => {
                    setActiveIndex(index - 1); // Atualiza o índice ativo
                  }}
                >
                  {item.name}
                </a>
              </div>
            ))}

            {/* Linha animada */}
            <span
              className="absolute bottom-0 h-[2px] bg-white transition-all duration-300"
              style={{
                width: "232px",
                transform: `translateX(${activeIndex * 232}px)`,
              }}
            ></span>
          </nav>

          {/* Mobile */}
          <div className="flex md:hidden w-full justify-between items-center px-4 h-full">
            <p className="text-white font-roboto text-base tracking-wide leading-6 mx-auto">
              Menu
            </p>
            <button className="flex items-center">
              <svg
                width="24"
                height="24"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_14553_627)">
                  <rect x="6" y="6" width="16" height="2" rx="1" fill="white" />
                  <rect x="6" y="13" width="16" height="2" rx="1" fill="white" />
                  <rect x="6" y="20" width="16" height="2" rx="1" fill="white" />
                </g>
                <defs>
                  <clipPath id="clip0_14553_627">
                    <rect
                      width="16"
                      height="16"
                      fill="white"
                      transform="translate(6 6)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </button>
          </div>
        </div>
      </header>


      <div className="mt-[4em] md:mt-[3.25em]">
        <BannerImage />
      </div>
    </>


  );
}
