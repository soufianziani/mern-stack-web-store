import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const useLogin = () => {
    const [error, setError] = useState(null)
    const navigate = useNavigate()

    const login = async (user) => {
        setError(null)

        try {
            const response = await axios.post('/api/user/login', user)
            localStorage.setItem('user', JSON.stringify(response.data))
            navigate('/')
        } catch (error) {
            if (error.response) {
                const errorMessage = error.response.data.error
                setError(errorMessage)
            } else {
                setError('An error has occurred. Please try again later.')
            }
        }
    }

    return {login, error}
}

export default useLogin