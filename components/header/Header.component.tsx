"use client";
import { useAppStore } from "@/lib/appStore";
import NavBarDesktop from "./NavBarDesktop.component";
import NavBarMobile from "./NavBarMobile.component";

const Header = () => {
  const { showShop } = useAppStore();
  return (
    <>
      
        <div className="max-md:hidden h-full w-full">
          <NavBarDesktop />
        </div>
        <div className="md:hidden h-full w-full">
          <NavBarMobile />
        </div>
    </>
  );
};

export default Header;
