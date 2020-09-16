import React from 'react';
import './header.css';
class Header extends React.Component {
    state = {
        darkMode: false,
    }
    toggleDarkMode(e) {
        let darkMode
        if (e.propertyName === 'checked') {
             darkMode = true;
            this.setState({darkMode});
        } else {
            darkMode = false;
            this.setState({darkMode});
        }
        
    }
    render() {
        return (
            <div className="header">
                <div className="intro">
                <h1>Social Media Dashboard</h1>
                <p>Total Followers: 23, 004</p>
            </div>
                <hr/>
                <div className="toggle-mode">
                <p>Dark Mode</p>
                <label>
                    <input type="checkbox" defaultChecked={() => this.toggleDarkMode()} />
                    <div className="checkbox-area"></div>
                </label>
            </div>
        </div>
        )
    }
}


export default Header;