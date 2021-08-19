const Footer = () => {
    const footerMenus = ["タイトル", "タイトル2", "タイトル3", "タイトル4", "タイトル5"]
    return (
        <footer>
            <ul>
                {footerMenus.map((footerMenu, index) =>
                    <li key={index}>{footerMenu}</li>
                )}
            </ul>
        </footer>
    )
}

export default Footer