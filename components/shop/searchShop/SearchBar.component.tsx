"use client";

import { useAppStore } from "@/lib/appStore";
import { useRouter } from "next/navigation";
import { useRef } from "react";
import { toast } from "sonner";

const SearchBar = () => {
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

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchShopEntry(e.target.value);
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (searchShopEntry.length > 0) {
      if (inputRef.current) {
        inputRef.current.value = "";
      }
      router.push("/recherche");
    } else {
      toast.error("Veuillez entrer un produit à rechercher");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label className="input input-bordered flex items-center gap-2">
          <input
            ref={inputRef}
            type="text"
            className="grow"
            placeholder="Chercher un produit"
            onChange={handleSearchChange}
          />
          <button type="submit">
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
          </button>
        </label>
      </form>
    </>
  );
};

export default SearchBar;
