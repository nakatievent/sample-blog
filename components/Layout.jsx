import { useState, useEffect } from 'react'
import { client } from '../lib/client'
import LayoutContext from '../context/LayoutContext'
import Head from 'next/head'
import Footer from './Footer'
import Header from './Header'
import Aside from '../components/Aside'

export default function Layout({ children, title = "Default Title" }) {
    const [categoryLists, setCategoryList] = useState([])
    useEffect(() => {
        client.get({
            endpoint: 'category'
        }).then((response) => setCategoryList(response.contents))
    }, [setCategoryList])
    return (
        <>
            <Head>
                <title>haruki`s Blog - {title}</title>
            </Head>
            <Header />
            <main>
                <div className="contents-wrapper">
                    {children}
                    <LayoutContext.Provider value={{ categoryLists }}>
                        <Aside />
                    </LayoutContext.Provider>
                </div>
            </main>
            <Footer />
        </>
    )
}