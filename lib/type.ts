import { StaticImageData } from "next/image";

export type ThemeType = 'lightTheme' | 'darkTheme' | undefined;

export type StoreSectionIconType = {
    id: number;
    image: StaticImageData;
    title: string;
    path: string;
    darkColor: string;
    lightColor: string;
};

export enum ProductEnum {
    NARUTO = 'Naruto',
    ONE_PIECE = 'One Piece',
    DRAGON_BALL = 'Dragon Ball',
    BLEACH = 'Bleach',
    DEMON_SLAYER = 'Demon Slayer',
}

export type ProductType = {
    id: number;
    type: ProductEnum;
    title: string;
    price: number;
    description: string;
    rating: number;
    votes: number;
    imagePath: StaticImageData;
};

export type ProductCartType = {
    id: number;
    type: ProductEnum;
    title: string;
    price: number;
    description: string;
    rating: number;
    votes: number;
    imagePath: StaticImageData;
    quantity: number;
};

export type FormInputsPaymentType = {
    email: string;
    cardNumber: string;
    cardName: string;
    expirationDate: string;
    cvv: string;
    location: string;
    postalCode: string;
    city: string;
};