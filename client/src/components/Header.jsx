export default function Header(props) {
    return (
        <nav className="bg-white shadow-lg mb-4">
            <div className="container p-4">
                <div className="flex justify-between">
                    <div className="flex items-center">
                        <h1 className="font-semibold text-gray-500 text-lg">
                            Welcome, {props.user.name}!
                        </h1>
                    </div>
                    <div className="hidden md:flex items-center space-x-1">
                        <a href="" className="px-2 text-gray-500 font-semibold hover:text-purple-500 transition duration-300">
                            Logout
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    )
}