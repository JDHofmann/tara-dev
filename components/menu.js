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
        </nav>
    )
}