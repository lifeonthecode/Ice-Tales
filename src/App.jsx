import { BrowserRouter, Route, Routes } from "react-router"
import Navbar from "./Components/Navbar/Navbar"
import Footer from "./Components/Footer/Footer"
import Home from "./Pages/Home/Home"
import About from "./Pages/About/About"
import Shop from "./Pages/Shop/Shop"
import ProductDetails from "./Pages/ProductDetails/ProductDetails"
import ShoppingCart from "./Components/ShoppingCart/ShoppingCart"
import Checkout from "./Pages/Checkout/Checkout"
import Blog from "./Pages/Blog/Blog"
import Faq from "./Pages/Faq/Faq"
import ContactUs from "./Pages/ContactUs/ContactUs"
import NotFound from "./Pages/NotFound/NotFound"

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
          <Route path="/blog" element={<Blog/>} />
          <Route path="/faqs" element={<Faq/>} />
          <Route path="/contact" element={<ContactUs/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>

        {/* Footer  */}
        <Footer />

      </BrowserRouter>
    </>
  )
}

export default App
