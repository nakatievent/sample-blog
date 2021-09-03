import Link from "next/link"
import { useRouter } from "next/router"
import Layout from "../../components/Layout"
import { getAllPostsIds, getPostData } from "../../lib/posts"

export default function Post({ post }) {
    console.log(post)
    const router = useRouter()

    if (router.isFallback || !post) {
        return (
            <div>Loading</div>
        )
    }

    return (
        <Layout title={post.title}>
            <p>
                {"ID : "}
                {post.id}
            </p>
            <p>{post.title}</p>
            <p>{post.body}</p>
            <Link href="/">
                <div>
                    <span>前のページへ戻る</span>
                </div>
            </Link>
        </Layout>
    )
}

export async function getStaticPaths() {
    const paths = await getAllPostsIds()

    return {
        paths,
        fallback: true
    }
}

export async function getStaticProps({ params }) {
    const { post: post } = await getPostData(params.id)
    return {
        props: {
            post
        },
        revalidate: 3 //ISRを有効にする
    }
}