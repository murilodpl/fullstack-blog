import Header from "../components/Header";

export default function Home(props) {
    return (
        <div className="h-full">
            <Header user={props.user} />

            <div className="container">
                <h2 className="text-primary mb-4">My Posts</h2>
            </div>
        </div>
    )
}