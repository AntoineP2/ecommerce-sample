"use client";
import { useAppStore } from "@/lib/appStore";
import mangaShopDark from "@/public/mangaShop-dark.png";
import mangaShopLight from "@/public/mangaShop-light.png";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { use, useEffect, useRef, useState } from "react";
import { CiShoppingBasket } from "react-icons/ci";
import { IoIosMenu } from "react-icons/io";
import { LuMoon } from "react-icons/lu";
import { MdAccountCircle, MdOutlineWbSunny } from "react-icons/md";
import { toast } from "sonner";

const NavBarDesktop = () => {
  const [image, setImage] = useState(mangaShopLight);
  const {
    searchShopEntry,
    theme,
    cartItemList,
    price,
    toggleTheme,
    openShop,
    setSearchShopEntry,
  } = useAppStore();
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (theme === "darkTheme") {
      setImage(mangaShopDark);
    } else {
      setImage(mangaShopLight);
    }
  }, [theme]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchShopEntry(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (searchShopEntry.length > 0) {
      if (inputRef.current) {
        inputRef.current.value = '';
      }
      router.push("/recherche");
    } else {
      toast.error("Veuillez entrer un produit à rechercher");
    }
    e.preventDefault();
  };

  return (
    <div className="flex items-center justify-between gap-3 h-full w-full px-8 max-md:px-4">
      <div className="flex items-center gap-3">
        <button className="pr-2" onClick={() => router.push("/")}>
          <Image src={image} alt="Manga Shop" height={60} />
        </button>
        <div className="flex gap-1 items-center justify-center max-md:pl-2 hover:scale-105 transition ease-in-out duration-150">
          <button
            className="flex gap-1 items-center justify-center"
            onClick={openShop}
          >
            <IoIosMenu size={40} />
            <p className="font-bold max-md:hidden cursor-pointer max-lg:hidden">
              Shop
            </p>
          </button>
        </div>
      </div>

      <div className="flex-grow px-8">
        <form onSubmit={handleSubmit}>
          <label className="input input-bordered flex items-center gap-2">
            <input
              ref={inputRef}
              type="text"
              className="grow"
              placeholder="Chercher un produit"
              onChange={handleSearchChange}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </label>
        </form>
      </div>

      <div className="flex gap-3 items-center">
        <label className="swap swap-rotate hover:scale-105 transition ease-in-out duration-150">
          <input
            type="checkbox"
            onChange={toggleTheme}
            checked={theme === "darkTheme"}
          />
          <div className="swap-off flex items-center">
            <LuMoon size={35} />
          </div>
          <div className="swap-on flex items-center">
            <MdOutlineWbSunny size={35} />
          </div>
        </label>
        <div className="flex items-center justify-center hover:scale-105 transition ease-in-out duration-150">
          <button onClick={() => router.push("/compte-utilisateur")}>
            <MdAccountCircle size={40} />
          </button>
        </div>
        <div>
          <button
            className="flex gap-3 items-center justify-center group"
            onClick={() => router.push("/panier")}
          >
            <div className="indicator">
              <span className="indicator-item badge badge-secondary">
                {cartItemList.length}
              </span>
              <CiShoppingBasket
                size={40}
                className="group group-hover:scale-110 transition ease-in-out duration-150"
              />
            </div>
            <p className="font-bold text-accent max-lg:hidden"> {price} €</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBarDesktop;
