import { BrowserRouter, Route, Routes } from "react-router"
import Navbar from "./Components/Navbar/Navbar"
import Footer from "./Components/Footer/Footer"
import Home from "./Pages/Home/Home"
import About from "./Pages/About/About"
import Shop from "./Pages/Shop/Shop"

function App() {

  return (
    <>
      <BrowserRouter>
        {/* Navbar  */}
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/shop" element={<Shop/>} />
        </Routes>

        {/* Footer  */}
        <Footer />

      </BrowserRouter>
    </>
  )
}

export default App
