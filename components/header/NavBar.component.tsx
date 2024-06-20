"use client"
import { useAppStore } from '@/lib/appStore'
import mangaShopDark from '@/public/mangaShop-dark.png'
import mangaShopLight from '@/public/mangaShop-light.png'
import Image from 'next/image'
import { use, useEffect, useState } from 'react'
import { CiShoppingBasket } from 'react-icons/ci'
import { IoIosMenu } from 'react-icons/io'
import { LuMoon } from 'react-icons/lu'
import { MdAccountCircle, MdOutlineWbSunny } from 'react-icons/md'

const NavBar = () => {
    const [image, setImage] = useState(mangaShopLight)
    const { theme, toggleTheme } = useAppStore()

    useEffect(() => {
        if (theme === 'darkTheme') {
            setImage(mangaShopDark)
        } else {
            setImage(mangaShopLight)
        }

    }, [theme])

    use

    return (
        <div className="relative flex items-center justify-between gap-3 h-full w-full px-8 max-md:px-4">
            <div className="flex items-center gap-3">
                <div className=" max-md:hidden pr-2">
                    <Image src={image} alt="Manga Shop" height={60} />
                </div>
                <div className='flex gap-1 items-center justify-center max-md:pl-2'>
                    <IoIosMenu size={40} />
                    <p className="font-bold max-md:hidden">Shop</p>
                </div>
            </div>

            <div className="flex-grow px-8">
                <label className="input input-bordered flex items-center gap-2">
                    <input type="text" className="grow" placeholder="Chercher un produit" />
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                </label>
            </div>


            <div className='flex gap-3 items-center'>
                {/* <div className='flex gap-1 items-center justify-center'>
                    <button onClick={toggleTheme} className='transition duration-150 hover:scale-105'>
                        {theme === 'darkTheme' ? <MdOutlineWbSunny size={35} /> : <LuMoon size={35} />}
                    </button>
                </div> */}
                <label className="swap swap-rotate">
                    <input type="checkbox" onChange={toggleTheme} checked={theme === 'darkTheme'} className="" />
                    <div className="swap-off flex items-center">
                        <LuMoon size={35} />
                    </div>
                    <div className="swap-on flex items-center">
                        <MdOutlineWbSunny size={35} />

                    </div>
                </label>
                <div className='flex items-center justify-center'>
                    <button><MdAccountCircle size={40} /></button>

                </div>
                <div>
                    <button className="flex gap-3 items-center justify-center group">
                        <div className="indicator">
                            <span className="indicator-item badge badge-secondary">0</span>
                            <CiShoppingBasket size={40} className='group group-hover:scale-110 transition ease-in-out duration-150' />
                        </div>
                        <p className='font-bold text-accent'> price €</p>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default NavBar