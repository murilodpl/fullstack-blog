import { useState } from "react"
import api from "../services/api"

export default function Register(props) {
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

        if (formData.email == "" || formData.password == "") return console.log('Fill in all required fields')

        api.post("/users", formData)
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
    }

    // Logs
    // console.log(formData)

    return (
        <div>
            <h1>Criar Conta</h1>

            <form name="registerForm" id="registerForm">
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Digite o seu email..." required />
                <input type="password" id="password" name="password" value={formData.pass} onChange={handleChange} placeholder="Digite a sua senha..." required />
                <div className="btnDiv">
                    <span>Já possui uma conta? Clique <a onClick={props.handleTransition}>aqui</a></span>
                    <input type="submit" onClick={registerUser} value="Registrar" />
                </div>
            </form>
        </div>
    )
}