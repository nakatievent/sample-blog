import IndexContext  from '../context/IndexContext'
import { useRouter } from 'next/router'
import { client }    from '../lib/client';
import Layout        from '../components/Layout';
import Aside         from '../components/Aside'
import Post          from '../components/Post';

export default function BlogPage({ posts, postsOfCategory, categorys }) {
    console.log(categorys)
    const router = useRouter()
    return (
        <Layout title="ブログ一覧">
            <div className="contents-wrapper">
                <section>
                    {posts && posts.map((post) => <Post key={post.id} post={post} />)}
                </section>
                <IndexContext.Provider value={{ postsOfCategory }}>
                    <Aside categorys={categorys} />
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
        endpoint: 'posts',
        queries : {filters: 'category[equals]react'},
    })
    const response3 = await client.get({
        endpoint: 'category',
    })
    return {
        props: {
            posts          : response.contents,
            postsOfCategory: response2.contents,
            categorys      : response3.contents,
        },
    };
};