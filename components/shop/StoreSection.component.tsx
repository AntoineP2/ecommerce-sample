"use client"
import { StoreSectionIconList } from '@/lib/mockData/StoreSectionIconList'
import StoreSectionIcon from './StoreSectionIcon.component'


const StoreSection = () => {
    return (
        <>
            <div className='max-h-[500px] overflow-y-auto py-10 md:py-16'>
                <div className='flex flex-wrap justify-center gap-10  mx-2 md:mx-[100px]'>
                    {StoreSectionIconList.map((icon) =>
                        <button key={icon.id} className="transition ease-in-out duration-150 md:hover:scale-105 max-md:active:scale-95">
                            <StoreSectionIcon image={icon.image} title={icon.title} />
                        </button>
                    )}
                </div>
            </div>
        </>
    )
}

export default StoreSection
