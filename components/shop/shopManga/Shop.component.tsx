"use client";

import { StoreSectionIconList } from "@/lib/mockData/StoreSectionIconList";
import { usePathname, useRouter } from "next/navigation";
import Product from "./Product.component";
import productsList from "@/lib/mockData/StoreProductList";
import { useEffect, useRef, useState } from "react";
import { useAppStore } from "@/lib/appStore";

const Shop = () => {
  const pathname = usePathname();
  const [withHeader, setWidthHeader] = useState<string>("-left-full");
  const [colorBgHeader, setColorBgHeader] = useState<string>("");
  const router = useRouter();
  const parts = pathname.split("/");
  const lastPart = parts[parts.length - 1];
  const { theme, openShop } = useAppStore();

  const storeSection = StoreSectionIconList.find((item) => {
    const pathParts = item.path.split("/");
    return pathParts[pathParts.length - 1] === lastPart;
  });

  useEffect(() => {
    setWidthHeader("left-0");
    if (storeSection) {
      const newColor = theme === "darkTheme" ? storeSection.darkColor : storeSection.lightColor
      setColorBgHeader(newColor);
    }
  }, [theme, storeSection]);


  const productListFilter = productsList.filter(
    (product) => product.type === storeSection?.title
  );

  return (
    <>
      <div
        className={`${withHeader} bg-gradient-to-r from-${colorBgHeader} from-30% to-base-100 h-[90px] mt-[-30px] mb-[50px] relative transition-all duration-500 ease-in-out rounded-lg shadow-lg`}
      >
        <div className="flex flex-col justify-center pl-10">
          <div className="breadcrumbs text-sm">
            <ul>
              <li className="hover:underline hover:font-bold hover:text-accent">
                <button onClick={openShop}>Magasin</button>
              </li>
              <li className="hover:underline hover:font-bold hover:text-accent">
                <button onClick={() => router.push(`/magasin/${lastPart}`)}>
                  {storeSection?.title}
                </button>
              </li>
            </ul>
          </div>
          <h1 className="font-bold md:text-2xl text-lg">
            Rayon {storeSection?.title}
          </h1>
        </div>
      </div>

      <div className="flex flex-wrap justify-center items-center max-md:flex-col md:px-5 gap-5">
        {productListFilter.map((product) => (
          <Product key={product.id} product={product} colorBgHeader={colorBgHeader} />
        ))}
      </div>
    </>
  );
};

export default Shop;
