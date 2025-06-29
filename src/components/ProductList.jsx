import products from '../db/products'
import ProductItem from './ProductItem'

// --> import context
import { CartContext } from '../context/CartContext'
import { useContext } from 'react'

export default function ProductList() {

    const { addTocart } = useContext(CartContext)

    const productListMapped = products.map((item, index) => {
        const tag = index < 2 ? 'NEW' : null;

        return (
            <ProductItem
                key={item.id}
                name={item.name}
                price={item.price}
                url={item.url}
                tag={tag}
                handleClick={() => addTocart(item)}
            />
        )
    })

    return (
        <>
            {/* ---> product list */}
            <section className='w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 px-4 py-10'>
                {productListMapped}
            </section>
        </>
    )
} 