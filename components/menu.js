import Link from 'next/link'

export default function Menu(props){
    return(
        <nav 
            
            className={props.active === "true"? "nav" : "nav-hidden"}>
            <ul>
                <li>
                    <Link href="/">
                        <a className="menu-link">home</a>
                    </Link>
                </li>
                <li>
                    <Link href="/write">
                        <a className="menu-link">write</a>
                    </Link>
                </li>
                <li>
                    <Link href="/sing">
                        <a className="menu-link">sing</a>
                    </Link>
                </li>
                <li>
                    <Link href="/make">
                        <a className="menu-link">make</a>
                    </Link>
                </li>
                {/* <li>
                    <Link href="/about">
                        <a className="menu-link">about</a>
                    </Link>
                </li> */}
                <li>
                    <Link href="/contact">
                        <a className="menu-link">contact</a>
                    </Link>
                </li>
            </ul>
            <style jsx>{`
                nav {
                    background: #262626e0;
                    position: fixed;
                    top: 75px;
                    left: 0;
                    width: 100%;
                    height: calc(100% - 75px);
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
                    margin: 1.5vh auto;
                    font-size: 3vmin;
                    font-size: calc(17px + (24 - 17) * ((100vmin - 320px) / (1200 - 320)));
                    letter-spacing: .5vmin;
                    text-indent: .5vmin;
                    width: 100%;
                }
                
                .menu-link {
                    transition: .3s;
                    text-decoration: none;
                    color: inherit;
                    color: #ffffff;
                    margin: 1px;
                }
                .menu-link::after {
                    content: '';
                    width: 0px;
                    height: 1px;
                    display: block;
                    background: #ffffff;
                    transition: .3s;
                }
                .menu-link:hover::after, .menu-link :focus::after {
                    width: 100%;
                }
            `}</style>
        </nav>
    )
}