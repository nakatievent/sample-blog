import Link                            from "next/link"
import { useRouter }                   from "next/router"
import Layout                          from "../../components/Layout"
import { getAllCategoryIds, getCategoryPostData } from "../../lib/category"

export default function Post({ post }) {
    console.log(post)
    const router = useRouter()

    if (router.isFallback || !post) {
        return (
            <div>Loading</div>
        )
    }

    return (
        <Layout title="カテゴリー毎の投稿">
            <div className="contents-wrapper">
                {/* <section>
                    {postsOfCategory && postsOfCategory.map((postByCategory) => <Post key={postByCategory.id} post={postByCategory} />)}
                </section>
                <IndexContext.Provider value={{ postsOfCategory }}>
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
// export const getStaticProps = async () => {
//     const response = await client.get({
//         endpoint: 'posts',
//         queries : {filters: 'category[equals]654776546'},
//     })
//     return {
//         props: {
//             postsOfCategory: response.contents,
//         },
//         revalidate: 3 //ISRを有効にする
//     };
// };