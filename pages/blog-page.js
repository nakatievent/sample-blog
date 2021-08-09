import Layout from "../components/Layout";
import Link from "next/link"
import { getAllPostsData } from "../lib/posts"
import Post from "../components/Post";

export default function BlogPage({ filteredPosts }) {
    return (
        <Layout title="Blog Page">
            <ul>
                {filteredPosts && filteredPosts.map((post) => <Post key={post.id} post={post} />)}
            </ul>
            <Link href="/mainPage">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M15.707 15.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 010 1.414zm-6 0a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 1.414L5.414 10l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                    </svg>
                    <span>ブログ一覧へ戻る</span>
                </div>
            </Link>
        </Layout>
    )
}

export async function getStaticProps() {
    const filteredPosts = await getAllPostsData()
    // const filteredPosts = [{id: 1, title: "haruki"}, {id: 2, title: "haruki"}]
    console.log(filteredPosts)
    return {
        props: { filteredPosts }
    }
}