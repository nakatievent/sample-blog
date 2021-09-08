import Link  from "next/link"
import Image from 'next/image'

export default function Post({ post }) {
    const image = post.image
    return (
        <article className="contents-list">
            <Link href={`/posts/${post.id}`}>
                <h2>{post.title}</h2>
            </Link>
            <p>作成日：{post.createdAt} {" "} 更新日：{post.updatedAt}</p>
            {image ? <Image src={image.url} width={image.width} height={image.height} /> : ""}
            <div
                dangerouslySetInnerHTML={{
                    __html: `${post.content}`,
                }}
            />
            <Link href={`/posts/${post.id}`}>続きを読む</Link>
        </article>
    )
}