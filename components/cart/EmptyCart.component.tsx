"use client";

import { useAppStore } from "@/lib/appStore";

const EmptyCart = () => {
  const { openShop } = useAppStore()

  return (
    <div className="w-[800px] max-md:w-[90%] h-[300px] bg-primary shadow-primary shadow-lg flex justify-center items-center mt-24">
      <div className="flex flex-col justify-center items-center gap-3">
        <p className="text-gray-200">Votre panier est vide</p>
        <p className="text-gray-200">
          <span className="hover:text-accent transition duration-150 ease-in-out font-bold max-md:text-accent">
            <button onClick={openShop}>Cliquez ici </button>
          </span>
          pour poursuivre vos achats
        </p>
      </div>
    </div>
  );
};

export default EmptyCart;
