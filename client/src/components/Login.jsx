import { useState } from "react"
import api from '../services/api'

export default function Login(props) {
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

    function loginUser(e) {
        e.preventDefault()

        if (formData.email == "" || formData.password == "") return console.log('Fill in all required fields')

        api.post("/login", formData)
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
    }

    // Logs
    // console.log(formData)

    return (
        <div>
            <h1>Realizar Login</h1>

            <form name="loginForm" id="loginForm">
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Digite o seu email..." required />
                <input type="password" id="password" name="password" value={formData.pass} onChange={handleChange} placeholder="Digite a sua senha..." required />
                <div className="btnDiv">
                    <span>Ainda não possui uma conta? Clique <a onClick={props.handleTransition}>aqui</a></span>
                    <input type="submit" onClick={loginUser} value="Entrar" />
                </div>
            </form>
        </div>
    )
}