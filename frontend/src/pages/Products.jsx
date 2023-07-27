import { useDispatch } from "react-redux"
import { addProduct } from "../redux/actions"
import { useEffect, useState } from "react"
import axios from "axios"

const Products = ({ addedProducts, setAddedProducts }) => {

  const [products, setProducts] = useState({})
  const dispatch = useDispatch()


  useEffect(() => {
    axios.get("/api/products")
      .then(response => setProducts(response.data))
  }, [])

  useEffect(() => {
    const addedProductIds = JSON.parse(localStorage.getItem('addedProductIds') || '[]');
    setAddedProducts(addedProductIds);
  }, []);

  const handleAddProduct = (_id, title, image, price ) => {
    dispatch(addProduct(_id, title,image, price ))
    setAddedProducts([...addedProducts, _id])
    localStorage.setItem('addedProductIds', JSON.stringify([...addedProducts, _id]));
  }



  return (



    <div className="bg-white ">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-5xl font-bold text-center mb-10 text-gray-900">Products</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products[0] && products.map((p) =>
            <a  class="group relative block overflow-hidden" key={p._id}>
              <img src={p.image} alt={p.title} class="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72" />
              <div class="relative border border-gray-100 bg-white p-6">
                <span class="whitespace-nowrap bg-blue-200 px-3 py-1.5 text-xs font-medium"> New </span>

                <h3 class="mt-auto text-lg font-medium text-gray-900">{p.title}</h3>

                <p class="mt-1.5 text-sm text-gray-700">${p.price}</p>

                <form class="mt-4">
                  {!addedProducts.includes(p._id) ? (
                    <button onClick={() => handleAddProduct(p._id, p.title, p.price ,p.image)} class="block w-full rounded bg-blue-600 p-4 text-white font-medium transition hover:scale-105" >
                      Add to cart
                    </button>
                  ) : (
                    <button class="block w-full rounded bg-gray-400 text-white p-4 text-sm font-medium transition " disabled >
                      Added to cart
                    </button>
                  )}
  
                </form>
              </div>
            </a>
          )}
        </div>
      </div>
    </div>


    /*
    
     */








  )
}

export default Products;
