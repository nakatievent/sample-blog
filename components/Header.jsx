import Link from 'next/link'

const Header = () => {
    const naviMenus = ["タイトル", "タイトル2", "タイトル3", "タイトル4", "タイトル5"]
    return (
        <header>
            <Link href="/">
                <a>Sample Blog</a>
            </Link>
            <nav className="menu">
                <ul>
                    {naviMenus.map((naviMenu, index) =>
                        <li key={index}>{naviMenu}</li>
                    )}
                </ul>
            </nav>
        </header>
    )
}

export default Header
