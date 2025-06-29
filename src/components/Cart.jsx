import ProductItemCart from "./ProductItemCart"
import EmptyCart from "./EmptyCart"

// --> import context
import { CartContext } from "../context/CartContext"
import { useContext } from "react"

export default function Cart({ setIsOpen }) {
    // --> use context
    const { cart, totalPrice, cleanCart } = useContext(CartContext)

    // --> handle close cart
    function handleCloseCart() {
        setIsOpen(false)
    }

    // --> mapped over item cart component
    const productListCartMapped = cart.map(item => (
        <ProductItemCart
            key={item.id}
            name={item.name}
            price={item.price}
            url={item.url}
            id={item.id}
            quantity={item.quantity}
        />
    ))

    return (
        <div className="text-left absolute right-0 top-0 min-h-screen w-full md:w-1/2 xl:w-1/4 bg-white dark:bg-[#1A1A1A] shadow-2xl p-4 z-50 flex flex-col">

            {/* top controls */}
            <div className="flex justify-between items-center mb-3">
                <h1 className="tenor-sans text-base dark:text-white uppercase">Cart</h1>

                <div className="flex gap-2">
                    {cart.length > 0 && (
                        <button
                            onClick={cleanCart}
                            title="Empty Cart"
                            className="text-xs px-2 py-1 bg-stone-950 text-white hover:bg-stone-600 tenor-sans transition-colors"
                        >
                            Empty
                        </button>
                    )}
                    <button
                        onClick={handleCloseCart}
                        className="text-xs px-2 py-1 bg-stone-950 text-white hover:bg-stone-600 tenor-sans transition-colors"
                    >
                        Close
                    </button>
                </div>
            </div>

            {/* cart items */}
            <div
                className={`flex-1 overflow-y-auto pr-1 ${cart.length === 0 ? "flex items-center justify-center" : "space-y-2"
                    }`}
            >
                {cart.length > 0 ? productListCartMapped : <EmptyCart />}
            </div>

            {/* fixed checkout section */}
            <div className="mt-4 pt-2 border-t border-neutral-200 dark:border-[#2F2F2F]">
                <div className="flex justify-between text-sm dark:text-white mb-1">
                    <span className="tenor-sans uppercase">Subtotal</span>
                    <span className="tenor-sans">${totalPrice}</span>
                </div>
                <div className="flex justify-between text-sm dark:text-white">
                    <span className="tenor-sans uppercase">Total</span>
                    <span className="tenor-sans">${totalPrice}</span>
                </div>

                <button className="w-full mt-3 py-2 text-sm bg-[#C62828] text-white uppercase tenor-sans hover:bg-[#c62828c5] transition-colors">
                    Checkout
                </button>
            </div>
        </div>
    )
}