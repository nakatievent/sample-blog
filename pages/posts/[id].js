import Link from "next/link"
import { useRouter } from "next/router"
import Layout from "../../components/Layout"
import { getAllPostsIds, getPostData } from "../../lib/posts"

export default function Post({ post }) {
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
            <Link href="/blog-page">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
                    </svg>
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
        revalidate: 3
    }
}