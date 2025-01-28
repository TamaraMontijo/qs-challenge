interface ModifierOptionProps {
    title: string,
    price: number,
    isActive: boolean,
    onClick: () => void;
}

export default function ModifierOption({ title, price, isActive, onClick }: ModifierOptionProps) {
    return (
      <div className={`flex flex-row items-center p-4 gap-4 w-full h-[72px] bg-white shadow-md cursor-pointer`} onClick={onClick}>
        <div className="flex flex-col justify-center items-start gap-1 w-[305px] h-[40px]">
          <span className="text-[#121212] text-[16px] font-medium leading-[19px]">{title}</span>
          <div className="flex flex-row items-start gap-4 w-[59px] h-[19px]">
            <span className="text-[#464646] text-[16px] font-normal leading-[19px]">R${price.toFixed(2)}</span>
          </div>
        </div>
        <div className="flex flex-row justify-end items-center gap-4 w-[305px] h-[1px]">
          <div className="w-[24px] h-[24px] relative">
            <div className={`absolute left-[8.33%] right-[8.33%] top-[8.33%] bottom-[8.33%] ${isActive ? 'bg-white border-[6px] border-primary' : 'bg-white border-2 border-primary'} rounded-full`}></div>
          </div>
        </div>
      </div>
    );
  };