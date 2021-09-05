import { NextSeo } from "next-seo";
import Head from 'next/head'
import Footer from './Footer'
import Header from './Header'

export default function Layout({ children, title = "Default Title" }) {
    return (
        <>
            {/* <Head> */}
                {/* <title>haruki`s Blog - {title}</title> */}
                <NextSeo
                    title={`haruki's Blog - ${title}`}
                    description={title}
                    // openGraph={{ url: `https://it-kingdom.com`, images: [{ url: "/img/ogp.jpg", alt: "IT KINGDOM" }] }}
                />
            {/* </Head> */}
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </>
    )
}