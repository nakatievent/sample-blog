import axios from 'axios'
import { useEffect, useState } from 'react'

export default function Category({ categorys }) {
    return (
        <div className="category-list">
            <h2>カテゴリー</h2>
            <nav>
                <ul>
                    {categorys && categorys.map((category, index) => (
                        <li key={index}>{category.name}</li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}