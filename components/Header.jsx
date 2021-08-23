import React from 'react'

const Header = () => {
    const naviMenus = ["タイトル", "タイトル2", "タイトル3", "タイトル4", "タイトル5"]
    return (
        <header>
            <h1>Sample Blog</h1>
            <nav className="menu">
                <ul>
                    {naviMenus.map((naviMenu, index) =>
                        <li key={index}>{naviMenu}</li>
                    )}
                </ul>
            </nav>
            <input type="search"></input>
        </header>
    )
}

export default Header
