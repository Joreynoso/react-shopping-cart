// --> use context
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

export default function ProductItemCart({ name, price, url, id, quantity }) {

    // --> use context
    const { removerFromCart, increaseQuantity, decreaseQuantity } = useContext(CartContext)

    // --> trash icon
    const trashIcon = (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
        </svg>
    )

    return (
        <div className="text-left relative flex items-center gap-4 px-2 py-3 border-b border-b-stone-200 dark:border-[#2F2F2F] 
                hover:bg-gray-100 dark:hover:bg-[#333333] transition-colors duration-200 cursor-pointer">

            {/* product image */}
            <div className="w-16 h-20 overflow-hidden bg-[#F2F2F2] dark:bg-[#262626] flex justify-center items-center">
                <img
                    src={url}
                    alt={name}
                    className="w-[70%]"
                />
            </div>

            {/* product details */}
            <div className="flex-1">
                <h3 className="text-sm font-semibold dark:text-white uppercase tenor-sans">{name}</h3>
                <p className="text-sm text-neutral-600 dark:text-stone-300">${price * quantity}</p>

                {/* quantity controls */}
                <div className="flex items-center gap-3 mt-2">
                    <button
                        onClick={() => decreaseQuantity(id)}
                        disabled={quantity <= 1}
                        className="cursor-pointer p-1 px-2 text-sm bg-neutral-200 dark:bg-[#2F2F2F] text-black border border-stone-300 dark:border-stone-700 dark:text-white/70 hover:bg-[#8B8C8D] dark:hover:bg-stone-500">
                        −
                    </button>

                    <span className="w-6 text-center text-sm font-medium dark:text-white">
                        {quantity}
                    </span>

                    <button
                        onClick={() => increaseQuantity(id)}
                        className="cursor-pointer p-1 px-2 text-sm bg-neutral-200 dark:bg-[#2F2F2F] text-black border border-stone-300 dark:border-stone-700 dark:text-white/70 hover:bg-[#8B8C8D] dark:hover:bg-stone-500">
                        +
                    </button>
                </div>
            </div>

            {/* remove button */}
            <button
                onClick={() => removerFromCart(id)}
                className="absolute top-2 right-2 text-neutral-500 hover:text-red-600 dark:text-stone-400 dark:hover:text-red-500 transition cursor-pointer">
                {trashIcon}
            </button>
        </div>
    )
}

