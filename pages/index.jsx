import { useRouter } from 'next/router'
import { client } from '../lib/client';
import Layout from '../components/Layout';
import Post from '../components/Post';

export default function BlogPage({ posts }) {
    const router = useRouter()
    return (
        <Layout title="ブログ一覧">
            <section>
                {posts && posts.map((post) => <Post key={post.id} post={post} />)}
            </section>
        </Layout>
    )
}

export const getStaticProps = async () => {
    const response = await client.get({
        endpoint: 'posts',
    })
    return {
        props: {
            posts: response.contents,
        },
    };
};