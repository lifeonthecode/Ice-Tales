import { BrowserRouter, Route, Routes } from "react-router"
import Navbar from "./Components/Navbar/Navbar"
import Footer from "./Components/Footer/Footer"
import Home from "./Pages/Home/Home"
import About from "./Pages/About/About"

function App() {

  return (
    <>
      <BrowserRouter>
        {/* Navbar  */}
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
        </Routes>

        {/* Footer  */}
        <Footer />

      </BrowserRouter>
    </>
  )
}

export default App
