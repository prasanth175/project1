import React from "react";
import { Component } from "react";
import "./index.css"


class SideNavbar extends Component{
    
    state = {
        isNavBarActive : false
    }

    toggleNavBar = () => {
        this.setState(prevState => ({ isNavBarActive: !prevState.isNavBarActive }));
    }
    
    render(){
        const {isNavBarActive} = this.state
        console.log(isNavBarActive)
        return(
            <>
            <div className="small-device-nav-bar">
                <img src="https://res.cloudinary.com/dytmw4swo/image/upload/v1710066862/3549578-removebg-preview_nvmggs.png" alt="websitelogo" className="small-device-website-logo"/>
                <h1 className="navbar-small-device-heading">SuperMarket</h1>
                <button className="navbar-toggle-button toggle-icon" onClick={this.toggleNavBar}>
                    <i className="fas fa-bars"></i>
                </button>
            </div>
            <nav className="side-nav-bar-container">
                <div className="navbar-top-container">
                    <img src="https://res.cloudinary.com/dytmw4swo/image/upload/v1710066862/3549578-removebg-preview_nvmggs.png" alt="websitelogo" className="website-logo"/>
                    <h1 className="navbar-heading">SuperMarket</h1>
                </div>
                
                <ul className="navbar-items-list">
                    <li className="navbar-list-item active-navbar-list-item">
                        <a href="/"  className="navbar-items">
                        <i className="fa-solid fa-house navbar-item-icons"></i>
                        Dashboard</a>
                    </li>
                    <li  className="navbar-list-item">
                        <a href="/products" className="navbar-items">
                        <i className="fa-solid fa-bag-shopping navbar-item-icons"></i>
                        Products</a>
                    </li>
                    <li className="navbar-list-item">
                        <a href="/orders" className="navbar-items">
                        <i className="fa-solid fa-truck-fast navbar-item-icons"></i>
                        Orders</a>
                    </li>
                </ul>
            </nav>
            </>
            
        )
    }
}

export default SideNavbar