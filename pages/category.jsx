import IndexContext from '../context/IndexContext'
import { useRouter } from 'next/router'
import { client } from '../lib/client';
import Layout from '../components/Layout';
import Aside from '../components/Aside'
import Post from '../components/Post';

export default function category({ postsOfCategory }) {
    console.log(postsOfCategory)
    const router = useRouter()
    return (
        <Layout title="カテゴリー毎の投稿">
            <div className="contents-wrapper">
                <section>
                    {postsOfCategory && postsOfCategory.map((postByCategory) => <Post key={postByCategory.id} post={postByCategory} />)}
                </section>
                <IndexContext.Provider value={{ postsOfCategory }}>
                    <Aside />
                </IndexContext.Provider>
            </div>
        </Layout>
    )
}

export const getStaticProps = async () => {
    const response = await client.get({
        endpoint: 'posts',
        queries : {filters: 'category[equals]654776546'},
    })
    return {
        props: {
            postsOfCategory: response.contents,
        },
    };
};