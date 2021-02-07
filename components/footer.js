export default function Footer(){
    return(
        <footer>
            <p>made with love by JDBH</p>
            <style jsx>{`
                footer {
                    height: 75px;
                    background: #ff40ff;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 100%;
                }
                p {
                    background: inherit;
                    color: #101010;
                    font-size: 12px;
                }
            `}</style>
        </footer>
    )
}