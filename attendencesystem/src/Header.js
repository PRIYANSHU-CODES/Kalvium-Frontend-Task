import React from 'react';
import './Header.css';

const Header = ({ className, date }) => {
    return (
        <header className={className}>
            <h1>Class Attendance</h1>
            <p>Date: {date}</p>
        </header>
    );
}

export default Header;
