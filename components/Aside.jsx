import { useRouter } from "next/router";
import Category from "./Category";

export default function Aside() {
    console.log("Asideが再レンダリングされました")
    const router = useRouter()
    return (
        <aside>
            <div className="my-profile">
                <div className="profile-photo"></div>
                <p className="profile-statement">
                    沖縄県出身。<br></br>フロントエンドエンジニア<br></br>プログラミングの才能が無さすぎるので、勉強しながら学んだことを色々と発信していき知識をつけていきます。
                </p>
                <button type="button" onClick={() => router.push('/')}>
                    プロフィール詳細
                </button>
            </div>
            {/* <form method="get" action="#" class="search_container">
                <input type="text" size="25" placeholder="キーワード検索"></input>
                <input type="submit"></input>
            </form> */}
            <Category />
        </aside>
    )
}