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
        title: 'Naruto'
    },
    {
        id: 2,
        image: onePieceImage,
        title: 'One Piece'
    },
    {
        id: 3,
        image: dragonBallImage,
        title: 'Dragon Ball'
    },
    {
        id: 4,
        image: bleachImage,
        title: 'Bleach'
    },
    {
        id: 5,
        image: blackCloverImage,
        title: 'Black Clover'
    },
    {
        id: 6,
        image: demonSlayerImage,
        title: 'Demon Slayer'
    },
    {
        id: 7,
        image: soloLevelingImage,
        title: 'Solo Leveling'
    }
]