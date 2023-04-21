function Header() {

    return (
        <header id="header">
            {/*  Site Logo */}
            <a href="#" class="header-item" id="header-logo-container">
                <img src="./images/danielsodev-logo.png" alt="The Logo of DanielSo.Dev" />
            </a>
            {/* Main Navigation */}
            <div id="menu-button">
                <img src="./images/menu_button.png" alt="The image of menu button" />
            </div>
            <nav class="header-item" id="main-navigation">
                <ul id="menu"></ul>
            </nav>
        </header>
    )
}

export default Header
