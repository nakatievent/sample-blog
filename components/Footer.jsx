const Footer = () => {
    const footerMenus = ["ホーム", "プロフィール", "記事一覧", "仕事依頼について", "制作実績", "お問い合わせ", "このサイトについて"]
    return (
        <footer>
            <h3></h3>
            <ul>
                {footerMenus.map((footerMenu, index) =>
                    <li key={index}>{footerMenu}</li>
                )}
            </ul>
        </footer>
    )
}

export default Footer