"use client";

import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation"; // Usado para redirecionar
import { RootState } from "@/store/store";
import { addItem } from "@/store/slice/basketSlice";

interface CTAButtonProps {
  itemId: number; // ID do item
  itemName: string; // Nome do item
  itemPrice: number; // Preço do item
  quantity: number; // Quantidade selecionada
  buttonText?: string; // Texto dinâmico do botão
  redirectTo?: string; // Rota para redirecionar após clique
  onClick?: () => void; // Função customizada ao clicar
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
      // Executa a lógica customizada, se fornecida
      onClick();
      return;
    }
    // Adiciona o item ao carrinho com a quantidade selecionada
    dispatch(addItem({ id: itemId, name: itemName, price: itemPrice, quantity }));

    // Redireciona para a página especificada, se fornecida
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
