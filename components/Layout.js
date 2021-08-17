import Head from 'next/head'
import Footer from './Footer'
import Header from './Header'

export default function Layout({ children, title = "Default Title"}) {
    return (
        <div>
            <Head>
                <title>{title}</title>
            </Head>
            <main>
                <Header />
                {children}
                <Footer />
            </main>
        </div>
    )
}