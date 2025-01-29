import { useEffect, useState, useRef } from "react";
import Carousel from "./carousel";
import MenuSection from "./menuSection";
import { getMenuDetails } from "@/services/menuService";
import { toast } from "@/hooks/use-toast";

// Definir a interface `MenuSectionData` antes do uso
type MenuItem = {
    title: string;
    description: string;
    price: string;
    image: string;
    id: number;
};

type MenuSectionData = {
    sectionTitle: string;
    items: MenuItem[];
};

interface MenuProps {
    sectionRefs: React.MutableRefObject<{ [key: string]: HTMLDivElement | null }>;
    scrollToSection: (sectionTitle: string) => void;
    searchValue: string; // 🔍 Recebe valor da busca
}

export default function Menu({ sectionRefs, scrollToSection, searchValue }: MenuProps) {
    const [menuData, setMenuData] = useState<MenuSectionData[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchMenu = async () => {
            try {
                const data = await getMenuDetails();
                const transformedData: MenuSectionData[] = data.sections.map((section: any) => ({
                    sectionTitle: section.name,
                    items: section.items.map((item: any) => ({
                        title: item.name,
                        description: item.description || "",
                        price: `R$${item.price.toFixed(2)}`,
                        image: item.images?.[0]?.image || "",
                        id: item.id
                    })),
                }));
                setMenuData(transformedData);
            } catch (err) {
                toast({
                    title: `Error: ${err}`,
                    description: "Error fetching menu",
                });
            } finally {
                setLoading(false);
            }
        };

        fetchMenu();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    // 🔍 Filtrar os itens do menu
    const filteredMenuData = menuData.map((section) => ({
        sectionTitle: section.sectionTitle,
        items: section.items.filter((item) =>
            item.title.toLowerCase().includes(searchValue.toLowerCase())
        ),
    })).filter(section => section.items.length > 0); // Remove seções vazias

    return (
        <div className="menu bg-white shadow-[0_2px_14px_0px_#00000024] w-full">
            <Carousel onSectionSelect={scrollToSection} />
            <div className="flex flex-col p-4">
                {filteredMenuData.length > 0 ? (
                    filteredMenuData.map((section, index) => (
                        <MenuSection
                            key={index}
                            sectionTitle={section.sectionTitle}
                            items={section.items}
                            ref={(el) => {
                                sectionRefs.current[section.sectionTitle] = el;
                            }}
                            
                        />
                    ))
                ) : (
                    <p className="text-center text-gray-500">No items found.</p>
                )}
            </div>
            <div className="p-6 flex items-center justify-center">
                <span className="md:hidden text-primary underline font-bold">View allergy information</span>
            </div>
        </div>
    );
}
