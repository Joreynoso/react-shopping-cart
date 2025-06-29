import { createContext, useState, useEffect } from "react"

export const CartContext = createContext(null)

export default function CartProvider({ children }) {

    const [cart, setCart] = useState(() => {
        const saveCart = localStorage.getItem('cart')
        return saveCart ? JSON.parse(saveCart) : [] // --> if saveCart exist...
    })

    // --> handle message
    const [message, setMessage] = useState(null)

    // --> handleMessageShow
    function handleCloseMessage() {
        setMessage(null)
    }

    // --> messageShown // by dafault 'product added to cart'
    function handleShownMessage(text = 'Product added to cart.') {
        setMessage(text)

        setTimeout(() => {
            setMessage(null)
        },8000);
    }

    // --> add to cart function
    function addTocart(product) {
        setCart(prevCart => {
            const exists = prevCart.find(item => item.id === product.id)

            if (exists) {
                // --> true side
                handleShownMessage("Product is already in your cart.");
                return prevCart;
            } else {
                // --> false side
                const newProduct = { ...product, quantity: 1 };
                handleShownMessage("Product added to cart.");
                return [...prevCart, newProduct];
            }
        })
    }

    // --> remove product from cart
    function removerFromCart(id) {
        setCart(prevCart => prevCart.filter(item => item.id !== id))
    }

    // --> update quantity
    function increaseQuantity(id) {
        setCart(prevCart =>
            prevCart.map((product) =>
                product.id === id ? {
                    ...product, quantity: product.quantity + 1
                } :
                    product
            )
        )
    }

    // --> update quantity
    function decreaseQuantity(id) {
        setCart(prevCart =>
            prevCart.map((product) =>
                product.id === id && product.quantity > 1 ? {
                    ...product, quantity: product.quantity - 1
                } :
                    product
            )
        )
    }

    // --> remove al products
    function cleanCart() {
        setCart([])
    }

    // --> calc total price
    const totalPrice = cart.reduce((acc, product) => {
        return acc + product.price * product.quantity
    }, 0)

    // --> calt items cart quantity
    const totalProducts = cart.reduce((acc, item) => {
        return acc + item.quantity
    }, 0);

    // --> save cart to localStorage
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])


    return (
        <CartContext.Provider
            value={{
                cart,
                addTocart,
                removerFromCart,
                increaseQuantity,
                decreaseQuantity,
                totalPrice,
                totalProducts,
                cleanCart,
                message,
                handleCloseMessage,
                handleShownMessage
            }}>

            {children}
        </CartContext.Provider>
    )
}