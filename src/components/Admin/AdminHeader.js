import React, { Component } from 'react';
import './AdminHeader.css';

class AdminHeader extends Component {
    render() {
        return (
            <div>
                <header className="admin-header">
                    <h1 className="admin-title">Admin Page</h1>
                </header>
            </div>
        )
    }
}

export default AdminHeader;