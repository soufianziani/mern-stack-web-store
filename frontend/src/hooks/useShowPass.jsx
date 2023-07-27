import { useState } from "react";

const useShowPass = () => {
    const [type, setType] = useState('password')
    const [class1, setClass1] = useState('hidden')
    const [class2, setClass2] = useState('block')

    const showPass = () => {
        type == 'password' ? setType('text') : setType('password')
        class1 == 'block' ? setClass1('hidden') : setClass1('block')
        class2 == 'block' ? setClass2('hidden') : setClass2('block')
    }

    return {showPass, type, class1, class2}
}
export default useShowPass