"use client";

import { cn } from "@/lib/utils";

interface CarouselCardProps {
  image: string;
  name: string;
  isSelected: boolean;
  onClick: () => void;
}

export default function CarouselCard({ image, name, isSelected, onClick }: CarouselCardProps) {
  return (
    <button
      className={cn(
        "flex flex-col items-center gap-2 p-0 w-[104px] h-[146px] transition-all",
      )}
      onClick={onClick}
    >
      <div className={cn("flex justify-center items-center w-[82px] h-[82px] rounded-full border-2",
        isSelected ? "ring-2 ring-primary" : "ring-1 ring-gray-300")}>
        <div className="w-[74px] h-[74px] rounded-full bg-white overflow-hidden">
          <img
            src={image || "/placeholder.png"}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <span className={cn("text-[16px] leading-[19px] text-[#121212] text-center tracking-[0.5px] pt-4", 
        isSelected ? "font-semibold" : "font-normal"
      )}>
            {name}
          </span>
          <div className="w-[96px] h-[2px] bg-[#4F372F] mt-2" hidden={!isSelected}></div>
    </button>
  );
};
