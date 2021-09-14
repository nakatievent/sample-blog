import Link from "next/link"
import { useContext } from "react"
import IndexContext from '../context/IndexContext'

export default function Category() {
    const { categorys } = useContext(IndexContext)
    console.log("カテゴリーが再レンダリングされました")
    return (
        <div className="category-list">
            <h2>カテゴリー</h2>
            <nav>
                <ul>
                    {categorys && categorys.map((category, index) => (
                        <li key={index}>
                            <Link href={`/category/${category.id}`}>
                                {category.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}