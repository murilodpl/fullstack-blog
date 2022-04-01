import { useState } from "react"
import api from "../services/api"

export default function Register(props) {
    // Variable
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        name: ""
    })
    const [check, setCheck] = useState({
        email: false,
        password: false,
        isDuplicate: false,
        err: false,
        isLoading: false,
        success: false
    })

    // Function
    function handleChange(e) {
        setCheck({
            email: false,
            password: false,
            isDuplicate: false,
            err: false,
            isLoading: false
        })

        let { name, value } = e.target

        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }))
    }

    function registerUser(e) {
        e.preventDefault()

        // If filled
        if (formData.email == "") {
            return setCheck(prevCheck => ({ ...prevCheck, email: true }))
        } else {
            setCheck(prevCheck => ({ ...prevCheck, email: false }))
        }

        if (formData.name == "") {
            return setCheck(prevCheck => ({ ...prevCheck, name: true }))
        } else {
            setCheck(prevCheck => ({ ...prevCheck, name: false }))
        }

        if (formData.password == "") {
            return setCheck(prevCheck => ({ ...prevCheck, password: true }))
        } else {
            setCheck(prevCheck => ({ ...prevCheck, password: false }))
        }

        setCheck(prevCheck => ({ ...prevCheck, isLoading: true, err: false }))

        api.post("/users/register", formData)
            .then(res => {
                if (res.data.status === 201) {
                    // console.log(res.data)
                    setFormData({ email: "", password: "", name: "" })
                    setCheck(prevCheck => ({ ...prevCheck, isLoading: false, success: true }))

                    setTimeout(() => {
                        props.handleTransition()
                    }, 1000)
                } else {
                    setCheck(prevCheck => ({ ...prevCheck, isLoading: false, isDuplicate: true, success: false }))
                }
            })
            .catch(error => {
                setCheck(prevCheck => ({ ...prevCheck, isLoading: false, err: true, success: false }))
            })
    }

    return (
        <div className="registerFrame login">
            <h1 className="text-white">Create an account</h1>

            <form name="registerForm" id="registerForm">
                <input className={`${(check.email || check.isDuplicate) && 'border-red-500'}`} type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email..." required />
                <input className={`${(check.name || check.isDuplicate) && 'border-red-500'}`} type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your name..." required />
                <input className={`${(check.password || check.isDuplicate) && 'border-red-500'}`} type="password" id="password" name="password" value={formData.password} onChange={handleChange} placeholder="Enter your password..." required />

                {(check.isDuplicate) && <p className="text-red-500">E-mail already registered...</p>}
                {(check.err) && <p className="text-red-500">There was an error, please try again later.</p>}
                {(check.isLoading) && <div className="flex justify-center"><div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div>}
                {(check.success) && <p className="text-green-500">Registered successfully!</p>}

                <div className="btnDiv text-white">
                    <span>Already have an account? Click <a onClick={props.handleTransition}>here</a></span>
                    <input className="btnRegister" type="submit" onClick={registerUser} value="Register" />
                </div>
            </form>
        </div>
    )
}