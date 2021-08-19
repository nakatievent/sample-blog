import { useRouter } from 'next/router'
import Layout from '../components/Layout'
import "tailwindcss/tailwind.css";
import Link from "next/link"

export default function MainPage() {
    const router = useRouter()
    return (
        <div>
            <Link href="/blog-page">
                <a>Blog</a>
            </Link>
        </div>
    )
}