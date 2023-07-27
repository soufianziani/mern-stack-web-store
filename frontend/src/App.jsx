import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Products from "./pages/Products"
import Cart from "./components/cart"
import About from "./pages/About"
import Contact from "./pages/contact"
import Navbar from "./components/navbar"
import Footer from "./pages/Footer"
import { useState } from "react"
import AddProduct from "./redux/AddProduct"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import AdminLogin from "./pages/AdminLogin"
        
function App() {

  const [addedProducts, setAddedProducts] = useState([]);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/products" element={  <Products addedProducts={addedProducts} setAddedProducts={setAddedProducts} />}/>
        <Route path="/cart" element={<Cart addedProducts={addedProducts} setAddedProducts={setAddedProducts} />}/>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/admin" element={<AdminLogin/>} />
        <Route path="/admin-page" element={<AddProduct/>}/>
      </Routes>

      <Footer />
    </>
  )
}

export default App
