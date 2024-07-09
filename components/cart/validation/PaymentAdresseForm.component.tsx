import { useAppStore } from '@/lib/appStore';
import { FormInputsPaymentAdresseType } from '@/lib/type';
import React from 'react'
import { useForm } from 'react-hook-form';
import { FaCity, FaMapPin } from 'react-icons/fa';
import { IoMailSharp } from 'react-icons/io5';

const PaymentAdresseForm = () => {
    const { setPaymentStep } = useAppStore()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormInputsPaymentAdresseType>();

    const onSubmit = (data: FormInputsPaymentAdresseType) => {
        console.log(data);
        setPaymentStep(2);
    }

    return (
        <div className="w-screen flex justify-center flex-col items-center">
            <div>
                <h1 className="text-xl font-bold">Informations facturation</h1>
            </div>
            <div className="w-[800px] h-[800px] relative max-md:w-full mt-5">
                <form onSubmit={handleSubmit(onSubmit)} className="flex justify-center">
                    <div className="w-[80%] max-md:w-[90%] flex flex-col justify-center items-center gap-5">
                        {/* Email, Location */}
                        <div className="flex flex-col gap-2 w-full shadow-sm px-2 py-2 rounded-lg bg-base-100">
                            {/* Email */}
                            <label className="input input-bordered input-sm input-primary bg-base-200 flex items-center gap-2 w-full">
                                <IoMailSharp size={15} className="text-primary" />
                                <input
                                    type="text"
                                    className="grow"
                                    placeholder="Email du titulaire"
                                    disabled={false}
                                    {...register("email", {
                                        required: "L'email est obligatoire",
                                        pattern: {
                                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                            message: "L'email doit être valide",
                                        },
                                        maxLength: {
                                            value: 50,
                                            message: "L'email est trop long",
                                        },
                                    })}
                                />
                            </label>
                            {errors.email && (
                                <span className="text-error text-xs">
                                    {errors.email.message}
                                </span>
                            )}


                            {/* Location */}
                            <label className="input input-bordered input-sm input-primary bg-base-200 flex items-center gap-2 w-full">
                                <FaMapPin size={15} className="text-primary" />
                                <input
                                    type="text"
                                    className="grow"
                                    placeholder="Adresse de facturation"
                                    disabled={false}
                                    {...register("location", {
                                        required: "L'adresse de facturation est obligatoire",
                                        pattern: {
                                            value: /^[a-zA-Z0-9\s,'-]*$/,
                                            message: "L'adresse de facturation doit être composée de lettres, de chiffres, d'espaces, de virgules et de traits d'union uniquement"
                                        },
                                        maxLength: {
                                            value: 50,
                                            message: "L'adresse de facturation est trop longue"
                                        }
                                    })}
                                />
                            </label>
                            {errors.location && (
                                <span className="text-error text-xs">
                                    {errors.location.message}
                                </span>
                            )}
                            {/* City */}
                            <label className="input input-bordered input-sm input-primary bg-base-200 flex items-center gap-2 w-full">
                                <FaCity size={15} className="text-primary" />
                                <input
                                    type="text"
                                    className="grow"
                                    placeholder="Ville"
                                    disabled={false}
                                    {...register("city", {
                                        required: "L'adresse de facturation est obligatoire",
                                        pattern: {
                                            value: /^[a-zA-Z\s-]*$/,
                                            message: "L'adresse de facturation doit être composée de lettres, d'espaces et de traits d'union uniquement"
                                        }
                                    })}
                                />
                            </label>
                            {errors.city && (
                                <span className="text-error text-xs">
                                    {errors.city.message}
                                </span>
                            )}

                            {/* postalCode */}
                            <label className="input input-bordered input-sm input-primary bg-base-200 flex items-center gap-2 w-full">
                                <FaCity size={15} className="text-primary" />
                                <input
                                    type="text"
                                    className="grow"
                                    placeholder="Code postal"
                                    disabled={false}
                                    onInput={(e: React.FormEvent<HTMLInputElement>) => {
                                        const target = e.target as HTMLInputElement;
                                        target.value = target.value.replace(/[^0-9]/g, '');
                                    }}
                                    maxLength={5}
                                    {...register("postalCode", {
                                        required: "L'adresse de facturation est obligatoire",
                                        pattern: {
                                            value: /^[0-9]*$/,
                                            message: "Le code postal doit être commposé de chiffres uniquement"
                                        },
                                        maxLength: {
                                            value: 5,
                                            message: "Le code postal est trop long"
                                        }
                                    })}
                                />
                            </label>
                            {errors.postalCode && (
                                <span className="text-error text-xs">
                                    {errors.postalCode.message}
                                </span>
                            )}
                        </div>
                        <div className="flex justify-between items-center w-full">
                            <div className="btn btn-primary w-[200px]" onClick={() => setPaymentStep(0)}>Retour</div>
                            <button className="btn btn-primary w-[200px]">Valider</button>
                        </div>
                    </div>
                </form>
            </div >
        </div >
    )
}

export default PaymentAdresseForm