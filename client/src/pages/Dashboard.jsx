import { useLocation } from "react-router-dom";

export default function Dashboard() {
    // Variables
    const { state } = useLocation();

    return (
        <div>
            <h1>Usuário: {state.email}</h1>
        </div>
    )
}