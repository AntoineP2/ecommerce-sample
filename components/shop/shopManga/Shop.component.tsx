"use client";

import { StoreSectionIconList } from "@/lib/mockData/StoreSectionIconList";
import { usePathname, useRouter } from "next/navigation";
import Product from "./Product.component";
import productsList from "@/lib/mockData/StoreProductList";
import { useEffect, useRef, useState } from "react";
import { useAppStore } from "@/lib/appStore";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

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

  const { ref: refBar, inView: inViewBar } = useInView({
    triggerOnce: true,
  });

  const { ref: refList, inView: inViewList } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });


  const variants = {
    hidden: { x: "90vw" },
    visible: { x: "0px " },
  };

  const variantsItem = {
    hidden: { opacity: 0, y: 35 },
    visible: { opacity: 1, y: 0 },
  };

  const variantsList = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  useEffect(() => {
    setWidthHeader("left-0");
    if (storeSection) {
      const newColor =
        theme === "darkTheme"
          ? storeSection.darkColor
          : storeSection.lightColor;
      setColorBgHeader(newColor);
    }
  }, [theme, storeSection]);

  const productListFilter = productsList.filter(
    (product) => product.type === storeSection?.title
  );

  return (
    <>
      <motion.div
        ref={refBar}
        variants={variants}
        initial="hidden"
        animate={inViewBar ? "visible" : "hidden"}
        transition={{ duration: 0.05, ease: "easeInOut" }}
        className={`bg-gradient-to-r from-${colorBgHeader} from-30% to-base-100 h-[90px] mt-[-30px] mb-[50px] relative transition-all duration-500 ease-in-out rounded-lg shadow-lg`}
      >
        <div className="flex flex-col justify-center md:pl-10 pl-5">
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
          <h1 className="font-bold md:text-2xl text-xl">
            Rayon {storeSection?.title}{" "}
            <span className="text-xs font-normal italic">
              {productListFilter.length} produit(s)
            </span>
          </h1>
        </div>
      </motion.div>

      <motion.div
        ref={refList}
        variants={variantsList}
        initial="hidden"
        animate={inViewList ? "visible" : "hidden"}
        className="flex flex-wrap justify-center items-center max-md:flex-col md:px-5 gap-5"
      >
        {productListFilter.map((product) => (
          <motion.div variants={variantsItem} key={product.id}>
            <Product product={product} colorBgHeader={colorBgHeader} />
          </motion.div>
        ))}
      </motion.div>
    </>
  );
};

export default Shop;
