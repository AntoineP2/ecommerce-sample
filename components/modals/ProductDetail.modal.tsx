"use client";
import React from "react";
import { IoMdCloseCircle } from "react-icons/io";
import { useAppStore } from "@/lib/appStore";

const ProductDetailModal = () => {
  const {
    currentProduct,
    currentSection,
    showProductDetail,
    theme,
    closeProductDetail,
  } = useAppStore();

  return (
    <div
      className={`fixed top-0 right-0 w-screen h-screen bg-black bg-opacity-80 flex justify-center items-center px-2 md:px-0 ${showProductDetail ? "scale-100" : "scale-0"
        }`}
    >
      <div
        className={`relative border-2 border-${theme === "darkTheme"
            ? currentSection?.darkColor
            : currentSection?.lightColor
          } rounded-lg bg-base-100 w-[500px] h-[300px] max-md:w-[90%] transition duration-300 ${showProductDetail ? "scale-100" : "scale-0"
          }`}
      >
        <div className="flex items-center justify-end pt-2 pr-2 ">
          <button className="max-md:active:scale-95 md:hover:scale-105 transition duration-150 ease-in-out">
            <IoMdCloseCircle
              size={40}
              className="text-error"
              onClick={closeProductDetail}
            />
          </button>
        </div>

        <div className="flex justify-center flex-col gap-5 items-center pt-10 px-2 ">
          <div className="flex justify-center items-center">
            <h1 className="uppercase font-bold text-accent md:text-xl">
              {currentProduct?.title}
            </h1>
          </div>
          <div className="flex justify-center items-center">
            <p>{currentProduct?.description}</p>
          </div>
          <div className="flex justify-center items-center text-success font-bold">
            <p>{currentProduct?.price} €</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailModal;
