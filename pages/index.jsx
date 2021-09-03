import Layout from "../components/Layout";
import { client } from '../lib/client';
import Post from "../components/Post";
import { useRouter } from 'next/router'
import Category from "../components/Category";

export default function BlogPage({ posts, categorys }) {
    const router = useRouter()

    return (
        <Layout title="Blog Page">
            <div className="contents-wrapper">
                <section>
                    {posts && posts.map((post) => <Post key={post.id} post={post} />)}
                </section>
                <aside>
                    <div className="my-profile">
                        <div className="profile-photo"></div>
                        <p className="profile-statement">沖縄県出身。<br></br>フロントエンドエンジニア<br></br>プログラミングの才能が無さすぎるので、勉強しながら学んだことを色々と発信しています。</p>
                        <button type="button" onClick={() => router.push('/')}>
                            プロフィール詳細
                        </button>
                    </div>
                    {categorys && <Category categorys={categorys} />}
                </aside>
            </div>
        </Layout>
    )
}

export const getStaticProps = async () => {
    const response = await client.get({
        endpoint: 'posts',
    })
    const response2 = await client.get({
        endpoint: 'category',
    })
    return {
        props: {
            posts: response.contents,
            categorys: response2.contents
        },
    };
};