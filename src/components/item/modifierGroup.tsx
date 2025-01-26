import { useState } from "react";
import ModifierOption from "./modifierOption";

interface Option {
    title: string;
    price: string;
  };
  
  export default function ModifierGroup() {
    const [selected, setSelected] = useState<number | null>(null);
    
    const options: Option[] = [
      { title: '1 meat', price: 'R$33,00' },
      { title: '2 meats', price: 'R$35,00' },
      { title: '3 meats', price: 'R$37,00' }
    ];
  
    return (
      <div className="flex flex-col items-start p-4 w-full bg-[#F8F9FA]">
        <div className="flex flex-col items-start p-4 w-[393px] h-[68px] bg-[#F8F9FA]">
          <span className="text-[#464646] text-[16px] font-bold leading-[19px] tracking-[0.5px]">Choose your size</span>
          <span className="text-[#5F5F5F] text-[16px] font-normal leading-[19px] tracking-[0.5px]">Select 1 option</span>
        </div>
        {options.map((option, index) => (
          <ModifierOption 
            key={index} 
            title={option.title} 
            price={option.price} 
            isActive={selected === index} 
            onClick={() => setSelected(index)}
          />
        ))}
      </div>
    );
  }
  