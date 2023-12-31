"use client";

import Image from "next/image";
import { Expand, ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";
import { ProductCard } from "@/types";
import Currency from "./currency";
import IconButton from "./icon-button";
import { MouseEventHandler } from "react";
import usePreviewModal from "@/hooks/use-preview-modal";
import useCart from "@/hooks/use-cart";

const ProductCard: React.FC<ProductCard> = ({ data }) => {
  const router = useRouter();
  const previewModal = usePreviewModal(); //! iz zustand store, kontrolira preview modal
  const cart = useCart(); //! iz zustand store, kontrolira šta ima u košarici

  const handleClick = () => {
    router.push(`/product/${data?.id}`);
  };

  const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation(); //! da nebi klik otvorio product page

    previewModal.onOpen(data); // ! otvori modal sa podacima o produktu
  };

  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation(); //! da nebi klik otvorio product page

    cart.addItem(data); // ! dodaj produkt u košaricu
  };

  return (
    <div
      onClick={handleClick}
      className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4"
    >
      {/* Image & actions */}
      <div className="aspect-square rounded-xl bg-gray-100 relative">
        <Image
          src={data.images?.[0]?.url}
          alt=""
          fill
          className="aspect-square object-cover rounded-md"
        />

        <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
          <div className="flex gap-x-6 justify-center">
            <IconButton onClick={onPreview} icon={<Expand size={20} className="text-gray-600" />} />
            <IconButton
              onClick={onAddToCart}
              icon={<ShoppingCart size={20} className="text-gray-600" />}
            />
          </div>
        </div>
      </div>

      {/* Description */}
      <div>
        <p className="font-semibold text-lg">{data.name}</p>
        <p className="text-sm text-gray-500">{data.category?.name}</p>
      </div>

      {/* Price & Review */}
      <div className="flex items-center justify-between">
        <Currency value={data?.price} />
      </div>
    </div>
  );
};

export default ProductCard;
