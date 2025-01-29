import { useEffect, useState } from "react";
import Carousel from "./carousel";
import MenuSection from "./menuSection";
import { getMenuDetails } from "@/services/menuService";
import { toast } from "@/hooks/use-toast";

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

export default function Menu() {
    const [menuData, setMenuData] = useState<MenuSectionData[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchMenu = async () => {
            try {
                const data = await getMenuDetails();
                // Transform the API response to match the expected format
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
                    description: "Error fetching theme",
                });
            } finally {
                setLoading(false);
            }
        };

        fetchMenu();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;
    return (
        <div className="menu bg-white shadow-[0_2px_14px_0px_#00000024] w-full">
            <Carousel />
            <div className="flex flex-col p-4">
                {menuData.map((section, index) => (
                    <MenuSection
                        key={index}
                        sectionTitle={section.sectionTitle}
                        items={section.items}
                    />
                ))}
            </div>
            <div className="p-6 flex items-center justify-center">

            <span className="md:hidden text-primary underline font-bold">View alergy information</span>
            </div>

        </div>
    )
}