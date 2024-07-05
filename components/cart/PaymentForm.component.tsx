"use client"

import { useAppStore } from "@/lib/appStore"
import { FormInputsPaymentType } from "@/lib/type";
import { useForm, SubmitHandler } from "react-hook-form";
import { FaCcVisa, FaUser } from "react-icons/fa";

const PaymentForm: React.FC = () => {
  const { price } = useAppStore()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputsPaymentType>();


  return (
    <div className="w-screen flex justify-center items-center">
      <div className="w-[800px] h-[800px] relative bg-black">
        <div>
          <p>Vos achats : {price} €</p>
        </div>
        <form onSubmit={handleSubmit((data) => console.log(data))} className="flex justify-center">
          <div className="w-[80%] flex flex-col justify-center items-center gap-2">

            {/* CardName, CardNumber */}
            <div className="flex flex-col gap-2 w-full shadow-sm shadow-secondary px-2 py-2 rounded-lg ">
              <h2 className="text-secondary font-bold"> Informations de la carte</h2>
              {/* CardName */}
              <label className="input input-bordered input-sm input-primary bg-base-300 flex items-center gap-2 w-full">
                <FaUser size={12} className="text-primary" />
                <input
                  type="text"
                  className="grow"
                  placeholder="Nom du titulaire de la carte"
                  disabled={false}
                  {...register("cardName", {
                    required: true,
                    pattern: /^[A-Za-z\s]+$/,
                    maxLength: 50,
                  })}
                />
              </label>
              {errors.cardName?.type === "pattern" && (
                <span className="text-error text-xs">
                  Le nom du titulaire doit être composé de lettre uniquement
                </span>
              )}
              {errors.cardName?.type === "required" && (
                <span className="text-error text-xs">
                  Le nom du titulaire est obligatoire
                </span>
              )}
              {errors.cardName?.type === "maxLength" && (
                <span className="text-error text-xs">
                  Le nom du titulaire est trop long
                </span>
              )}
              {/* CardNumber */}
              <label className="input input-bordered input-sm input-primary bg-base-300 flex items-center gap-2 w-full">
                <FaCcVisa size={15} className="text-primary" />
                <input
                  type="text"
                  className="grow"
                  placeholder="Numéro de la carte"
                  disabled={false}
                  onInput={(e: React.FormEvent<HTMLInputElement>) => {
                    const target = e.target as HTMLInputElement;
                    target.value = target.value.replace(/[^0-9]/g, '');
                  }}
                  {...register("cardNumber", {
                    required: true,
                    pattern: /^[0-9]{16}$/,
                  })}
                />
              </label>
              {errors.cardNumber?.type === "pattern" && (
                <span className="text-error text-xs">
                  Le numéro de la carte doit être composé de 16 chiffres
                </span>
              )}
              {errors.cardNumber?.type === "required" && (
                <span className="text-error text-xs">
                  Le numéro de la carte est obligatoire
                </span>
              )}
              <div className="flex gap-1">
                {/* Expiration Date */}
                <input
                  type="text"
                  className="input input-bordered input-sm input-primary bg-base-300 flex items-center gap-2 w-full"
                  placeholder="Date d'expiration (MM/AA)"
                  disabled={false}
                  maxLength={5}
                  onInput={(e: React.FormEvent<HTMLInputElement>) => {
                    const target = e.target as HTMLInputElement;
                    target.value = target.value.replace(/[^0-9/]/g, '');

                    // Auto-insert slash
                    if (target.value.length === 2 && !target.value.includes('/')) {
                      target.value = `${target.value}/`;
                    }
                  }}
                  onPaste={(e: React.ClipboardEvent<HTMLInputElement>) => {
                    const paste = (e.clipboardData || window.Clipboard).getData('text');
                    if (!/^\d{2}\/\d{2}$/.test(paste)) {
                      e.preventDefault();
                    }
                  }}
                  {...register("expirationDate", {
                    required: true,
                    pattern: /^(0[1-9]|1[0-2])\/\d{2}$/,
                  })}
                />
                {errors.expirationDate?.type === "pattern" && (
                  <span className="text-error text-xs">
                    La date d'expiration doit être au format MM/AA
                  </span>
                )}
                {errors.expirationDate?.type === "required" && (
                  <span className="text-error text-xs">
                    La date d'expiration est obligatoire
                  </span>
                )}

                {/* CVV */}
                <input
                  type="text"
                  className="input input-bordered input-sm input-primary bg-base-300 flex items-center gap-2 w-full"
                  placeholder="CVV"
                  maxLength={3}
                  disabled={false}
                  onInput={(e: React.FormEvent<HTMLInputElement>) => {
                    const target = e.target as HTMLInputElement;
                    target.value = target.value.replace(/[^0-9]/g, '');
                  }}
                  {...register("cvv", {
                    required: true,
                    pattern: /^[0-9]{3,4}$/,
                  })}
                />
                {errors.cvv?.type === "pattern" && (
                  <span className="text-error text-xs">
                    Le CVV doit être composé de 3 ou 4 chiffres
                  </span>
                )}
                {errors.cvv?.type === "required" && (
                  <span className="text-error text-xs">
                    Le CVV est obligatoire
                  </span>
                )}
              </div>

            </div>

            {/* Location, Country */}
            <div className="flex flex-col gap-2 w-full shadow-sm shadow-secondary px-2 py-2 rounded-lg ">
              <h2 className="text-secondary font-bold"> Informations facturation</h2>
              {/* CardName */}
              <label className="input input-bordered input-sm input-primary bg-base-300 flex items-center gap-2 w-full">
                <FaUser size={12} className="text-primary" />
                <input
                  type="text"
                  className="grow"
                  placeholder="Nom du titulaire de la carte"
                  disabled={false}
                  {...register("cardName", {
                    required: true,
                    pattern: /^[A-Za-z\s]+$/,
                    maxLength: 50,
                  })}
                />
              </label>
              {errors.cardName?.type === "pattern" && (
                <span className="text-error text-xs">
                  Le nom du titulaire doit être composé de lettre uniquement
                </span>
              )}
              {errors.cardName?.type === "required" && (
                <span className="text-error text-xs">
                  Le nom du titulaire est obligatoire
                </span>
              )}
              {errors.cardName?.type === "maxLength" && (
                <span className="text-error text-xs">
                  Le nom du titulaire est trop long
                </span>
              )}


              {/* CardNumber */}
              <label className="input input-bordered input-sm input-primary bg-base-300 flex items-center gap-2 w-full">
                <FaCcVisa size={15} className="text-primary" />
                <input
                  type="text"
                  className="grow"
                  placeholder="Numéro de la carte"
                  disabled={false}
                  {...register("cardNumber", {
                    required: true,
                    pattern: /^[0-9]{16}$/,
                  })}
                />
              </label>
              {errors.cardNumber?.type === "pattern" && (
                <span className="text-error text-xs">
                  Le numéro de la carte doit être composé de 16 chiffres
                </span>
              )}
              {errors.cardNumber?.type === "required" && (
                <span className="text-error text-xs">
                  Le numéro de la carte est obligatoire
                </span>
              )}
            </div>
          </div>
        </form>
      </div >
    </div >
  )
}

export default PaymentForm