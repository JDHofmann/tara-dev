import Header from "../components/header";
import Layout from "../components/layout";

export default function Write() {
    return(
        <Layout>
            <h1>write</h1>
            <ul>
                <li>Tara item</li>
                <li>Tara item</li>
                <p>Still White</p>
                <li>Tara item</li>

                <li>Tara item</li>


            </ul>
            {/* blog nested here */}
            <style jsx>{`
                li {
                    color: #f0f0f0;
                    font-weight: 200;
                }
                p {
                    font-weight: 200;
                }
            `}</style>
        </Layout>
    )
}