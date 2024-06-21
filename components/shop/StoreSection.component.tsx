"use client"
import { StoreSectionIconList } from '@/lib/mockData/StoreSectionIconList'
import StoreSectionIcon from './StoreSectionIcon.component'


const StoreSection = () => {
    return (
        <>
            <div className='max-h-[500px] overflow-y-auto py-10 md:py-16'>
                <div className='flex flex-wrap justify-center gap-10  mx-2 md:mx-[100px]'>
                    {StoreSectionIconList.map((icon) => <StoreSectionIcon key={icon.id} image={icon.image} title={icon.title} />)}
                </div>
            </div>
        </>
    )
}

export default StoreSection
