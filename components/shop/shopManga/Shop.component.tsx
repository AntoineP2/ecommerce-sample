"use client";

import { StoreSectionIconList } from "@/lib/mockData/StoreSectionIconList";
import { usePathname, useRouter } from "next/navigation";
import Product from "./Product.component";
import productsList from "@/lib/mockData/StoreProductList";
import { useEffect, useRef, useState } from "react";
import { useAppStore } from "@/lib/appStore";

const Shop = () => {
  const pathname = usePathname();
  const [withHeader, setWidthHeader] = useState<string>("w-0");
  const router = useRouter();
  const parts = pathname.split("/");
  const lastPart = parts[parts.length - 1];
  const { openShop } = useAppStore();

  const storeSection = StoreSectionIconList.find((item) => {
    const pathParts = item.path.split("/");
    return pathParts[pathParts.length - 1] === lastPart;
  });

  useEffect(() => {
    setWidthHeader("w-screen");
  }, []);

  console.log(parts);

  const productListFilter = productsList.filter(
    (product) => product.type === storeSection?.title
  );

  return (
    <>
      <div
        className={`${withHeader} h-[80px] mt-[-30px] mb-[50px] relative bg-accent transition-all duration-300 ease-in-out`}
      >
        <div className="flex justify-center items-center">
          <div className="breadcrumbs text-sm">
            <ul>
              <li className="hover:underline">
                <button onClick={openShop}>magasin</button>
              </li>
              <li className="hover:underline">
                <button onClick={() => router.push(`/magasin/${lastPart}`)}>
                  {storeSection?.title}
                </button>
              </li>
            </ul>
          </div>
          <h1 className="font-bold md:text-xl text-lg">
            Rayon {storeSection?.title}
          </h1>
        </div>
      </div>

      <div className="flex flex-wrap justify-center items-center max-md:flex-col md:px-5 gap-5">
        {productListFilter.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default Shop;
