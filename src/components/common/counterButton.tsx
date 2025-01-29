"use client";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { cn } from "@/lib/utils";
import { addItem, updateQuantity } from "@/store/slice/basketSlice";

interface CounterButtonProps {
  size?: "sm" | "md";
  itemId: number;
  itemName: string;
  itemPrice: number; 
  useLocalState?: boolean; 
  onQuantityChange?: (quantity: number) => void;
}

export default function CounterButton({
  size = "md",
  itemId,
  itemName,
  itemPrice,
  useLocalState = false,
  onQuantityChange,
}: CounterButtonProps) {
  const dispatch = useDispatch();


  const [localQuantity, setLocalQuantity] = useState(1);

  const item = useSelector((state: RootState) =>
    state.basket.items.find((item) => item.id === itemId)
  );
  const quantity = useLocalState ? localQuantity : item?.quantity || 0;

  const increment = () => {
    if (useLocalState) {
      const newQuantity = localQuantity + 1;
      setLocalQuantity(newQuantity);
      onQuantityChange?.(newQuantity); 
    } else if (item) {

      dispatch(updateQuantity({ id: itemId, quantity: quantity + 1 }));
    } else {

      dispatch(addItem({ id: itemId, name: itemName, price: itemPrice, quantity: 1 }));
    }
  };

  const decrement = () => {
    if (useLocalState) {
      if (localQuantity > 1) {
        const newQuantity = localQuantity - 1;
        setLocalQuantity(newQuantity);
        onQuantityChange?.(newQuantity); 
      }
    } else if (quantity > 1) {
      dispatch(updateQuantity({ id: itemId, quantity: quantity - 1 }));
    } else if (quantity === 1) {
      dispatch(updateQuantity({ id: itemId, quantity: 0 }));
    }
  };

  const isSmall = size === "sm";

  return (
    <div
      className={cn(
        "relative flex items-center justify-between",
        isSmall ? "w-[94px] h-[36px] rounded-md p-2 gap-4" : "w-[143px] h-[32px] rounded-lg"
      )}
    >

      <button
        onClick={decrement}
        disabled={quantity <= 0}
        className={cn(
          "absolute left-0 flex items-center justify-center border-[2px] border-[#DADADA] rounded-2xl",
          isSmall ? "w-5 h-5" : "w-8 h-8",
          quantity === 0 ? "bg-[#DADADA] border-[#DADADA]" : "bg-primary border-primary"
        )}
      >
        <div
          className={cn(
            "absolute h-[3px] bg-[#5F5F5F] rounded-[4px]",
            quantity === 0 ? "bg-primary" : "bg-[#DADADA]",
            isSmall ? "w-3" : "w-[18px]"
          )}
        />
      </button>

      <div
        className={cn(
          "absolute left-[33.57%] right-[33.57%] top-[21.88%] bottom-[19.66%] font-semibold text-[#121212] flex items-center justify-center",
          isSmall ? "text-sm font-bold" : "text-lg"
        )}
      >
        {quantity}
      </div>


      <button
        onClick={increment}
        className={cn(
          "absolute right-0 flex items-center justify-center bg-primary rounded-2xl",
          isSmall ? "w-5 h-5" : "w-8 h-8"
        )}
      >
        <svg
          width={isSmall ? "12" : "18"}
          height={isSmall ? "12" : "18"}
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.5 16.5C7.5 17.3284 8.17157 18 9 18C9.82843 18 10.5 17.3284 10.5 16.5V10.5H16.5C17.3284 10.5 18 9.82843 18 9C18 8.17157 17.3284 7.5 16.5 7.5H10.5V1.5C10.5 0.671573 9.82843 0 9 0C8.17157 0 7.5 0.671573 7.5 1.5V7.5H1.5C0.671573 7.5 0 8.17157 0 9C0 9.82843 0.671573 10.5 1.5 10.5H7.5V16.5Z"
            fill="white"
          />
        </svg>
      </button>
    </div>
  );
}
