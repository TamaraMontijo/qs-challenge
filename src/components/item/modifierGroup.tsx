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

export interface ModifierGroupData {
  id: number;
  name: string;
  minChoices: number;
  maxChoices: number; 
  items: ModifierItem[];
}

interface ModifiersProps {
  modifiers: ModifierGroupData[];
  selectedModifiers: { id: number; name: string; price: number }[];
  setSelectedModifiers: React.Dispatch<
    React.SetStateAction<{ id: number; name: string; price: number }[]>
  >;
}

export default function ModifierGroup({
  modifiers,
  selectedModifiers,
  setSelectedModifiers,
}: ModifiersProps) {
  const toggleModifier = (
    group: ModifierGroupData,
    modifier: ModifierItem
  ) => {
    const groupModifiers = selectedModifiers.filter((m) =>
      group.items.some((item) => item.id === m.id)
    );
    const isSelected = selectedModifiers.some((m) => m.id === modifier.id);

    // If `maxChoices` === 1, "radio button" style
    if (group.maxChoices === 1) {
      if (isSelected) {
        // unselect 
        setSelectedModifiers((prev) =>
          prev.filter((m) => m.id !== modifier.id)
        );
      } else {
        // Select only one modifier 
        setSelectedModifiers((prev) => [
          ...prev.filter((m) => !group.items.some((item) => item.id === m.id)),
          { id: modifier.id, name: modifier.name, price: modifier.price },
        ]);
      }
    } else {
      // For `maxChoices` > 1
      if (isSelected) {
        // unselect
        setSelectedModifiers((prev) =>
          prev.filter((m) => m.id !== modifier.id)
        );
      } else if (groupModifiers.length < group.maxChoices) {
        // Select if limit choices wasnt reached
        setSelectedModifiers((prev) => [
          ...prev,
          { id: modifier.id, name: modifier.name, price: modifier.price },
        ]);
      }
    }
  };

  return (
    <div className="flex flex-col items-start p-4 w-full bg-[#F8F9FA]">
      {modifiers.map((group) => (
        <div key={group.id} className="flex flex-col w-full mb-4">
          {/* Modifier Group Header*/}
          <div className="flex flex-col items-start p-4 w-full bg-[#F8F9FA]">
            <span className="text-[#464646] text-[16px] font-bold leading-[19px] tracking-[0.5px]">
              {group.name}
            </span>
            <span className="text-[#5F5F5F] text-[16px] font-normal leading-[19px] tracking-[0.5px]">
              Select up to {group.maxChoices} option(s)
            </span>
          </div>

          {/* Options */}
          {group.items.map((item) => (
            <ModifierOption
              key={item.id}
              title={item.name}
              price={item.price}
              isActive={selectedModifiers.some((m) => m.id === item.id)}
              onClick={() => toggleModifier(group, item)}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
