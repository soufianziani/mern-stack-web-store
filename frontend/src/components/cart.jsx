import { useSelector, useDispatch } from "react-redux"
import { removeProduct, incrementQnt, decrementQnt, emptyCart } from "../redux/actions"
import { useEffect, useState } from "react"

const Cart = ({ addedProducts, setAddedProducts }) => {

  
    const cart = useSelector(state => state.cart)
    const [total, setTotal] = useState(0)
    const dispatch = useDispatch()

    useEffect(() => {
        setTotal(
            cart.map((product) => product.price * product.quantity).reduce((total, price) => total + parseFloat(price), 0)
        )
    }, [cart])

    useEffect(() => {
        const addedProductIds = JSON.parse(localStorage.getItem('addedProductIds') || '[]');
        setAddedProducts(addedProductIds);
    }, [cart]);

    const handleIncrement = (product) => {
        dispatch(incrementQnt(product._id))
        setTotal(prev => prev + parseFloat(product.price))
    }

    const handleDecrement= (product) => {
        dispatch(decrementQnt((product._id)))
        setTotal(prev => prev - parseFloat(product.price))
    }

    const handleRemoveProduct = (id) => {
        dispatch(removeProduct(id))
        const addedProductIds = JSON.parse(localStorage.getItem('addedProductIds') || '[]');
        const updatedAddedProducts = addedProductIds.filter(productId => productId !== id);
        localStorage.setItem('addedProductIds', JSON.stringify(updatedAddedProducts));
        setAddedProducts(updatedAddedProducts);
    }

    const handleEmptyCart = () => {
        dispatch(emptyCart())
        localStorage.removeItem('addedProductIds');
        setAddedProducts([]);
    }

    return (
        <div className=" text-gray-800 min-h-screen">
            <div className="container mx-auto py-10 px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold mb-5">Cart</h1>
                <button onClick={handleEmptyCart} className="bg-red-500 text-white py-2 px-4 rounded-md mb-5">Empty Cart</button>
                {cart.length === 0 && <p>Your cart is currently empty!</p>}
                {cart.length > 0 &&
                    <>
                        
                        {cart.map((product) =>
                            <div key={product._id} className="border mb-5 p-4 flex items-center justify-between bg-gray-100">
                                <div className="flex items-center">
                                    <img src={product.image} alt={product.title} className="h-10 w-10 mr-4" style={{borderRadius:'3px',width:'70px' , height:'70'}}/>
                                    <div>
                                        <h2 className="text-lg font-bold">{product.title}</h2>
                                        <p className="text-gray-400">${product.price.toFixed(2)} x {product.quantity}</p>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <button onClick={() => handleRemoveProduct(product._id)} className="bg-red-500 text-white py-1 px-2 rounded-md mr-3">Remove</button>
                                    <div>
                                        <button onClick={() => handleDecrement(product)} className="bg-blue-200 text-gray-700 py-1 px-2 rounded-md mr-3">-</button>
                                        <span className="text-xl font-semibold">{product.quantity}</span>
                                        <button onClick={() => handleIncrement(product)} className="bg-blue-200 text-gray-700 py-1 px-2 rounded-md ml-3">+</button>
                                    </div>
                                </div>
                            </div>
                        )}
                    <p className="text-xl font-semibold mb-3">Total: ${total.toFixed(2)}</p>
                    </>
                }
            </div>
        </div>
    )
}

export default Cart;
