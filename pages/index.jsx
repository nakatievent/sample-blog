import IndexContext  from '../context/IndexContext'
import { useRouter } from 'next/router'
import { client }    from '../lib/client';
import Layout        from '../components/Layout';
import Aside         from '../components/Aside'
import Post          from '../components/Post';

export default function BlogPage({ posts, categorys, sample }) {
    console.log(sample)
    const router = useRouter()

    return (
        <Layout title="ブログ一覧">
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
    const sample = await client.get({
        endpoint: 'category/javascript',
    })
    return {
        props: {
            posts    : response.contents,
            categorys: response2.contents,
            sample   : sample
        },
    };
};