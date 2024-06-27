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
        darkColor: "orange-800",
        lightColor: "orange-400",
    },
    {
        id: 2,
        image: onePieceImage,
        title: 'One Piece',
        path: '/magasin/one-piece',
        darkColor: "blue-800",
        lightColor: "blue-400",
    },
    {
        id: 3,
        image: dragonBallImage,
        title: 'Dragon Ball',
        path: '/magasin/dragon-ball',
        darkColor: "yellow-800", // Remplacez par une classe Tailwind valide
        lightColor: "yellow-400", // Remplacez par une classe Tailwind valide
    },
    {
        id: 4,
        image: bleachImage,
        title: 'Bleach',
        path: '/magasin/bleach',
        darkColor: "gray-800", // Remplacez par une classe Tailwind valide
        lightColor: "gray-400", // Remplacez par une classe Tailwind valide
    },
    {
        id: 5,
        image: demonSlayerImage,
        title: 'Demon Slayer',
        path: '/magasin/demon-slayer',
        darkColor: "red-800", // Remplacez par une classe Tailwind valide
        lightColor: "red-400", // Remplacez par une classe Tailwind valide
    },
]