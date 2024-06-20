"use client"
import { useAppStore } from '@/lib/appStore'
import NavBarDesktop from './NavBarDesktop.component'
import NavBarMobile from './NavBarMobile.component'
import { IoMdCloseCircle } from 'react-icons/io'

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
            {showShop && <div className="fixed top-0 right-0 w-screen h-screen bg-black bg-opacity-70 flex justify-center items-center px-2 md:px-0">
                <div className="relative bg-base-100 w-[70%] h-[80%] max-md:w-[90%]">
                    <button className='absolute flex items-center justify-center top-5 right-5 max-md:active:scale-95 md:hover:scale-105 transition duration-150 ease-in-out'>
                        <IoMdCloseCircle size={40} className="text-error" onClick={closeShop} />
                    </button>
                </div>
            </div>
            }
        </>
    )
}

export default Header