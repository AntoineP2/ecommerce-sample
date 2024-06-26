import { StoreSectionIconType } from "../type";
import narutoImage from '@/public/storeSection/naruto.png'
import onePieceImage from '@/public/storeSection/onePiece.png'
import dragonBallImage from '@/public/storeSection/dbz.png'
import bleachImage from '@/public/storeSection/bleach.png'
import demonSlayerImage from '@/public/storeSection/demonSlayer.png'


export const StoreSectionIconList: StoreSectionIconType[] = [
    {
        id: 1,
        image: narutoImage,
        title: 'Naruto',
        path: '/magasin/naruto',
        darkColor: "bg-orange-800",
        lightColor: "bg-orange-400",
    },
    {
        id: 2,
        image: onePieceImage,
        title: 'One Piece',
        path: '/magasin/one-piece',
        darkColor: "#000000",
        lightColor: "#FFFFFF",
    },
    {
        id: 3,
        image: dragonBallImage,
        title: 'Dragon Ball',
        path: '/magasin/dragon-ball',
        darkColor: "#000000",
        lightColor: "#FFFFFF",
    },
    {
        id: 4,
        image: bleachImage,
        title: 'Bleach',
        path: '/magasin/bleach',
        darkColor: "#000000",
        lightColor: "#FFFFFF",
    },
    {
        id: 5,
        image: demonSlayerImage,
        title: 'Demon Slayer',
        path: '/magasin/demon-slayer',
        darkColor: "#000000",
        lightColor: "#FFFFFF",
    },
]