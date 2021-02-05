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
                        height: 4.1vmax;
                        width: 4.1vmax;
                        max-height: 35px;
                        margin: 2vmax;
                        padding: 0;
                        border: none;
                        position: relative;
                    }
                    
                    .burger-btn-active {
                        display: block;
                    }
                    
                    .burger-btn span {
                        display: block;
                        width: 4.1vmax;
                        max-width: 35px;
                        height: .7vmax;
                        max-height: 5px;
                        background: #ff40ff;
                        border-radius: 2px;
                        transition: .65s;
                        position: absolute;
                    }

                    .burger-btn span:nth-child(1) {
                        top: 0;
                        transition: .65s;

                    }

                    .burger-btn span:nth-child(3) {
                        bottom: 0;
                        transition: .65s;
                    }

                    .burger-btn span:nth-child(2) {
                        width: 3vmax;
                        max-width: 27px;
                        transition: 1s;
                        left: 0;
                        top: 1.7vmax;
                    }
                    
                    .burger-btn-active span:nth-child(2) {
                        position: absolute;
                        left: -100px;
                    }

                    .burger-btn-active span:nth-child(1){
                        transform: rotate(0.125turn);
                        top: 1.7vmax;
                    }
                    
                    .burger-btn-active span:nth-child(3){
                        transform: rotate(-0.125turn);
                        bottom: 1.7vmax;
                    }
                `}</style>
            </div>
        )
    }
}