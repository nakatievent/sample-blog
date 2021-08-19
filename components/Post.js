import Link from "next/link"

export default function Post({ post }) {
    return (
        <article className="contents-list">
            <Link href={`/posts/${post.id}`}>
                <h1>{post.title}</h1>
            </Link>
            <p>作成日：{post.createdAt} 更新日：{post.updatedAt}</p>
            <Link href={`/posts/${post.id}`}>
                <div
                    dangerouslySetInnerHTML={{
                        __html: `${post.content}`,
                    }}
                />
            </Link>
        </article>
    )
}