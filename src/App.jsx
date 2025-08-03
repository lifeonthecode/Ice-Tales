import { BrowserRouter, Route, Routes } from "react-router"
import Navbar from "./Components/Navbar/Navbar"
import Footer from "./Components/Footer/Footer"
import Home from "./Pages/Home/Home"
import About from "./Pages/About/About"
import Shop from "./Pages/Shop/Shop"
import ProductDetails from "./Pages/ProductDetails/ProductDetails"
import ShoppingCart from "./Components/ShoppingCart/ShoppingCart"
import Checkout from "./Pages/Checkout/Checkout"

function App() {

  return (
    <>
      <BrowserRouter>
        {/* Navbar  */}
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop/>} />
          <Route path="/shop/product-details" element={<ProductDetails/>} />
          <Route path="/cart" element={<ShoppingCart/>} />
          <Route path="/cart/checkout" element={<Checkout/>} />
        </Routes>

        {/* Footer  */}
        <Footer />

      </BrowserRouter>
    </>
  )
}

export default App
