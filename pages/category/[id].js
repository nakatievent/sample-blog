import { useRouter }                   from "next/router"
import Layout                          from "../../components/Layout"
import { getAllCategoryIds, getCategoryPostData } from "../../lib/category"
import { client } from "../../lib/client"

export default function Post({ post }) {
    console.log(post)
    const response = client.get({
        endpoint: 'posts',
        queries : {filters: 'category[equals]react'},
    }).then((res) => console.log(res))
    const router = useRouter()

    if (router.isFallback || !post) {
        return (
            <div>Loading</div>
        )
    }

    return (
        <Layout title="カテゴリー毎の投稿">
            <div className="contents-wrapper">
                <section>
                    {/* {post && <Post key={post.id} post={post} />} */}
                </section>
                {/* <IndexContext.Provider value={{ postsOfCategory }}>
                    <Aside />
                </IndexContext.Provider> */}
            </div>
        </Layout>
    )
}

export async function getStaticPaths() {
    const paths = await getAllCategoryIds()
    return {
        paths,
        fallback: true
    }
}

export async function getStaticProps({ params }) {
    const { post: post } = await getCategoryPostData(params.id)
    return {
        props: {
            post
        },
        revalidate: 3 //ISRを有効にする
    }
}

export async function sample() {
    const response = await client.get({
        endpoint: 'posts',
        queries : {filters: 'category[equals]react'},
    })
    return response
};