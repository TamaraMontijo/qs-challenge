import { useRouter } from "next/navigation";

interface MenuItemProps {
  title: string;
  description?: string;
  price: string;
  image?: string;
  id: number
}

export default function MenuItem({
  title,
  description,
  price,
  image,
  id
}: MenuItemProps) {
  const router = useRouter();
  
  return (
    <div className="flex items-center justify-between px-4 py-3 gap-4 border-b border-gray-200 cursor-pointer" onClick={() => router.push(`/item/${id}`)}>
      <div className="flex flex-col">
        <h3 className="text-[16px] font-medium leading-[19px] text-[#121212]">{title}</h3>
        {description && <p className="text-[16px] font-light leading-[19px] text-[#464646] mt-1">{description}</p>}
        <span className="text-[16px] font-medium leading-[19px] text-[#464646] mt-2">{price}</span>
      </div>
       {image && (
        <div className="w-[128px] h-[85px] flex-shrink-0 overflow-hidden rounded-lg">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
      )}
    </div>
  );
}