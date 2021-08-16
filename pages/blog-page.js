import Layout from "../components/Layout";
import Link from "next/link"
import { client } from '../lib/client';
import Post from "../components/Post";

export default function BlogPage({ posts }) {
    console.log(posts)
    return (
        <Layout title="Blog Page">
            <ul>
                {posts && posts.map((post) => <Post key={post.id} post={post.title} />)}
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

export const getStaticProps = async() => {
    const response = await client.get({
        endpoint: 'posts',
    })

    return {
        props: {
            posts: response.contents,
        },
    };
};