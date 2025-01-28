import { useState } from "react";
import ModifierOption from "./modifierOption";

interface ModifierItem {
  id: number;
  name: string;
  price: number;
  maxChoices: number;
  position: number;
  visible: number;
  availabilityType: string;
  available: boolean;
}

interface ModifierGroupData {
  id: number;
  name: string;
  minChoices: number;
  maxChoices: number;
  items: ModifierItem[];
}

interface ModifiersProps {
  modifiers: ModifierGroupData[];
}

export default function ModifierGroup({ modifiers }: ModifiersProps) {
  const [selected, setSelected] = useState<{ [groupId: number]: number | null }>({});

  return (
    <div className="flex flex-col items-start p-4 w-full bg-[#F8F9FA]">
      {modifiers.map((group) => (
        <div key={group.id} className="flex flex-col w-full mb-4">
          {/* Header do grupo de modificadores */}
          <div className="flex flex-col items-start p-4 w-full bg-[#F8F9FA]">
            <span className="text-[#464646] text-[16px] font-bold leading-[19px] tracking-[0.5px]">
              {group.name}
            </span>
            <span className="text-[#5F5F5F] text-[16px] font-normal leading-[19px] tracking-[0.5px]">
              Select up to {group.maxChoices} option(s)
            </span>
          </div>

          {/* Lista de opções */}
          {group.items.map((item, index) => (
            <ModifierOption
              key={item.id}
              title={item.name}
              price={item.price}
              isActive={selected[group.id] === item.id}
              onClick={() =>
                setSelected((prev) => ({
                  ...prev,
                  [group.id]: selected[group.id] === item.id ? null : item.id,
                }))
              }
            />
          ))}
        </div>
      ))}
    </div>
  );
}
