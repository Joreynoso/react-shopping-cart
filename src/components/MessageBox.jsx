// --> import motion
import { motion } from 'framer-motion'

// --> import context
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

export default function MessageBox() {

    // --> use context
    const { message, handleCloseMessage } = useContext(CartContext)

    // --> avoid to re-render if are not messages
    if(!message) return null

    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <div className='w-full mx-auto px-4 my-4'>
                    <div className='relative w-full h-16 bg-green-600 z-30 py-4 px-4 text-center flex justify-center items-center'>
                        <p className='tenor-sans uppercase text-sm text-white'>{ message }</p>

                        <button
                            onClick={handleCloseMessage}
                            className='absolute right-4 text-white cursor-pointer h-3 w-3 bg-black flex justify-center items-center p-4'>
                            x
                        </button>
                    </div>
                </div>
            </motion.div>
        </>
    )
}