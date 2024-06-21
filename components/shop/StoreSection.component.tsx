"use client"
import { StoreSectionIconList } from '@/lib/mockData/StoreSectionIconList'
import StoreSectionIcon from './StoreSectionIcon.component'
import { useRouter } from 'next/navigation'
import { useAppStore } from '@/lib/appStore'


const StoreSection = () => {
    const router = useRouter()
    const { closeShop } = useAppStore();

    const handleNavigate = (path: string) => {
        closeShop();
        router.push(path);
    }

    return (
        <>
            <div className='max-h-[500px] overflow-y-auto py-10 md:py-16'>
                <div className='flex flex-wrap justify-center gap-10  mx-2 md:mx-[100px]'>
                    {StoreSectionIconList.map((icon) =>
                        <button key={icon.id} className="transition ease-in-out duration-150 md:hover:scale-105 max-md:active:scale-95" onClick={() => handleNavigate(icon.path)}>
                            <StoreSectionIcon image={icon.image} title={icon.title} />
                        </button>
                    )}
                </div>
            </div>
        </>
    )
}

export default StoreSection
