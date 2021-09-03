import IndexContext from '../context/IndexContext'
import { useRouter } from 'next/router'
import { client } from '../lib/client';
import Layout from '../components/Layout';
import Aside from '../components/Aside'
import Post from '../components/Post';

export default function BlogPage({ posts, categorys }) {
    const router = useRouter()

    return (
        <Layout title="Blog Page">
            <div className="contents-wrapper">
                <section>
                    {posts && posts.map((post) => <Post key={post.id} post={post} />)}
                </section>
                <IndexContext.Provider value={{ categorys }}>
                    <Aside />
                </IndexContext.Provider>
            </div>
        </Layout>
    )
}

export const getStaticProps = async () => {
    const response  = await client.get({
        endpoint: 'posts',
    })
    const response2 = await client.get({
        endpoint: 'category',
    })
    return {
        props: {
            posts    : response.contents,
            categorys: response2.contents
        },
    };
};