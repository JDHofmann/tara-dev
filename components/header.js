import Menu from "./menu";
import React, { useState } from 'react';
import { useRouter } from 'next/router'


export default function Header(){

    const [menuOpen, setMenuOpen] = useState(false)
    let location = useRouter().pathname;

    return(
        <header>
            <button
                name="menu"
                title="menu"
                onClick={() => setMenuOpen(!menuOpen)}
                className={menuOpen ? "burger-btn burger-btn-active" : "burger-btn"}
                >
                <span></span>
                <span className="second-span"></span>
                <span></span>
            </button>
            { location === "/" ? null :
            <img 
                className="sig"
                src="/signature.png"
            ></img>
            }
            <Menu 
                active={menuOpen? "true" : "false"}
            />
        </header>
    )
}
