// --> import context message
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

export default function ProductItem({ name, price, url, handleClick, tag }) {

    // --> use context message
    const { handleShownMessage } = useContext(CartContext)

    return (
        <div
            className='
                product-item relative text-center
                transition-transform duration-300 ease-in-out
                bg-white dark:bg-[#1A1A1A] p-2
            '
        >
            {/* add float button */}
            <button
                onClick={() => {
                    handleClick()
                    handleShownMessage()
                }}
                className='
                absolute top-5 right-5 z-20 h-10 w-10 rounded-full bg-[#1A1A1A] flex justify-center items-center tenor-sans p-2 text-white cursor-pointer
                hover:bg-[#C62828] transition-colors duration-200'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                </svg>
            </button>

            {/* new tag */}
            {tag !== null ? <div className='w-auto p-1 absolute top-2 left-2 bg-[#1A1A1A] z-30'>
                <p className='tenor-sans uppercase text-white text-xs'>{tag}</p>
            </div> : null}

            {/* image container */}
            <div className="aspect-[3/4] relative bg-[#F2F2F2] dark:bg-[#262626] flex justify-center items-center mb-2 overflow-hidden group">
                <img
                    src={url}
                    alt={name}
                    className="object-cover h-full transition-transform duration-300 group-hover:scale-110 pointer-events-none"
                />
            </div>

            {/* product info */}
            <div className='info flex flex-col'>
                <h3 className='tenor-sans text-lg dark:text-stone-300'>{name}</h3>
                <span className='text-lg uppercase tenor-sans text-[#8B8C8D]'>${price}</span>
            </div>
        </div>
    )
}
