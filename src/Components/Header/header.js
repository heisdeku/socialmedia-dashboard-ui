import React  from 'react';
import './header.css';

const Header = ({toggleDarkMode=f=>f, mode}) => {
    let classValue = mode ? "header header-dark" : "header"
    return (
    <div className={classValue}>
        <div className="intro">
            <h1>Social Media Dashboard</h1>
            <p>Total Followers: 23, 004</p>
        </div>
        <hr/>
        <div className="toggle-mode">
            <p>Dark Mode</p>
            <label>
                <input type="checkbox" defaultChecked={mode} onChange={() => toggleDarkMode(mode)} />
                <div className="checkbox-area"></div>
            </label>
        </div>
    </div>   
    ) }

export default Header;