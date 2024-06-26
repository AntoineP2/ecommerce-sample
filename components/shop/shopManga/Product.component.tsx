"use client"
import { useEffect } from 'react'
import Image from "next/image";
import Rating from '@/components/Rating.component';
import { MdAddShoppingCart } from 'react-icons/md';
import { IoMdInformationCircleOutline } from 'react-icons/io';
import { usePathname, useRouter } from 'next/navigation';
import { ProductType } from '@/lib/type';
import { useAppStore } from '@/lib/appStore';
import { toast } from 'sonner';

interface ProductProps {
    product: ProductType
}

const Product: React.FC<ProductProps> = ({ product }) => {
    const { cartItemList, setCartItemList } = useAppStore()
    const pathname = usePathname()
    const parts = pathname.split('/');
    const lastPart = parts[parts.length - 1];
    const router = useRouter()

    const handleAddProduct = () => {
        setCartItemList(product)
        toast.success(`${product.title} a été ajouté au panier`)
    }

    return (
        <div className="relative w-[350px] h-[450px] bg-primary shadow-lg flex flex-col p-5 rounded-lg gap-3">
            <div className="flex justify-center items-center">
                <Image src={product.imagePath} width={150} alt="Tome One piece" />
            </div>
            <div className='flex justify-center items-center gap-2'>
                <Rating rating={product.rating} />
                <p className="text-gray-200">({product.votes})</p>
            </div>
            <div>
                <p className="text-gray-200"><span className='font-bold text-accent'>{product.title}</span>, {product.description}</p>
            </div>
            <div className='flex justify-between items-center absolute bottom-2 left-0 w-full pb-1 px-5'>
                <div>
                    <p className="font-bold text-lg text-success"> {product.price} €</p>
                </div>
                <div className="flex justify-center items-center gap-3">
                    <button className="max-md:active:scale-95 md:hover:scale-105 transition duration-150 ease-in-out">
                        <IoMdInformationCircleOutline size={35} className="text-accent" onClick={() => router.push(`/magasin/${lastPart}/product`)} />
                    </button>
                    <button className="max-md:active:scale-95 md:hover:scale-105 transition duration-150 ease-in-out" onClick={handleAddProduct}>
                        <div className="flex justify-center items-center w-[60px] h-[60px] rounded-full bg-secondary text-gray-200">
                            <MdAddShoppingCart size={30} />
                        </div>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Product