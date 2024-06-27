"use client";

import { useAppStore } from "@/lib/appStore";
import CartItem from "./CartItem.component";
import { ProductCartType, ProductType } from "@/lib/type";
import { useEffect, useState } from "react";
import EmptyCart from "./EmptyCart.component";

const Cart = () => {
  const { cartItemList } = useAppStore();
  const [cartItemsListGrouped, setCartItemsListGrouped] = useState<
    ProductCartType[]
  >([]);

  type CartItemsAccumulator = Record<number, ProductCartType>;

  // Methode pour groupe les items avec le même ID
  const groupedCartItems = cartItemList.reduce<CartItemsAccumulator>(
    (acc, item) => {
      const key = item.id;
      if (!acc[key]) {
        acc[key] = { ...item, quantity: 0 };
      }
      acc[key].quantity += 1;
      return acc;
    },
    {}
  );
  console.log("ok")

  useEffect(() => {
    setCartItemsListGrouped(Object.values(groupedCartItems));
  }, [cartItemList]);

  return (
    <>
      <div className="flex flex-col justify-center items-center gap-3">
        {cartItemsListGrouped.length === 0 && (<EmptyCart />)}
        {cartItemsListGrouped.map((item) => (
          <div key={item.id}>
            <CartItem cartItem={item} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Cart;
