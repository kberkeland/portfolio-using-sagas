import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
    render() {
        return (
            <div>
                <header className="header">
                    <h1 className="title">Portfolio</h1>
                    <h2 className="title">Kye Berkeland</h2>
                </header>
            </div>
        )
    }
}

export default Header;