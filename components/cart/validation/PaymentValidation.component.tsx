"use client"

import { useAppStore } from "@/lib/appStore"
import CartList from "./CartList.component"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import PaymentAdresseForm from "./PaymentAdresseForm.component"
import PaymentCartForm from "./PaymentCartForm.component"

const PaymentValidation = () => {
    const { paymentStep, price } = useAppStore()
    const router = useRouter()

    useEffect(() => {
        if (price === 0) {
            router.push("/panier")
        }
    }, [price])

    return (
        <div>
            <div className="flex justify-center items-center">
                <ul className="steps steps-horizontal w-[500px] max-md:w-[90%]">
                    <li className="step step-primary cursor-default">Panier</li>
                    <li className={`step ${paymentStep >= 1 ? "step-primary" : ""} cursor-default`}>Adresse</li>
                    <li className={`step ${paymentStep >= 2 ? "step-primary" : ""} cursor-default`}>Paiment</li>
                </ul>
            </div>
            <div className="mt-10">
                {paymentStep === 0 && <CartList />}
                {paymentStep === 1 && <PaymentAdresseForm />}
                {paymentStep === 2 && <PaymentCartForm />}
            </div>
        </div>
    )
}

export default PaymentValidation