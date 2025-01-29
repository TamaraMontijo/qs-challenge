"use client";

import BasketCard from "@/components/basket/basketCard";
import { SearchBar } from "@/components/common/searchBar";
import { Header } from "@/components/layout/header";
import Menu from "@/components/menu/menu";
import { useSelector } from "react-redux";
import { useState } from "react";
import { RootState } from "@/store/store";
import { Modal } from "@/components/common/modal";
import CTAButton from "@/components/common/ctaButton";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const basketItems = useSelector((state: RootState) => state.basket.items);

  const totalItems = basketItems.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = basketItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <Header />
      <main className="md:bg-[#EEEEEE] md:flex md:flex-col md:items-center">
        <SearchBar />
        <div className="md:bg-[#F8F9FA] md:max-w-5xl md:px-10 md:py-8 md:gap-6 flex">
          <Menu />
          <div className="hidden md:block">
            <BasketCard />
          </div>
        </div>
      </main>

      {/* Mobile CTA Button */}
      {totalItems > 0 && (
        <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg flex justify-center py-4 md:hidden">
        <CTAButton
        itemId={0} // Pode ser qualquer valor, pois aqui o ID não é usado
        itemName="Basket"
        itemPrice={totalPrice} // Total dinâmico dos itens no carrinho
        quantity={totalItems} // Número total de itens
        buttonText={`Your Basket • ${totalItems} item(s)`}
        onClick={toggleModal}
      />
      </div>
      )}

      {/* Basket Modal */}
      {isModalOpen && (
        <Modal onClose={toggleModal}>
          <BasketCard />
        </Modal>
      )}
    </>
  );
}
