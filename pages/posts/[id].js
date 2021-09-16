import Link from "next/link"
import Image from 'next/image'
import { useRouter } from "next/router"
import Layout from "../../components/Layout"
import { getAllPostsIds, getPostData } from "../../lib/posts"
import Post from "../../components/Post"

export default function article({ post }) {
    console.log(post)
    const image = post.image
    const router = useRouter()

    if (router.isFallback || !post) {
        return (
            <div>Loading</div>
        )
    }

    return (
        <Layout title={post.title}>
            <section>
                <Post post={post} />
            </section>
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