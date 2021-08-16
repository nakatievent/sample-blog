import Head from 'next/head'
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
            </main>
            <footer>
                @udemy 2021
            </footer>
        </div>
    )
}