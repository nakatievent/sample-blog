import { useContext } from "react"
import IndexContext   from '../context/IndexContext'

export default function Category() {
    const { categorys } = useContext(IndexContext)
    return (
        <div className="category-list">
            <h2>カテゴリー</h2>
            <nav>
                <ul>
                    {categorys && categorys.map((category, index) => (
                        <li key={category.id}>{category.name}</li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}