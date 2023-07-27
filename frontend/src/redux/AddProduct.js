import React, { useEffect, useRef, useState } from 'react'
import axios from "axios";
import { useDispatch } from 'react-redux';
import { removeProduct } from "./actions"


function AddProduct({ product }) {
  const [products, setProducts] = useState([])
  const [allFieldsFilled, setAllFieldsFilled] = useState(false)
  const dispatch = useDispatch()
  useEffect(() => {
    const products = async () => {
      await axios.get("/api/products")
        .then(response => setProducts(response.data))
    }
    products()
  }, [])


  const titleRef = useRef('')
  const imageRef = useRef('')
  const priceRef = useRef(0)

  const handleInputChange = () => {
    // Check if all fields have a value
    if (titleRef.current.value && imageRef.current.value && priceRef.current.value) {
      setAllFieldsFilled(true)
    } else {
      setAllFieldsFilled(false)
    }
  }

  const ajouter = () => {
    const newProduct = {
      title: titleRef.current.value,
      image: imageRef.current.value,
      price: parseFloat(priceRef.current.value),
    }
    axios.post("/api/products", newProduct)
      .then(response => {
        setProducts([...products, response.data])
        // Clear the input fields after successfully adding the product
        titleRef.current.value = ''
        imageRef.current.value = ''
        priceRef.current.value = 0
        // Reset the form state
        setAllFieldsFilled(false)
        // Display success message
        alert("Product added successfully!")
      })
  }
  const handleRemoveProduct = (id) => {
    axios.delete("/api/products" + product._id).then(response => {
      dispatch(removeProduct(id))
    })
  }


  return (
    <div className=" text-gray-900 min-h-screen bg-gray-100" style={{height:"10000px"}}>
      <div className="container mx-auto py-10">
        <h1 className="text-3xl font-bold text-center mb-10">Add a Product</h1>
        <div className="flex flex-col items-center space-y-4">




          <input ref={titleRef} type="text" placeholder="Title" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={handleInputChange} />
          <input ref={imageRef} type="text" placeholder="Image URL" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={handleInputChange} />
          <input ref={priceRef} type="number" step="0.01" placeholder="Price" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={handleInputChange} />
          <button onClick={ajouter} disabled={!allFieldsFilled} className={`bg-gray-500 px-4 py-2 rounded-md ${allFieldsFilled ? 'text-white' : 'text-gray-400 cursor-not-allowed'}`}>Ajouter</button>
        </div>
      </div>


    </div>
  )
}

export default AddProduct
