import Layout from "../components/Layout";
import Image from 'next/image'

export default function category() {
    const postByCategorys = [
        { id: 1, category_title: "サンプル1のタイトルについて", category_article: "サンプル1" },
        { id: 2, category_title: "サンプル2のタイトルについて", category_article: "サンプル2" },
        { id: 3, category_title: "サンプル3のタイトルについて", category_article: "サンプル3" },
        { id: 4, category_title: "サンプル4のタイトルについて", category_article: "サンプル4" },
        { id: 5, category_title: "サンプル5のタイトルについて", category_article: "サンプル5" },
    ]
    console.log(postByCategorys)
    return (
        <Layout title="posts-by-categorys">
            <section>
                {postByCategorys.map((postByCategory) => (
                    <article>
                        <div className="picture"></div>
                        <div className="posts-by-categorys">
                            <h2>{postByCategory.category_title}</h2>
                            <p>{postByCategory.category_article}</p>
                            <p>作成日：2021年8月31日 {" "} 更新日：2021年8月31日</p>
                        </div>
                    </article>
                ))}
            </section>
        </Layout>
    )
}