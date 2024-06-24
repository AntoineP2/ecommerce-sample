"use client"

import { StoreSectionIconList } from "@/lib/mockData/StoreSectionIconList";
import { usePathname } from "next/navigation"
import Product from "./Product.component";
import productsList from '@/lib/mockData/StoreProductList'
import { useEffect } from "react";

const Shop = () => {
    const pathname = usePathname()
    const parts = pathname.split('/');
    const lastPart = parts[parts.length - 1];

    const storeSection = StoreSectionIconList.find((item) => {
        const pathParts = item.path.split('/');
        return pathParts[pathParts.length - 1] === lastPart;
    });

    const productListFilter = productsList.filter((product) => product.type === storeSection?.title)


    return (
        <>
            <div className="flex justify-center items-center">
                <h1 className="font-bold md:text-xl text-lg">Rayon {storeSection?.title}</h1>
            </div>
            <div className="flex flex-wrap justify-center items-center max-md:flex-col md:px-5 gap-5">
                {productListFilter.map((product) => (
                    <Product key={product.id} product={product} />
                ))}
            </div>
        </>
    )
}

export default Shop