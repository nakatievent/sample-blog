const Footer = () => {
    const footerMenus = ["ホーム", "プロフィール", "記事一覧", "仕事依頼について", "制作実績", "お問い合わせ", "このサイトについて"]
    return (
        <footer>
            <h3>SampleBlog</h3>
            <ul className="footer-menu">
                {footerMenus.map((footerMenu, index) =>
                    <li key={index}>{footerMenu}</li>
                )}
            </ul>
            <ul className="sns-button">
                <li className="footer-sns-icon"></li>
                <li className="footer-sns-icon"></li>
                <li className="footer-sns-icon"></li>
                <li className="footer-sns-icon"></li>
                <li className="footer-sns-icon"></li>
            </ul>
        </footer>
    )
}

export default Footer