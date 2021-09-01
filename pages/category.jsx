import Layout from "../components/Layout";
import Image from 'next/image'

export default function category() {
    const postByCategorys = [
        { id: 1, category_title: "サンプル1", category_article: "サンプル1" },
        { id: 2, category_title: "サンプル2", category_article: "サンプル2" },
        { id: 3, category_title: "サンプル3", category_article: "サンプル3" },
        { id: 4, category_title: "サンプル4", category_article: "サンプル4" },
        { id: 5, category_title: "サンプル5", category_article: "サンプル5" },
    ]
    console.log(postByCategorys)
    return (
        <Layout title="posts-by-categorys">
            <article>
                {postByCategorys.map((postByCategory) => (
                    <div className="posts-by-categorys">
                        <h2>{postByCategory.category_title}</h2>
                        <p>{postByCategory.category_article}</p>
                        <p>作成日：2021年8月31日 {" "} 更新日：2021年8月31日</p>
                    </div>
                ))}
            </article>
        </Layout>
    )
}