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

const CartItemRecap: React.FC<CartItemProps> = ({ cartItem }) => {
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
      <div className="relative justify-start bg-primary p-5 rounded-lg gap-3">
        <div className="max-md:scale-90">
          <div className="flex justify-start items-center gap-3">
            <p className="font-bold text-lg text-secondary w-[10px]">{cartItem.quantity} </p>
            <div className="divider divider-horizontal"></div>
            <p className="font-bold text-lg text-secondary w-[200px] flex-wrap">{cartItem.title}</p>
            <div className="divider divider-horizontal"></div>
            <p className="font-bold text-smt">{cartItem.price * cartItem.quantity} €</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItemRecap;
