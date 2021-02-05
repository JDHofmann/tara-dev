import Menu from "./menu";


export default function Header(){
    return(
        <div>
             <button className="burger-btn">
                <span></span>
                <span className="second-span"></span>
                <span></span>
            </button>
            <Menu />
        </div>
    )
}