"use client";
import { useAppStore } from "@/lib/appStore";
import React, { useEffect, useState } from "react";
import productsList from "@/lib/mockData/StoreProductList";
import { ProductType } from "@/lib/type";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Product from "../shopManga/Product.component";
import EmptyShop from "./EmptySearch.component";
import SearchBar from "./SearchBar.component";

const SearchShop: React.FC = () => {
  const { searchShopEntry } = useAppStore();
  const [products, setProducts] = useState<ProductType[]>([]);

  const searchShopFilter = () => {
    const search = searchShopEntry.toLowerCase();
    const filteredProducts = productsList.filter((product) => {
      const title = product.title.toLowerCase();
      const description = product.description.toLowerCase();
      return title.includes(search) || description.includes(search);
    });
    setProducts(filteredProducts);
  };


  const { ref: refList, inView: inViewList } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });


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
    searchShopFilter();
  }, [searchShopEntry]);

  return (
    <>
      <div className="md:hidden mb-6 mt-2 mx-2">
        <SearchBar />
      </div>
      {searchShopEntry && <div className="flex flex-col justify-center items-center">
        <p>Recherche pour: <span className="font-bold text-xl max-md:text-lg">{searchShopEntry}</span>...</p>
        <div className="divider px-5"></div>
      </div >}

      <div className="flex max-md:flex-col justify-center items-center gap-3">
        <motion.div
          ref={refList}
          variants={variantsList}
          initial="hidden"
          animate={inViewList ? "visible" : "hidden"}
          className="flex flex-wrap justify-center items-center max-md:flex-col md:px-5 gap-5"
        >
          {products.map((product) => (
            <motion.div variants={variantsItem} key={product.id}>
              <Product product={product} />
            </motion.div>
          ))}
        </motion.div>
        {products.length === 0 && (
          <div className="flex justify-center items-center">
            <EmptyShop />
          </div>
        )}
      </div>
    </>
  );
};

export default SearchShop;
