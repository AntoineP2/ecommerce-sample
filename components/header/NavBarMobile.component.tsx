"use client"
import { useAppStore } from '@/lib/appStore'
import mangaShopDark from '@/public/mangaShop-dark.png'
import mangaShopLight from '@/public/mangaShop-light.png'
import Image from 'next/image'
import { use, useEffect, useState } from 'react'
import { CiShoppingBasket } from 'react-icons/ci'
import { IoIosMenu, IoIosSearch } from 'react-icons/io'
import { LuMoon } from 'react-icons/lu'
import { MdAccountCircle, MdOutlineWbSunny } from 'react-icons/md'
import mangaShopMobil from '@/public/mangaShopMobil.png'
import mangaShopMobilDark from '@/public/mangaShopMobil-dark.png'
import { useRouter } from 'next/navigation'

const NavBarMobile = () => {
    const [image, setImage] = useState(mangaShopMobil)
    const { theme, cartItemList, price, toggleTheme, openShop } = useAppStore()
    const router = useRouter()

    useEffect(() => {
        if (theme === 'darkTheme') {
            setImage(mangaShopMobilDark)
        } else {
            setImage(mangaShopMobil)
        }

    }, [theme])

    return (
        <div className="flex items-center justify-between gap-3 h-full w-full px-4">

            <div className='flex items-center justify-center pl-2 active:scale-95 transition ease-in-out duration-150'>
                <button className='flex items-center justify-center' onClick={() => router.push("/")}>
                    <Image src={image} alt="Manga Shop" height={35} />
                </button>
            </div>

            <div className='flex gap-1 items-center justify-center pl-2 active:scale-95 transition ease-in-out duration-150'>
                <button className='flex gap-1 items-center justify-center' onClick={openShop}>
                    <IoIosMenu size={40} />
                </button>

            </div>

            <div className='flex gap-1 items-center justify-center pl-2 active:scale-95 transition ease-in-out duration-150'>
                <button className='flex gap-1 items-center justify-center'>
                    <IoIosSearch size={40} onClick={() => router.push("/recherche")} />
                </button>
            </div>

            <label className="swap swap-rotate transition ease-in-out duration-150">
                <input type="checkbox" onChange={toggleTheme} checked={theme === 'darkTheme'} />
                <div className="swap-off flex items-center">
                    <LuMoon size={35} />
                </div>
                <div className="swap-on flex items-center">
                    <MdOutlineWbSunny size={35} />

                </div>
            </label>
            <div className='flex items-center justify-center active:scale-95 transition ease-in-out duration-150'>
                <button onClick={() => router.push("/compte-utilisateur")}>
                    <MdAccountCircle size={40} />
                </button>
            </div>
            <div>
                <button className="flex gap-3 items-center justify-center group" onClick={() => router.push("/panier")}>
                    <div className="indicator">
                        <span className="indicator-item badge badge-secondary">{cartItemList.length}</span>
                        <CiShoppingBasket size={40} className='group group-active:scale-95 transition ease-in-out duration-150' />
                    </div>
                    <p className='font-bold text-accent max-lg:hidden'> {price} €</p>
                </button>
            </div>
        </div>
    )
}

export default NavBarMobile