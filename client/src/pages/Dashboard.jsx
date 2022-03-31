import { useLocation } from "react-router-dom";
import Header from "../components/Header";


export default function Dashboard() {
    // Variables
    const { state } = useLocation(); // state { id: int, email: string, name: string, password: string, admin: boolean }

    return (
        <div className="h-full">
            <Header user={state} />

            <div className="container">
                <h2 className="text-primary mb-4">Blog</h2>

                
            </div>
        </div>
    )
}