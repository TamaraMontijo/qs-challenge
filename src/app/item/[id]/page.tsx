"use client";

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams, useRouter } from "next/navigation";
import { RootState } from "@/store/store";
import { toast } from "@/hooks/use-toast";
import { getMenuDetails } from "@/services/menuService";
import CounterButton from "@/components/common/counterButton";
import CTAButton from "@/components/common/ctaButton";

type RouteParams = {
  id: string;
};

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  images?: { image: string }[];
  modifiers?: any; // Substitua `any` com a tipagem correta
}

type ItemState = MenuItem | null;

export default function ItemModal() {
  const params = useParams() as RouteParams;
  const router = useRouter();
  const itemId = parseInt(params.id, 10);
  const [itemData, setItemData] = useState<ItemState>(null);
  const [quantity, setQuantity] = useState(1);

  // Pega o estado do Redux
  const basketItem = useSelector((state: RootState) =>
    state.basket.items.find((item) => item.id === itemId)
  );

  const totalPrice = (itemData?.price || 0) * quantity;

  useEffect(() => {
    const fetchItemDetails = async () => {
      try {
        const menu = await getMenuDetails();

        const foundItem = menu.sections
          .flatMap((section: { items: any }) => section.items)
          .find((item: { id: number }) => item.id === itemId);

        setItemData(foundItem);
      } catch (error) {
        toast({
          title: "Error",
          description: "Failed to fetch item details",
        });
      }
    };

    fetchItemDetails();
  }, [itemId]);

  if (!itemData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="md:fixed md:inset-0 md:flex md:justify-center md:items-center md:bg-black md:bg-opacity-65 md:z-50">
      <div className="relative w-full md:max-w-[600px] bg-white shadow-lg">
        <button
          className="absolute top-4 right-4 w-[28px] h-[28px] bg-white shadow-md rounded-full flex justify-center items-center"
          onClick={() => router.push("/")} // Redireciona para o menu
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.7338 0.275313C11.3788 -0.0796359 10.8055 -0.0796359 10.4505 0.275313L6 4.71672L1.54949 0.266212C1.19454 -0.0887372 0.62116 -0.0887372 0.266212 0.266212C-0.0887372 0.62116 -0.0887372 1.19454 0.266212 1.54949L4.71672 6L0.266212 10.4505C-0.0887372 10.8055 -0.0887372 11.3788 0.266212 11.7338C0.62116 12.0887 1.19454 12.0887 1.54949 11.7338L6 7.28328L10.4505 11.7338C10.8055 12.0887 11.3788 12.0887 11.7338 11.7338C12.0887 11.3788 12.0887 10.8055 11.7338 10.4505L7.28328 6L11.7338 1.54949C12.0796 1.20364 12.0796 0.62116 11.7338 0.275313Z"
              fill="#4F372F"
            />
          </svg>
        </button>
        <div className="flex flex-col items-center p-0 bg-[#DADADA] shadow-md">
          <div
            className="w-full h-[265px] bg-cover bg-center"
            style={{
              backgroundImage: `url('${itemData.images?.[0]?.image || ""}')`,
            }}
          ></div>
          <div className="flex flex-col items-start p-4 gap-2.5 w-full bg-white">
            <div className="text-[#121212] text-[24px] font-bold leading-[28px]">
              {itemData.name}
            </div>
            <p className="text-[#464646] text-[16px] leading-[19px] tracking-[0.5px]">
              {itemData.description}
            </p>
            <span className="text-[#121212] text-[20px] font-semibold leading-[24px]">
              R${totalPrice.toFixed(2)}
            </span>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center pt-2 pb-6 px-6 gap-2">
          <CounterButton
            itemId={itemData.id}
            itemName={itemData.name}
            itemPrice={itemData.price}
            useLocalState={true}
            onQuantityChange={(newQuantity) => setQuantity(newQuantity)}
          />
          <CTAButton
            itemId={itemData.id}
            itemName={itemData.name}
            itemPrice={itemData.price}
            quantity={quantity} 
            buttonText={`Add To Order • £${(itemData.price * quantity).toFixed(2)}`}
            redirectTo="/" 
          />
        </div>
      </div>
    </div>
  );
}
