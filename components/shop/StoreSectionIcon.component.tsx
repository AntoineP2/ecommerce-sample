"use client"
import Image, { StaticImageData } from 'next/image'

type StoreSectionIconProps = {
    image: StaticImageData;
    title: string;
};

const StoreSectionIcon: React.FC<StoreSectionIconProps> = ({ image, title }) => {
    return (
        <div>
            <div className="flex justify-center items-center rounded-full h-[100px] w-[100px] max-md:h-[80px] max-md:w-[80px] bg-accent">
                <Image src={image} alt="Naruto" height={150} className="rounded-full h-[100px] w-[100px] max-md:h-[80px] max-md:w-[80px]" />
            </div>
            <div className="flex justify-center items-center mt-3">
                <p className="font-bold text-lg max-md:text-sm">{title}</p>
            </div>

        </div>
    )
}

export default StoreSectionIcon
