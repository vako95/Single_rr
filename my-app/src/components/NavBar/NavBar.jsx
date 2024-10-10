import "./NavBar.css"


import Logo from "./Logo/Logo.jsx";
import Menu from "./components/Menu.jsx";
import logoImg from "./assets/img/logo.jpeg"
import Search from "./Search/Search.jsx";

const NavBar = () => {
    const menuItems = [
        {
            "name": "Home",
            "link": "/",
            "dropdown": []
        },
        {
            "name": "About",
            "link": "/about",
            "dropdown": []
        },
        {
            "name": "Order",
            "link": "/order",
            "dropdown": []
        },
    ]
    return (

        <div className="nav-bar">
            <Logo logoImg={logoImg} />
            <Menu item={menuItems} />
            <Search/>
        </div>
    )
}

export default NavBar;