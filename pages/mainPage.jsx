import Layout from "../components/Layout";
import { client } from '../lib/client';
import Post from "../components/Post";

export default function BlogPage({ posts }) {
    return (
        <Layout title="Blog Page">
            <div className="contents-wrapper">
                <section>
                    {posts && posts.map((post) => <Post key={post.id} post={post} />)}
                </section>
                <aside>
                    <div className="sample">
                        <p>sample</p>
                    </div>
                </aside>
            </div>
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