import { useState, useEffect } from "react"
import { useRouter } from "next/router"
import { client } from "../../lib/client"
import Layout from "../../components/Layout"
import { getAllCategoryIds, getCategoryPostData } from "../../lib/category"
import Post from "../../components/Post"

export default function Category({ post }) {
    console.log("カテゴリーIDページが再レンダリングされました")
    const [posts, setPosts] = useState([])
    const router = useRouter()
    useEffect(() => {
        client.get({
            endpoint: 'posts',
            queries: { filters: `category[equals]${router.query.id}` },
        }).then((response) => setPosts(response.contents))
    }, [setPosts])

    if (router.isFallback || !post) {
        return (
            <div>Loading</div>
        )
    }

    return (
        <Layout title="カテゴリー毎の投稿">
            <div className="contents-wrapper">
                <section>
                    {posts.map((post, index) => <Post key={index} post={post} />)}
                </section>
            </div>
        </Layout>
    )
}

export async function getStaticPaths() {
    const paths = await getAllCategoryIds()
    return {
        paths,
        fallback: true
    }
}

export async function getStaticProps({ params }) {
    const { post: post } = await getCategoryPostData(params.id)
    return {
        props: {
            post
        },
        revalidate: 3 //ISRを有効にする
    }
}