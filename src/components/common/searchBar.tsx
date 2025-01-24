"use client";

import { Input } from "@/components/ui/input"; // shadcn's Input component
import { Search } from "lucide-react"; // Icon library
import { useState } from "react";

export function SearchBar() {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Searching for:", searchValue);
  };

  return (
    <div className="flex justify-center w-full p-4">
      <form
        className="flex items-center w-full max-w-[600px] border-[0.91px] border-[#8A94A4] rounded-[7.29px] p-1 bg-white"
        onSubmit={handleSearch}
      >
        {/* Search Icon */}
        <button
          type="submit"
          className="px-3 text-gray-500"
          aria-label="Search"
        >
          <Search className="w-5 h-5" />
        </button>

        {/* Input Field */}
        <Input
          type="text"
          placeholder="Search menu items"
          className="flex-1 border-none focus:border-none text-gray-700"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </form>
    </div>
  );
}
