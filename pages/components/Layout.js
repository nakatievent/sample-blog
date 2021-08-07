import Head from 'next/head'

export default function Layout({ children, title = "Default Title"}) {
    return (
        <div>
            <Head>
                <title>{title}</title>
            </Head>
            <main>
                {children}
            </main>
            <footer>
                @udemy 2021
            </footer>
        </div>
    )
}