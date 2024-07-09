import React from 'react'
import { IoMdWarning } from 'react-icons/io'

const Building = () => {
    return (
        <div className="flex justify-center items-center w-full h-full">
            <div className="w-[800px] max-md:w-[90%] h-[300px] bg-primary shadow-primary shadow-lg flex justify-center items-center mt-24">
                <div className="flex flex-col justify-center items-center gap-3">
                    <p className="text-gray-200">Désolé...</p>
                    <div className='flex justify-center items-center gap-2'>
                        <IoMdWarning size={30} className='text-warning' />
                        <p>Page en construction !</p>
                        <IoMdWarning size={30} className='text-warning' />
                    </div>
                    <progress className="progress progress-warning mt-2 w-56"></progress>
                </div>

            </div>
        </div>
    )
}

export default Building