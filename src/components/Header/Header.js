import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className='header-container'>
            <div className="header-logo">
                <h3>Pro IQ Quiz</h3>
            </div>
            <nav className='header-menu'>
                <Link to='/'>Topics</Link>
                <Link to='/statistics'>Statistics</Link>
                <Link to='/blogs'>Blogs</Link>
            </nav>
        </div>
    );
};

export default Header;