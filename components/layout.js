import Header from "../components/header";


export default function Layout({children})
 {
    return (
        <>
        <Header />
        <div>
            {children}
        </div>
        </>
    )
}