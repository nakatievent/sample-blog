import Category from "./Category";

export default function Aside() {
    return (
        <aside>
            <div className="my-profile">
                <div className="profile-photo"></div>
                <p className="profile-statement">沖縄県出身。<br></br>フロントエンドエンジニア<br></br>プログラミングの才能が無さすぎるので、勉強しながら学んだことを色々と発信しています。</p>
                <button type="button" onClick={() => router.push('/')}>
                    プロフィール詳細
                </button>
            </div>
            <Category />
        </aside>
    )
}