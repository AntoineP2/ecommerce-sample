import { StaticImageData } from "next/image";

export type ThemeType = 'lightTheme' | 'darkTheme' | undefined;

export type StoreSectionIconType = {
    id: number;
    image: StaticImageData;
    title: string;
    path: string;
};