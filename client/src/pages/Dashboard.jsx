import { useLocation } from "react-router-dom";


export default function Dashboard() {
    // Variables
    const { state } = useLocation(); // state { id: int, email: string, name: string, password: string, admin: boolean }

    return (
        <div className="h-full flex flex-col justify-center items-center">
            <h1>Bem-vindo {state.name}</h1>
            <p>Email: {state.email}</p>
            <p>Admin: {state.admin ? "Sim" : "Não"}</p>
        </div>
    )
}