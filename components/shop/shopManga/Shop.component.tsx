"use client"

import { StoreSectionIconList } from "@/lib/mockData/StoreSectionIconList";
import { usePathname, useRouter } from "next/navigation"

const Shop = () => {
    const pathname = usePathname()
    const parts = pathname.split('/');
    const lastPart = parts[parts.length - 1];

    const storeSection = StoreSectionIconList.find((item) => {
        const pathParts = item.path.split('/');
        return pathParts[pathParts.length - 1] === lastPart;
    });

    return (
        <>
            <div className="flex justify-center items-center">
                <h1 className="font-bold md:text-xl text-lg">Rayon {storeSection?.title}</h1>
            </div>
        </>
    )
}

export default Shop