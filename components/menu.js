import Link from 'next/link'

export default function Menu(props){
    return(
        <nav 
            
            className={props.active === "true"? "nav" : "nav-hidden"}>
            <ul>
                <li>
                    <Link href="/">
                        <a className="menu-link">Home</a>
                    </Link>
                </li>
                <li>
                    <Link href="/about">
                        <a className="menu-link">About</a>
                    </Link>
                </li>
            </ul>
            <style jsx>{`
                nav {
                    background: #262626a0;
                    position: fixed;
                    top: 8vmax;
                    left: 0;
                    width: 100%;
                    height: calc(100% - 6vmax);
                    transition: 1s;
                    z-index: 300;
                }
                
                .nav-hidden {
                    left: 100%;
                }
                
                nav ul {
                    min-width: 275px;
                    width: 60vw;
                    max-width: 600px;
                    margin: 5vh auto;
                    padding: 10vh 0;
                    border-radius: 5px;
                }
                
                nav ul li {
                    list-style-type: none;
                    text-align: center;
                    margin: 3vh auto;
                    font-size: 4vmax;
                    letter-spacing: .5vmax;
                    text-indent: .5vmax;
                    width: 100%;
                }
                
                .menu-link {
                    transition: .3s;
                    text-decoration: none;
                    color: inherit;
                    color: #ffffff;
                }
                .menu-link:hover, .menu-link:focus {
                    text-decoration: underline;
                }
            `}</style>
        </nav>
    )
}