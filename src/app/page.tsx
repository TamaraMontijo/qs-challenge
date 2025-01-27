"use client"

import BasketCard from "@/components/basket/basketCard";
import { SearchBar } from "@/components/common/searchBar";
import { Header } from "@/components/layout/header";
import Menu from "@/components/menu/menu";



export default function Home() {


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
    </>
  );
}
