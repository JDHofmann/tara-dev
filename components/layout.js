import Header from "../components/header";
import Footer from "../components/footer";
import Head from 'next/head'
import { useRouter } from 'next/router'

export default function Layout({children})
 {
    
    let location = useRouter().pathname;

    return (
        <>
            <Head>
            <link rel="preconnect" href="https://fonts.gstatic.com"></link>
            <link href="https://fonts.googleapis.com/css2?family=Lexend+Mega&family=Playfair+Display:wght@400;600&family=Questrial&family=Spartan:wght@200;400;600&display=swap" rel="stylesheet"></link>
            </Head>
            <Header />
            <img 
                // {location === "/"?}
                className={location === "/" ? "sig big-sig" : "sig" }
                src="/signature.png"
            ></img>

            <div className="main">
                {children}
            </div>
            <Footer />
            <style jsx>{`
                .main {
                    min-height: calc(100vh - 150px);
                    padding: 0 20px;
                    width: 100%;
                    max-width: 1000px;
                    margin: 0 auto;
                }
                .sig {
                    display: block;
                    width: 40%;
                    max-width: 500px;
                    min-width: 250px;
                    margin: 0 auto;
                    padding: 2.5vmin 0;
                }
                .big-sig {
                    width: 80%;
                    max-width: 800px;
                    min-width: 300px;
                }
            `}</style>
        </>
    )
}