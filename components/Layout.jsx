import Head from 'next/head'
import Footer from './Footer'
import Header from './Header'

export default function Layout({ children, title = "Default Title" }) {
    return (
        <>
            <Head>
                <title>haruki`s Blog - {title}</title>
            </Head>
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </>
    )
}