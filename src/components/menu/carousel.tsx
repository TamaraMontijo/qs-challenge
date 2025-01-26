"use client"
import { getMenuDetails } from "@/services/menuService";
import React, { useEffect, useState } from "react";
import CarouselCard from "../layout/carouselCard";

interface Section {
  id: number;
  name: string;
  images: { image: string }[];
}

export default function Carousel() {
  const [sections, setSections] = useState<Section[]>([]);
  const [selectedSection, setSelectedSection] = useState<number | null>(null);

  useEffect(() => {
    async function fetchMenuDetails() {
      try {
        const data = await getMenuDetails();
        setSections(data.sections || []);
      } catch (error) {
        console.error("Error fetching menu details:", error);
      }
    }
    fetchMenuDetails();
  }, []);

  const handleCardClick = (id: number) => {
    setSelectedSection(id);
  };

  return (
    <div className="flex gap-4 overflow-x-auto no-scrollbar pt-5 pb-6 pl-4 bg-white">
      {sections.map((section) => (
        <CarouselCard
          key={section.id}
          image={section.images[0]?.image || "/placeholder.png"}
          name={section.name}
          isSelected={selectedSection === section.id}
          onClick={() => handleCardClick(section.id)}
        />
      ))}
    </div>
  );
}
