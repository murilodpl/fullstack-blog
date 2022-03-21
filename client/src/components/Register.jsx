import { useState } from "react"

export default function Register() {
    // Variable
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })

    // Function
    function handleChange(e) {
        let { name, value } = e.target

        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }))
    }

    function registerUser(e) {
        e.preventDefault()

        const requestOptions = {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
            redirect: 'follow'
        }
        console.log(requestOptions)

        fetch('http://localhost:8080/users', requestOptions)
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(err => console.log(err))
    }

    // Logs
    console.log(formData)

    return (
        <form name="registerForm" id="registerForm">
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="E-mail" required />
            <input type="password" id="password" name="password" value={formData.pass} onChange={handleChange} placeholder="Password" required />
            <input type="submit" onClick={registerUser} value="Register" />
        </form>
    )
}