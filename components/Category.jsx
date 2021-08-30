import axios from 'axios'
import { useEffect, useState } from 'react'

export default function Category() {
    const [category, setCategory] = useState([])
    useEffect(() => {
        axios.get('https://engineer-blog.microcms.io/api/v1/category', {
            headers: {
                'Content-Type': 'application/json',
                'X-API-KEY': 'ac3fd366-41c7-4274-9dc1-a13bf9bcee3f',
            }
        }).then(response => {
            console.log('status:', response.status)
            console.log('body:', response.data)
            setCategory(response.data)
        }).catch(error => {
            console.log('error:', error)
        })
    }, [])
    console.log(category)

    return (
        <div className="category-list">
            <h2>カテゴリー</h2>
            <nav>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Udemy</li>
                </ul>
            </nav>
        </div>
    )
}