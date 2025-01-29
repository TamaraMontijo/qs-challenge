"use client";

import BasketCard from "@/components/basket/basketCard";
import { SearchBar } from "@/components/common/searchBar";
import { Header } from "@/components/layout/header";
import Menu from "@/components/menu/menu";
import { useSelector } from "react-redux";
import { useState, useRef } from "react";
import { RootState } from "@/store/store";
import { Modal } from "@/components/common/modal";
import CTAButton from "@/components/common/ctaButton";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchValue, setSearchValue] = useState(""); // 🔍 Novo estado para pesquisa
  const basketItems = useSelector((state: RootState) => state.basket.items);

  const totalItems = basketItems.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = basketItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  
  const scrollToSection = (sectionTitle: string) => {
    const sectionRef = sectionRefs.current[sectionTitle];
    if (sectionRef) {
      sectionRef.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <Header />
      <main className="md:bg-[#EEEEEE] md:flex md:flex-col md:items-center">
        {/* Passando `searchValue` e `setSearchValue` para SearchBar */}
        <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
        <div className="md:bg-[#F8F9FA] md:max-w-5xl md:px-10 md:py-8 md:gap-6 flex">
          {/* Passando `searchValue` para filtrar no Menu */}
          <Menu sectionRefs={sectionRefs} scrollToSection={scrollToSection} searchValue={searchValue} />
          <div className="hidden md:block">
            <BasketCard />
          </div>
        </div>
      </main>

      {totalItems > 0 && (
        <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg flex justify-center py-4 md:hidden">
          <CTAButton
            itemId={0}
            itemName="Basket"
            itemPrice={totalPrice}
            quantity={totalItems}
            buttonText={`Your Basket • ${totalItems} item(s)`}
            onClick={toggleModal}
          />
        </div>
      )}

      {isModalOpen && (
        <Modal onClose={toggleModal}>
          <BasketCard />
        </Modal>
      )}
    </>
  );
}
