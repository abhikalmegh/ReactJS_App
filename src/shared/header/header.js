import React, { Component } from 'react';
import "./header.css"
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Container from 'react-bootstrap/Container';

const Header = () => {
    return (
        <div id="navbar-wrapper">
            <header>
                <nav className="navbar navbar-default navbar-fixed-top" role="navigation">
                    <div className="container-fluid">
                        <h2><d>Take-Home Challenge - Zimbra</d></h2>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Header;