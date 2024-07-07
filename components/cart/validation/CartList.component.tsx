import { useAppStore } from '@/lib/appStore'
import { ProductCartType } from '@/lib/type';
import { useEffect, useState } from 'react'
import CartItemRecap from './cartItemRecap.component';

type CartItemsAccumulator = Record<number, ProductCartType>;

const CartList = () => {
    const [cartItemsListGrouped, setCartItemsListGrouped] = useState<
        ProductCartType[]
    >([]);
    const { cartItemList, price, setPaymentStep } = useAppStore()

    const groupedCartItems = cartItemList.reduce<CartItemsAccumulator>(
        (acc, item) => {
            const key = item.id;
            if (!acc[key]) {
                acc[key] = { ...item, quantity: 0 };
            }
            acc[key].quantity += 1;
            return acc;
        },
        {}
    );

    useEffect(() => {
        setCartItemsListGrouped(Object.values(groupedCartItems));
    }, [cartItemList]);

    return (
        <div className="flex flex-col gap-3 justify-center items-center">
            <div className="mt-10">
                <h1 className="text-xl font-bold text-accent">Récapitulation du Panier</h1>
            </div>
            <div className="bg-primary rounded-md px-5 py-2">
                {cartItemsListGrouped.map((item) => (
                    <div key={item.id}>
                        <CartItemRecap cartItem={item} />
                        <div className={`divider`}></div>
                    </div>
                ))}
                <div className="flex justify-between items-center max-md:scale-90 text-gray-200 px-3 pb-3">
                    <p> sous-total : <span className=" font-bold">{price} €</span> </p>
                    <button className="btn btn-success" onClick={() => setPaymentStep(1)}>Valider le panier</button>
                </div>
            </div>

        </div>
    )
}

export default CartList