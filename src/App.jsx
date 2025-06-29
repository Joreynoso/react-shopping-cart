import './App.css'
import { useState } from 'react'

// --> import components
import Footer from './components/Footer.jsx'
import Navbar from './components/Navbar.jsx'
import Discount from './components/Discount.jsx'
import ProductList from './components/ProductList.jsx'
import Cart from './components/Cart.jsx'
import MessageBox from './components/MessageBox.jsx'

function App() {

  // --> handle open cart 
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* wrapper div */}
      <div className='relative wrapper min-h-screen bg-white dark:bg-[#1A1A1A]'>
        <Discount />

        {isOpen == true ?
          <Cart setIsOpen={setIsOpen} /> : null}

        <Navbar setIsOpen={setIsOpen} />
        <MessageBox />

        <ProductList />
        <Footer />

      </div>
    </>
  )
}

export default App
