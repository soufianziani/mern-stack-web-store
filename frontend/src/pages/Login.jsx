import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import useSetState from "../hooks/useSetState"
import useLogin from "../hooks/useLogin"
import useShowPass from "../hooks/useShowPass"

const Login = () => {
    const userLogged = JSON.parse(localStorage.getItem("user"))
    const navigate = useNavigate()
    const setState = useSetState()
    const [user, setUser] = useState({})
    const { showPass, type, class1, class2 } = useShowPass()
    const { login, error } = useLogin()

    if (userLogged) {
        navigate('/')
    }

    const handleChange = (e) => {
        setState(e, user, setUser)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        login(user)
    }

    return (
        <main className="w-full h-screen flex flex-col items-center justify-center px-4">
            <div className="max-w-sm w-full text-gray-600">
                <div className="text-center">
                    <img src="logo.png" width={150} className="mx-auto" />
                    <div className="mt-5 space-y-2">
                        <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">Log in to your account</h3>
                        <p className="">Don't have an account? <Link to="/signup" className="font-medium text-indigo-600 hover:text-indigo-500">Sign up</Link></p>
                    </div>
                </div>
                <form
                    onSubmit={handleSubmit}
                    className="mt-8 space-y-5"
                >
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
                    {error && <p className="text-red-500">{error}</p>}
                    <div className="mt-6">
                        <button
                            type="submit"
                            className="w-full px-4 py-2 rounded-lg shadow-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Log in
                        </button>
                    </div>
                </form>
            </div>
        </main>
    )
}

export default Login

