import Link  from "next/link"
import { useContext } from "react"
import IndexContext   from '../context/IndexContext'

export default function Category({categorys}) {
    const { postsOfCategory } = useContext(IndexContext)
    console.log(categorys)
    console.log(postsOfCategory[0].id)
    return (
        <div className="category-list">
            <h2>カテゴリー</h2>
            <nav>
                <ul>
                    {categorys && categorys.map((category) => (
                        // <Link href="/">
                            <li key={category.id}>{category.name}</li>
                        // </Link>
                    ))}
                </ul>
            </nav>
        </div>
    )
}