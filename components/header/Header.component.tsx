"use client"
import { useAppStore } from '@/lib/appStore'
import NavBarDesktop from './NavBarDesktop.component'
import NavBarMobile from './NavBarMobile.component'
import { IoMdCloseCircle } from 'react-icons/io'
import StoreSection from '../shop/StoreSection.component'

const Header = () => {
    const { showShop, closeShop } = useAppStore()

    return (
        <>
            <div className="max-md:hidden h-full w-full">
                <NavBarDesktop />
            </div>
            <div className="md:hidden h-full w-full">
                <NavBarMobile />
            </div>

            <div className={`fixed top-0 right-0 w-screen h-screen bg-black bg-opacity-80 flex justify-center items-center px-2 md:px-0 ${showShop ? "scale-100" : "scale-0"}`}>
                <div className={`relative bg-base-100 w-[70%] h-[80%] max-md:w-[90%] transition duration-300 ${showShop ? "scale-100" : "scale-0"}`}>
                    <button className='absolute flex items-center justify-center top-5 right-5 max-md:active:scale-95 md:hover:scale-105 transition duration-150 ease-in-out'>
                        <IoMdCloseCircle size={40} className="text-error" onClick={closeShop} />
                    </button>
                    <div className="flex justify-center items-center mt-10">
                        <h1 className="uppercase font-bold md:text-xl">Nos Rayons</h1>
                    </div>
                    <div><StoreSection /></div>
                </div>
            </div>
        </>
    )
}

export default Header