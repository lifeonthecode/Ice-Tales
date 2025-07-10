import { BrowserRouter, Route, Routes } from "react-router"
import Navbar from "./Components/Navbar/Navbar"
import Footer from "./Components/Footer/Footer"
import Home from "./Pages/Home/Home"

function App() {

  return (
    <>
      <BrowserRouter>
        {/* Navbar  */}
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>

        {/* Footer  */}
        <Footer />

      </BrowserRouter>
    </>
  )
}

export default App
