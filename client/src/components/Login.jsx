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
        wrongLogin: false,
        err: false,
        isLoading: false,
        success: false
    })

    // Function
    function handleChange(e) {
        setCheck({
            email: false,
            password: false,
            wrongLogin: false,
            err: false,
            isLoading: false
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

        setCheck(prevCheck => ({ ...prevCheck, isLoading: true, err: false }))

        // API check if user exist
        api.post("/users/login", formData)
            .then(res => {
                if (res.data.status === 200) {
                    // console.log(res.data)
                    setCheck(prevCheck => ({ ...prevCheck, isLoading: false, success: true }))
                    // store the user in localStorage
                    localStorage.setItem('user', JSON.stringify(res.data))

                    setTimeout(() => {
                        navigate("/");
                    }, 1000);
                } else {
                    setCheck(prevCheck => ({ ...prevCheck, success: false, isLoading: false, wrongLogin: true }))
                }
            })
            .catch(error => {
                setCheck(prevCheck => ({ ...prevCheck, success: false, isLoading: false, err: true }))
                console.log(error)
            })
    }

    return (
        <div className="loginFrame login">
            <h1>Realizar Login</h1>

            <form name="loginForm" id="loginForm">
                <input className={`${(check.email || check.wrongLogin) && 'border-red-500'}`} type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Digite o seu email..." required />
                <input className={`${(check.password || check.wrongLogin) && 'border-red-500'}`} type="password" id="password" name="password" value={formData.password} onChange={handleChange} placeholder="Digite a sua senha..." required />

                {(check.wrongLogin) && <p className="text-red-500">Email ou senha errado...</p>}
                {(check.err) && <p className="text-red-500">Ocorreu algum erro, tente novamente mais tarde.</p>}
                {(check.isLoading) && <div className="flex justify-center"><div className="lds-roller invert"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div>}
                {(check.success) && <p className="text-green-500">Logado com sucesso!</p>}


                <div className="btnDiv">
                    <span>Ainda não possui uma conta? Clique <a onClick={props.handleTransition}>aqui</a></span>
                    <input className="btnLogin" type="submit" onClick={loginUser} value="Entrar" />
                </div>
            </form>
        </div>
    )
}