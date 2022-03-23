import { useState } from "react"
import api from '../services/api'
import { useNavigate } from "react-router-dom";

export default function Login(props) {
    // Variable
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })
    const [check, setCheck] = useState({
        email: false,
        password: false,
        wrongLogin: false
    })

    // Function
    function handleChange(e) {
        setCheck({
            email: false,
            password: false,
            wrongLogin: false
        })

        let { name, value } = e.target

        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }))
    }

    function loginUser(e) {
        e.preventDefault()

        // If filled
        if (formData.email == "") {
            return setCheck(prevCheck => ({ ...prevCheck, email: true }))
        } else {
            setCheck(prevCheck => ({ ...prevCheck, email: false }))
        }

        if (formData.password == "") {
            return setCheck(prevCheck => ({ ...prevCheck, password: true }))
        } else {
            setCheck(prevCheck => ({ ...prevCheck, password: false }))
        }

        // API check if user exist
        api.post("/login", formData)
            .then(res => {
                if (res.data.status === 200) {
                    console.log("Logado com sucesso!")
                    // console.log(res.data)

                    navigate("dashboard", {
                        state: {
                            ...res.data[0]
                        }
                    });
                } else {
                    setCheck(prevCheck => ({ ...prevCheck, wrongLogin: true }))
                }
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="loginFrame">
            <h1>Realizar Login</h1>

            <form name="loginForm" id="loginForm">
                <input className={`${(check.email || check.wrongLogin) && 'border-red-500'}`} type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Digite o seu email..." required />
                <input className={`${(check.password || check.wrongLogin) && 'border-red-500'}`} type="password" id="password" name="password" value={formData.password} onChange={handleChange} placeholder="Digite a sua senha..." required />
                {(check.wrongLogin) && <p className="text-red-500">Email ou senha errado...</p>}
                <div className="btnDiv">
                    <span>Ainda não possui uma conta? Clique <a onClick={props.handleTransition}>aqui</a></span>
                    <input className="btnLogin" type="submit" onClick={loginUser} value="Entrar" />
                </div>
            </form>
        </div>
    )
}