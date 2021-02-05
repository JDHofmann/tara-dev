import Header from "../components/header";
import Footer from "../components/footer";
import Head from 'next/head'

export default function Layout({children})
 {
    return (
        <>
            <Head>
                <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&family=Open+Sans:wght@300;400;600;700&family=Work+Sans:wght@300;400;500;600&display=swap" rel="stylesheet"></link>
            </Head>
            <Header />
            <div>
                {children}
            </div>
            <Footer />
            <style jsx>{`
                div {
                    min-height: calc(100vh - 150px);
                    padding: 0 20px;
                }
            `}</style>
        </>
    )
}