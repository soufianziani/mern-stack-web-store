import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const useSignUp = () => {
    const [error, setError] = useState(null)
    const navigate = useNavigate()

    const signup = async (user) => {
        setError(null)

        try {
            const response = await axios.post('api/user/signup', user)
            navigate('/login')
        } catch (error) {
            if (error.response) {
                const errorMessage = error.response.data.error
                setError(errorMessage)
            } else {
                setError('An error has occurred. Please try again later.')
            }
        }
    }

    return {signup, error}
}

export default useSignUp