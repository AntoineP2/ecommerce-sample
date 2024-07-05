"use client";

import { useAppStore } from "@/lib/appStore";
import CartItem from "./cartItem.component";
import { ProductCartType, ProductType } from "@/lib/type";
import { useEffect, useState } from "react";
import EmptyCart from "./EmptyCart.component";
import { useRouter } from "next/navigation";

const Cart = () => {
  const router = useRouter();
  const { cartItemList, price } = useAppStore();
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
  console.log("ok");

  useEffect(() => {
    setCartItemsListGrouped(Object.values(groupedCartItems));
  }, [cartItemList]);

  return (
    <>
      <div className="flex max-md:flex-col justify-center items-center gap-3">
        {cartItemsListGrouped.length === 0 && <EmptyCart />}
        {cartItemsListGrouped.length > 0 && (
          <div className="bg-primary flex flex-col lg:w-[1000px] w-[90%] rounded-md shadow-lg">
            <div className="flex justify-between items-center text-xl max-md:text-lg font-bold pt-5 mx-5 text-gray-200">
              <p>Votre panier</p>
              <button className="btn btn-success text-gray-200" onClick={() => router.push("/panier/paiment")}> Passer la commande</button>
            </div>
            <div className="divider"></div>
            {cartItemsListGrouped.map((item) => (
              <div key={item.id}>
                <CartItem cartItem={item} />
                <div className="divider"></div>
              </div>
            ))}
            <div className="flex justify-end items-center pb-10 max-md:scale-90 text-gray-200 px-3">
              <p> sous-total : <span className="text-lg font-bold">{price} €</span> </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
