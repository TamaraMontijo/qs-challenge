import { SearchBar } from "@/components/common/searchBar";
import BannerImage from "@/components/layout/banner";
import { Header } from "@/components/layout/header";

import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <main className="md:bg-[#EEEEEE]">
        <SearchBar />
      </main>
    </>
  );
}
