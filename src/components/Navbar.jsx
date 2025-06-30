// --> import context theme
import { ThemeContext } from '../context/ThemeContext'
import { useContext } from 'react'

// --> import context cart
import { CartContext } from '../context/CartContext'

export default function Navbar({ setIsOpen }) {

    // --> use context
    const { theme, toggleTheme } = useContext(ThemeContext)
    const { totalProducts } = useContext(CartContext)

    // --> handle open cart
    function openCart() {
        setIsOpen(true)
    }

    // --> moon icon
    const moonIcon = (
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
    )

    const cartIcon = (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 dark:text-stone-300">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
        </svg>
    )

    // --> sun icon
    const sunIcon = (
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
    )

    return (
        <nav className='w-full h-20 border-b border-b-neutral-200 dark:border-b-stone-800 flex justify-between items-center px-4'>
            {/* ---> theme toggle */}
            <button
                onClick={toggleTheme}
                className='cursor-pointer'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 dark:text-stone-300">
                    {theme === 'dark' ? sunIcon : moonIcon}
                </svg>
            </button>

            {/* ---> logotipe */}
            <div>
                <h1 className='tenor-sans uppercase text-2xl dark:text-white'>OpenFashion</h1>
            </div>

            {/* ---> open shopping cart list */}
            <button
                onClick={openCart}
                className='cursor-pointer relative p-2'>
                {cartIcon}

                {/* --> show only if are more than one product in cart */}
                {totalProducts > 0 ?
                    <div className='absolute top-0 right-0 bg-neutral-900 dark:bg-[#C62828] h-5 w-5 rounded-full flex justify-center items-center '>
                        <p className='text-white text-sm'>{totalProducts}</p>
                    </div> :
                    null}

            </button>
        </nav>
    )
}