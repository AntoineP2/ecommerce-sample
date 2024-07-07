"use client"
import React from 'react'
import { IoMdCloseCircle } from 'react-icons/io'
import { useAppStore } from '@/lib/appStore'
import { useRouter } from 'next/navigation'

const SuccessPaymentModal = () => {
  const { successPayment, closeSuccessPayment, resetCartItemList } = useAppStore()
  const router = useRouter()

  const handleCloseModal = () => {
    closeSuccessPayment()
    resetCartItemList()
    router.push('/panier')

  }

  return (
    <div className={`fixed top-0 right-0 w-screen h-screen bg-black bg-opacity-80 flex justify-center items-center px-2 md:px-0 ${successPayment ? "scale-100" : "scale-0"}`}>
      <div className={`relative rounded-lg bg-base-100 w-[70%] h-[80%] max-md:w-[90%] transition duration-300 ${successPayment ? "scale-100" : "scale-0"}`}>
        <button className='absolute flex items-center justify-center top-5 right-5 max-md:active:scale-95 md:hover:scale-105 transition duration-150 ease-in-out'>
          <IoMdCloseCircle size={40} className="text-error" onClick={handleCloseModal} />
        </button>
        <div className="flex justify-center items-center w-full h-full">
          <div className="w-[400px] max-md:w-[90%] bg-success h-[200px] rounded-lg shadow-md flex flex-col justify-center items-center">
            <p className="text-lg text-center"><span className="font-bold text-accent">MangaShop</span> vous remercie pour votre achat</p>
            <p className="text-lg">Vous recevrez un email de confirmation</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SuccessPaymentModal