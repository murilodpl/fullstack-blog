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
        isDuplicate: false
    })

    // Function
    function handleChange(e) {
        setCheck({
            email: false,
            password: false,
            isDuplicate: false
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

        api.post("/register", formData)
            .then(res => {
                if (res.data.status === 201) {
                    console.log("Cadastrado com sucesso!")
                    // console.log(res.data)
                } else {
                    setCheck(prevCheck => ({ ...prevCheck, isDuplicate: true }))
                }
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="registerFrame">
            <h1 className="text-white">Criar Conta</h1>

            <form name="registerForm" id="registerForm">
                <input className={`${(check.email || check.isDuplicate) && 'border-red-500'}`} type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Digite o seu email..." required />
                <input className={`${(check.name || check.isDuplicate) && 'border-red-500'}`} type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Digite o seu nome..." required />
                <input className={`${(check.password || check.isDuplicate) && 'border-red-500'}`} type="password" id="password" name="password" value={formData.password} onChange={handleChange} placeholder="Digite a sua senha..." required />
                {(check.isDuplicate) && <p className="text-red-500">Email já cadastrado...</p>}
                <div className="btnDiv text-white">
                    <span>Já possui uma conta? Clique <a onClick={props.handleTransition}>aqui</a></span>
                    <input className="btnRegister" type="submit" onClick={registerUser} value="Registrar" />
                </div>
            </form>
        </div>
    )
}