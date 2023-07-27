import { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import useSignup from "../hooks/useSignup"
import useSetState from "../hooks/useSetState"
import useShowPass from "../hooks/useShowPass"

const Signup = () => {
    const userLogged = JSON.parse(localStorage.getItem("user"))
    const navigate = useNavigate()

    const [user, setUser] = useState({})
    const { showPass, type, class1, class2 } = useShowPass()
    const { signup, error } = useSignup()
    const  setState  = useSetState()

    useEffect(()=>{
        if(userLogged){
            navigate('/')
        }
    },[])

    const handleClick = () => {
        showPass()
    }

    const handleChange = (e) => {
      setState(e, user, setUser)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await signup(user)
    }

    return (
        
 <main className="w-full h-screen flex flex-col items-center justify-center px-4">
            <div className="max-w-sm w-full text-gray-600">
                <div className="text-center">
                    <img src="logo.png" width={150} className="mx-auto" />
                    <div className="mt-5 space-y-2">
                        <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">Create your Accounte</h3>
                        <p className="">Have an account with us already? <Link to="/login" className="font-medium text-indigo-600 hover:text-indigo-500">Login</Link></p>
                    </div>
                </div>
                <form
                    onSubmit={handleSubmit}
                    className="mt-8 space-y-5"
                >
                    <div>
                        <label className="font-medium">
                            name
                        </label>
                        <input
                            type="text"
                            required
                            name="email"
                            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                            
                        />
                    </div>
                    <div>
                        <label className="font-medium">
                            Email
                        </label>
                        <input
                            type="text"
                            required
                            name="email"
                            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label className="font-medium">
                            Password
                        </label>
                        <div className="relative">
                            <input
                                type={type}
                                required
                                name="password"
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                                placeholder="**********"
                                onChange={handleChange}
                            />
                            <button
                                type="button"
                                onClick={showPass}
                                className="absolute inset-y-0 right-0 pr-3 pt-2 flex items-center text-sm leading-5 text-gray-700 hover:text-indigo-600 focus:outline-none"
                            >
                                {class1 === 'hidden' ? (
                                    <p>Show</p>
                                ) : (
                                    <p>Hide</p>

                                )}
                            </button>
                        </div>
                    </div>
                    <div className="mt-6">
                        <button
                            type="submit"
                            className="w-full px-4 py-2 rounded-lg shadow-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                          Signup
                        </button>
                    </div>
                </form>
            </div>
             {error && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-10" role="alert">
                <span className="block sm:inline">{error}</span>
            </div>}
        </main> 
    )
}

export default Signup













// <div className="w-full grid content-center justify-center mt-20">
        //     <div className="w-full rounded-md bg-gradient-to-r from-gray-800 via-white to-black p-1">

        //         <div className="h-full w-full items-center justify-center bg-white back py-10 px-20">
        //             <p className="text-4xl mb-10">Signup</p>
        //             <form className="w-full max-w-lg" onSubmit={handleSubmit}>
                      
                            
        //                 <div className="flex flex-wrap -mx-3 mb-6">
        //                     <div className="w-full px-3">
        //                         <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
        //                             email
        //                         </label>
        //                         <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="email" type="text" placeholder="Email" onChange={handleChange} />
        //                     </div>
        //                 </div>
        //                 <div className="flex flex-wrap -mx-3 mb-6">
        //                     <div className="w-full px-3">
        //                         <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
        //                             password
        //                         </label>
        //                         <div className="relative">
        //                             <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="password" type={type} placeholder="**********" onChange={handleChange} />
        //                             <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
        //                                 <svg fill="none" onClick={handleClick}
        //                                     className={`${class1} h-6 text-gray-700`} xmlns="http://www.w3.org/2000/svg"
        //                                     viewBox="0 0 576 512">
        //                                     <path fill="currentColor"
        //                                         d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z">
        //                                     </path>
        //                                 </svg>
        //                                 <svg fill="none" onClick={handleClick}
        //                                     className={`${class2} h-6 text-gray-700`} xmlns="http://www.w3.org/2000/svg"
        //                                     viewBox="0 0 640 512">
        //                                     <path fill="currentColor"
        //                                         d="M320 400c-75.85 0-137.25-58.71-142.9-133.11L72.2 185.82c-13.79 17.3-26.48 35.59-36.72 55.59a32.35 32.35 0 0 0 0 29.19C89.71 376.41 197.07 448 320 448c26.91 0 52.87-4 77.89-10.46L346 397.39a144.13 144.13 0 0 1-26 2.61zm313.82 58.1l-110.55-85.44a331.25 331.25 0 0 0 81.25-102.07 32.35 32.35 0 0 0 0-29.19C550.29 135.59 442.93 64 320 64a308.15 308.15 0 0 0-147.32 37.7L45.46 3.37A16 16 0 0 0 23 6.18L3.37 31.45A16 16 0 0 0 6.18 53.9l588.36 454.73a16 16 0 0 0 22.46-2.81l19.64-25.27a16 16 0 0 0-2.82-22.45zm-183.72-142l-39.3-30.38A94.75 94.75 0 0 0 416 256a94.76 94.76 0 0 0-121.31-92.21A47.65 47.65 0 0 1 304 192a46.64 46.64 0 0 1-1.54 10l-73.61-56.89A142.31 142.31 0 0 1 320 112a143.92 143.92 0 0 1 144 144c0 21.63-5.29 41.79-13.9 60.11z">
        //                                     </path>
        //                                 </svg>
        //                             </div>
        //                         </div>
        //                     </div>
        //                 </div>


        //                 <div className="flex items-center justify-between">
        //                     <div>
        //                         <span>Have an account with us already? </span><Link to="/login" className="text-s bold italic underline text-gray-800 text-xl">Simply log in.</Link>
        //                     </div>
        //                     <button type="submit" className="bg-gray-800 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ms-32">
        //                         Signup
        //                     </button>

        //                 </div>
        //             </form>
        //         </div>
        //     </div>
        //     {error && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-10" role="alert">
        //         <span className="block sm:inline">{error}</span>
        //     </div>}
        // </div>