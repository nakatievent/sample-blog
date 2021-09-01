import axios from 'axios'
import { useEffect, useState } from 'react'

export default function Category() {
    const [category, setCategory] = useState([])
    useEffect(() => {
        axios.get('https://engineer-blog.microcms.io/api/v1/category', {
            headers: {
                'Content-Type': 'application/json',
                'X-API-KEY': process.env.API_KEY,
            }
        }).then(response => {
            console.log('status:', response.status)
            console.log('body:', response.data)
            setCategory(response.data)
        }).catch(error => {
            console.log('error:', error)
        })
    }, [])

    return (
        <div className="category-list">
            <h2>カテゴリー</h2>
            <nav>
                <ul>
                    {category.contents && category.contents.map((sample, index) => (
                        <li key={index}>{sample.name}</li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}