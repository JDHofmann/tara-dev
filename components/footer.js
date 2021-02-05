export default function Footer(){
    return(
        <footer>
            <p>Made with love by JDBH</p>
            <style jsx>{`
                footer {
                    height: 8vmax;
                    background: #ff40ff;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 100%;
                }
                p {
                    background: inherit;
                    color: #101010;
                }
            `}</style>
        </footer>
    )
}