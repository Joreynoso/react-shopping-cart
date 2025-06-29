
export default function ProductItem({ name, price, url, handleClick, tag, quantity }) {

    const cartIcon = (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 dark:text-stone-300">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
        </svg>
    )

    return (
        <div
            className='
                product-item relative text-center
                transition-transform duration-300 ease-in-out
                bg-white dark:bg-[#1A1A1A] p-2
            '
        >
            {/* Contenedor con posición relativa */}
            <div className="relative">
                {/* Botón flotante con posición absoluta */}
                <button
                    onClick={handleClick}
                    className="
                    absolute top-5 right-5 z-20 h-10 w-10 rounded-full bg-[#1A1A1A]
                    flex justify-center items-center tenor-sans p-2 text-white cursor-pointer
                    hover:bg-[#C62828] transition-colors duration-200
                "
                >
                    {cartIcon}
                </button>

                {/* Badge solo si hay productos */}
                {quantity > 0 ? (
                    <div className="absolute top-3 right-3 h-5 min-w-[20px] px-1 bg-red-600 rounded-full flex items-center justify-center z-30">
                        <span className="text-white text-xs font-bold leading-none">{quantity}</span>
                    </div>
                ) : null}
            </div>


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
