import { createContext, useState, useEffect } from "react"

export const CartContext = createContext(null)

export default function CartProvider({ children }) {

    const [cart, setCart] = useState(() => {
        const saveCart = localStorage.getItem('cart')
        return saveCart ? JSON.parse(saveCart) : [] // --> if saveCart exist...
    })

    // --> add to cart || update quantity
    function addTocart(product) {
        setCart(prevCart => {
            const exists = prevCart.find(item => item.id === product.id)

            if (exists) {
                // Si ya existe, mapeamos el carrito para actualizar solo la cantidad del producto
                return prevCart.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                )
            } else {
                // Si no existe, agregamos el producto con cantidad 1
                return [...prevCart, { ...product, quantity: 1 }]
            }
        })
    }

    // --> remove product from cart
    function removerFromCart(id) {
        setCart(prevCart => prevCart.filter(item => item.id !== id))
    }

    // --> increase quantity
    function increaseQuantity(id) {
        setCart(prevCart =>
            prevCart.map(product =>
                product.id === id
                    ? { ...product, quantity: product.quantity + 1 }
                    : product
            )
        )
    }

    // --> decrease quantity
    function decreaseQuantity(id) {
        setCart(prevCart => {
            const updateCart = prevCart.map(product =>
                (product.id === id && product.quantity > 0)
                    ? { ...product, quantity: product.quantity - 1 } :
                    product
            )

            return updateCart.filter(product => product.quantity > 0)
        })
    }

    // --> remove al products
    function cleanCart() {
        setCart([])
    }

    // --> calc total price
    const totalPrice = cart.reduce((acc, product) => {
        return acc + product.price * product.quantity
    }, 0)

    // --> calc items cart quantity
    const totalProducts = cart.reduce((acc, item) => {
        return acc + item.quantity
    }, 0)

    // --> save cart to localStorage
    useEffect(() => {
        console.log('use cart effect running...')
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])

    // --> calc discount
    function calcDiscount() {
        console.log('discount applies!')
        return "10% OFF"
    }

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
                calcDiscount
            }}>

            {children}
        </CartContext.Provider>
    )
}