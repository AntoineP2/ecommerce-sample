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
            <div>
                <h1 className="text-xl font-bold">Récapitulation du Panier</h1>
            </div>
            <div className="bg-base-100 rounded-md px-5 py-2">
                {cartItemsListGrouped.map((item) => (
                    <div key={item.id}>
                        <CartItemRecap cartItem={item} />
                        <div className={`divider`}></div>
                    </div>
                ))}
                <div className="flex justify-between items-center max-md:scale-90 px-3 pb-3">
                    <p> sous-total : <span className=" font-bold">{price} €</span> <span className="text-sm">TTC</span> </p>
                    <button className="btn btn-primary" onClick={() => setPaymentStep(1)}>Valider le panier</button>
                </div>
            </div>

        </div>
    )
}

export default CartList