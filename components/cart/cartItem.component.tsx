"use client";

import { ProductCartType, ProductType } from "@/lib/type";
import Image from "next/image";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { MdAddShoppingCart } from "react-icons/md";
import tome from "@/public/product/tome-onepiece.jpeg";
import { useAppStore } from "@/lib/appStore";
import { toast } from "sonner";
import { demonSlayerImageList } from "@/lib/imageList";

interface CartItemProps {
  cartItem: ProductCartType;
}

const CartItem: React.FC<CartItemProps> = ({ cartItem }) => {
  const { cartItemList, setCartItemList, removeCartItem } = useAppStore();

  const handleAddItem = () => {
    const itemToAdd = cartItemList.find((item) => item.id === cartItem.id);
    if (itemToAdd) {
      setCartItemList(itemToAdd);
      toast.success(`${cartItem.title} a été ajouté au panier`);
    } else {
      toast.error("Une erreur est survenue");
    }
  };

  const handleRemoveItem = () => {
    const itemToRemove = cartItemList.find((item) => item.id === cartItem.id);
    if (itemToRemove) {
      removeCartItem(itemToRemove);
      toast.success(`${cartItem.title} a été retiré du panier`);
    } else {
      toast.error("Une erreur est survenue");
    }
  };

  return (
    <>
      <div className="relative w-full h-[200px] flex justify-start bg-base-100 p-5 rounded-lg gap-3 ">
        <div className="flex justify-start items-center max-md:scale-75">
          <Image src={cartItem.imagePath} width={100} alt="Tome One piece" />
          <div className="divider divider-horizontal"></div>
        </div>
        <div className="max-md:scale-90">
          <div className="">
            <p className="font-bold text-lg">{cartItem.title}</p>
          </div>
          <div>
            <p className="">{cartItem.description}</p>
          </div>
        </div>
        <div className="absolute bottom-2 right-5 flex justify-center items-center gap-3 max-md:scale-75">
          <button
            className="btn btn-outline max-md:btn-sm"
            onClick={handleRemoveItem}
          >
            -
          </button>
          <p>{cartItem.quantity}</p>
          <button
            className="btn btn-outline max-md:btn-sm"
            onClick={handleAddItem}
          >
            +
          </button>
        </div>
        <div className="absolute md:top-2 md:right-5 max-md:bottom-2 max-md:left-5 flex justify-center items-center gap-3 max-md:scale-75">
          <p className="font-bold text-lg"> {cartItem.price * cartItem.quantity} € </p>
        </div>
      </div>
    </>
  );
};

export default CartItem;
