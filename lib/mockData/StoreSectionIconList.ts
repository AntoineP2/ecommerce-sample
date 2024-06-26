import { StoreSectionIconType } from "../type";
import narutoImage from '@/public/storeSection/naruto.png'
import onePieceImage from '@/public/storeSection/onePiece.png'
import dragonBallImage from '@/public/storeSection/dbz.png'
import bleachImage from '@/public/storeSection/bleach.png'
import blackCloverImage from '@/public/storeSection/blackClover.png'
import demonSlayerImage from '@/public/storeSection/demonSlayer.png'
import soloLevelingImage from '@/public/storeSection/soloLeveling.jpeg'

export const StoreSectionIconList: StoreSectionIconType[] = [
    {
        id: 1,
        image: narutoImage,
        title: 'Naruto',
        path: '/magasin/naruto',
    },
    {
        id: 2,
        image: onePieceImage,
        title: 'One Piece',
        path: '/magasin/one-piece',
    },
    {
        id: 3,
        image: dragonBallImage,
        title: 'Dragon Ball',
        path: '/magasin/dragon-ball',
    },
    {
        id: 4,
        image: bleachImage,
        title: 'Bleach',
        path: '/magasin/bleach',
    },
    {
        id: 5,
        image: demonSlayerImage,
        title: 'Demon Slayer',
        path: '/magasin/demon-slayer',
    },
]