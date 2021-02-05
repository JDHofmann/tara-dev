import Menu from "./menu";
import React from 'react'

export default class Header extends React.Component{

    state = {
        menuOpen: false
    }

    onClick = () => {
        this.setState({
            menuOpen: !this.state.menuOpen
        })
    }
    render(){

        return(
            <div>
                <button 
                    onClick={this.onClick}
                    className={this.state.menuOpen ? "burger-btn burger-btn-active" : "burger-btn"}>
                    <span></span>
                    <span className="second-span"></span>
                    <span></span>
                </button>
                <Menu />
                <style jsx>{`
                    .burger-btn {
                        height: 4vmax;
                        max-height: 35px;
                        margin: 2vmax;
                        padding: 0;
                        background: none;
                        border: none;
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                    }
                    
                    .burger-btn-active {
                        display: block;
                    }
                    
                    .burger-btn span {
                        display: block;
                        width: 4vmax;
                        max-width: 35px;
                        height: .65vmax;
                        max-height: 5px;
                        background: #ff40ff;
                        border-radius: 2px;
                        transition: .65s;
                    
                    }
                    
                    .burger-btn span:nth-child(2) {
                        width: 3vmax;
                        max-width: 27px;
                    }
                    
                    .burger-btn-active span:nth-child(1){
                        transform: rotate(0.125turn);
                    }
                    
                    .burger-btn-active span:nth-child(2) {
                        display: none;
                    }
                    
                    .burger-btn-active span:nth-child(3){
                        transform: rotate(-0.125turn);
                        margin-top: -.65vmax;
                    }
                `}</style>
            </div>
        )
    }
}