"use client";

import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { addItem } from "@/store/slice/basketSlice";

interface CTAButtonProps {
  itemId: number;
  itemName: string;
  itemPrice: number;
  quantity: number;
  buttonText?: string;
  redirectTo?: string;
  onClick?: () => void;
}

export default function CTAButton({
  itemId,
  itemName,
  itemPrice,
  quantity,
  buttonText = "Add To Cart",
  redirectTo,
  onClick,
}: CTAButtonProps) {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleClick = () => {
    if (onClick) { 
      onClick();
      return;
    }

    dispatch(addItem({ id: itemId, name: itemName, price: itemPrice, quantity }));


    if (redirectTo) {
      router.push(redirectTo);
    }
  };

  return (
    <button
      onClick={handleClick}
      className="flex flex-row justify-center items-center px-6 py-1 gap-2 w-[345px] h-12 bg-primary rounded-[40px]"
    >
      <span className="text-[18px] font-medium text-white tracking-[0.75px]">
        {buttonText}
      </span>
    </button>
  );
}
