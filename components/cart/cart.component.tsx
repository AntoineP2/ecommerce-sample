"use client"

import { useAppStore } from "@/lib/appStore"
import CartItem from "./cartItem.component"
import { ProductCartType, ProductType } from "@/lib/type"
import { useEffect, useState } from "react"

const Cart = () => {
  const { cartItemList } = useAppStore()
  const [ cartItemsListGrouped, setCartItemsListGrouped ] = useState<ProductCartType[]>([])

  // Methode pour groupe les items avec le même ID
  const groupedCartItems = cartItemList.reduce<ProductCartType>((acc, item) => {
    const key = item.id;
    if (!acc[key]) {
        acc[key] = { ...item, quantity: 0 };
    }
    acc[key].quantity += 1;
    return acc;
}, {});

useEffect(() => {
  setCartItemsListGrouped(Object.values(groupedCartItems))
}, [cartItemList])

  return (
    <div>
      {cartItemsListGrouped.map((item) => 
      <div key={item.id}>
        <CartItem cartItem={item} />
        </div>
      )}
        
    </div>
  )
}

export default Cart