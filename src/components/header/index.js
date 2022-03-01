import './header.css';
import React from "react";

const Header = () => {
    return (
        <div className="header-holder">
            <div className="header">
                <div className="header-logo">
                    Expense Tracker
                    <i className="fi fi-sr-money"></i>
                </div>
                <div className='header-button'>
                    <a href='#' target='_blank' rel='noopner noreferrer'>
                        <i className="fi fi-brands-github"></i>Git Link 
                   </a>
                </div>
            </div>
        </div>
    );
}

export default Header