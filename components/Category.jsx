import axios from 'axios'
// import { useState, useEffect } from 'react'

export default function Category() {
    // const [category, setCategory] = useState([])
    // const data = axios.get('https://engineer-blog.microcms.io/api/v1/category', {
    //     headers: {
    //         'X-API-KEY': process.env.API_KEY,
    //     }
    // })
    // console.log(data)

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