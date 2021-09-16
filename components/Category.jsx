import Link from "next/link"
import { useContext } from "react"
import LayoutContext from '../context/LayoutContext'

export default function Category() {
    const { categoryLists } = useContext(LayoutContext)
    console.log("カテゴリーが再レンダリングされました")
    return (
        <div className="category-list">
            <h2>カテゴリー</h2>
            <nav>
                <ul>
                    {categoryLists && categoryLists.map((category, index) => (
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