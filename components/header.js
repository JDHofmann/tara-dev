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
            <header>
                <button 
                    onClick={this.onClick}
                    className={this.state.menuOpen ? "burger-btn burger-btn-active" : "burger-btn"}>
                    <span></span>
                    <span className="second-span"></span>
                    <span></span>
                </button>
                <Menu active={this.state.menuOpen? "true" : "false"}/>
                <style jsx>{`
                    .burger-btn {
                        width: 35px;
                        height: 35px;
                        margin: 20px;
                        padding: 0;
                        border: none;
                        position: relative;
                    }
                    
                    .burger-btn-active {
                        display: block;
                    }
                    
                    .burger-btn span {
                        display: block;
                        width: 35px;
                        height: 5px;
                        background: #ff40ff;
                        border-radius: 2px;
                        transition: .65s;
                        position: absolute;
                    }

                    .burger-btn span:nth-child(1) {
                        top: 0;
                    }

                    .burger-btn span:nth-child(2) {
                        width: 25px;
                        left: 0;
                        top: 15px;
                    }

                    .burger-btn span:nth-child(3) {
                        bottom: 0;
                    }

                    .burger-btn-active span:nth-child(1){
                        transform: rotate(0.125turn);
                        top: 15px;
                    }

                    .burger-btn-active span:nth-child(2) {
                        left: -100px;
                    }
                    
                    .burger-btn-active span:nth-child(3){
                        transform: rotate(-0.125turn);
                        bottom: 15px;
                    }
                `}</style>
            </header>
        )
    }
}