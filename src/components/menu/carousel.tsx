"use client";
import { getMenuDetails } from "@/services/menuService";
import React, { useEffect, useState } from "react";
import CarouselCard from "../layout/carouselCard";
import { toast } from "@/hooks/use-toast";

interface Section {
  id: number;
  name: string;
  images: { image: string }[];
}

interface CarouselProps {
  onSectionSelect: (sectionTitle: string) => void;
}

export default function Carousel({ onSectionSelect }: CarouselProps) {
  const [sections, setSections] = useState<Section[]>([]);
  const [selectedSection, setSelectedSection] = useState<number | null>(null);

  useEffect(() => {
    async function fetchMenuDetails() {
      try {
        const data = await getMenuDetails();
        setSections(data.sections || []);
      } catch (error) {
        toast({
          title: `Error: ${error}`,
          description: "Failed to fetch menu details",
        });
      }
    }
    fetchMenuDetails();
  }, []);

  const handleCardClick = (id: number, name: string) => {
    setSelectedSection(id);
    onSectionSelect(name); // 🔥 Agora chamamos a função para rolar até a seção correspondente!
  };

  return (
    <div className="flex gap-4 overflow-x-auto no-scrollbar pt-5 pb-6 pl-4 bg-white">
      {sections.map((section) => (
        <CarouselCard
          key={section.id}
          image={section.images[0]?.image || "/placeholder.png"}
          name={section.name}
          isSelected={selectedSection === section.id}
          onClick={() => handleCardClick(section.id, section.name)} // 👈 Passamos o nome também!
        />
      ))}
    </div>
  );
}
