"use client"

import { ProductCartType, ProductType } from "@/lib/type"
import Image from "next/image"
import { IoMdInformationCircleOutline } from "react-icons/io"
import { MdAddShoppingCart } from "react-icons/md"
import tome from '@/public/product/tome-onepiece.jpeg'

interface CartItemProps {
  cartItem: ProductCartType
}

const CartItem: React.FC<CartItemProps> = ({cartItem}) => {
  return (
    <div className="relative w-[350px] h-[450px] bg-primary shadow-lg flex flex-col p-5 rounded-lg gap-3">
            <div className="flex justify-center items-center">
                <Image src={tome} width={150} alt="Tome One piece" />
            </div>
            <div>
                <p className="text-gray-200"><span className='font-bold text-accent'>{cartItem.title}</span>, {cartItem.description}</p>
            </div>
            <div className='flex justify-between items-center absolute bottom-2 left-0 w-full pb-1 px-5'>
                <div>
                    <p className="font-bold text-lg text-success"> {cartItem.price} €</p>
                </div>
                <div className="flex justify-center items-center gap-3">
                </div>
            </div>
        </div>
  )
}

export default CartItem