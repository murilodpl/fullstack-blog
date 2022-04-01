import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Header(props) {
    const [mobileMenuShow, setMobileMenuShow] = useState(false)

    // Functions
    function menuBtnClick() {
        setMobileMenuShow(prevBool => !prevBool)
    }
    function logout() {
        localStorage.removeItem('user')
    }

    return (
        <header className="shadow-md mb-6">
            <nav className="px-2 sm:px-4 py-2.5 rounded">
                <div className="container flex flex-wrap justify-between items-center py-6 mx-auto">
                    <div className="flex">
                        <h1 className="text-md md:text-xl font-bold mr-auto text-primary self-center">Welcome {props.user.name}!</h1>
                    </div>

                    <div className="md:hidden flex items-center">
                        <button className="outline-none menu-button" aria-label="Open mobile menu" onClick={menuBtnClick}>
                            <svg className="w-6 h-6 text-gray-500" x-show="! showMenu" fill="none" viewBox="0 00 24 24" stroke="currentColor">
                                <path d="m4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>
                    </div>

                    <div className="hidden w-full md:block md:w-auto" id="mobile-menu">
                        <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                            <li>
                                <NavLink to="/" className="navItem" >Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/myposts" className="navItem" >My Posts</NavLink>
                            </li>
                            <li>
                                <NavLink to="/login" className="navItem" onClick={logout}>Logout</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className={`${(!mobileMenuShow) && "hidden"} md:hidden mobile-menu`}>
                    <ul className="">
                        <li>
                            <NavLink to="/" className="navItem" onClick={menuBtnClick} >Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="philosopher" className="navItem" onClick={menuBtnClick} >Philosopher</NavLink>
                        </li>
                        <li>
                            <NavLink to="search" className="navItem" onClick={menuBtnClick} >Search</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}