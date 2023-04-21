import { useState } from "react"
import './Header.css'

function Header() {

    const menuItems = [
        {text: "About", link: "#about"},
        {text: "Experience", link: "#experience"},
        {text: "Projects", link: "#projects"},
        {text: "Contact", link: "#contacts"},
    ]

    const [toggle, setToggle] = useState(true)

    return (
        <header id="header">
            {/*  Site Logo */}
            <a href="#" className="header-item" id="header-logo-container">
                <img src="../images/danielsodev-logo.png" alt="The Logo of DanielSo.Dev" />
            </a>
            {/* Main Navigation */}
            <div id="menu-button" onClick={() => setToggle(!toggle)}>
                <img src="./images/menu_button.png" alt="Menu button" />
            </div>
            {toggle && (
                <nav className="header-item" id="main-navigation">
                    <ul id="menu">
                    {
                        menuItems.map(item => {
                            return <li key={item.text}><a href={item.link}>{item.text}</a></li>
                        })
                    }
                    </ul>
                </nav>
            )}
        </header>
    )
}

export default Header
