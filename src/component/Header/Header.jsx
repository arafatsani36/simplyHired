import React from 'react';
import './Header.css'
import ActiveLink from '../ActiveLink/ActiveLink';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='lg:py-6 lg:px-40'>
            <div className='flex justify-between  items-center container'>
                <div className="logo">
                    <Link to='/'><h6 className='logo-title'>SimpleHired</h6></Link>   
                </div>
                
                <div className="menu flex">
                
                    <ActiveLink to="/">Home</ActiveLink>
                    <ActiveLink to="/statistics">Statistics</ActiveLink>
                    <ActiveLink to="/appliedjobs">Applied Jobs</ActiveLink>
                    <ActiveLink to="/blog">Blog</ActiveLink> 
                </div>

                <div className='headerBtn'>
                    <button className="rounded-lg btn">Start Applying</button>
                </div>
            </div>
           

            
        </nav>
    );
};

export default Header;