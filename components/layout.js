import Header from "../components/header";
import Footer from "../components/footer";

export default function Layout({children})
 {
    return (
        <>
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