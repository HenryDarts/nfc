import './navbar.styles.scss'
import React, { useState } from 'react'
import { ArrowDropDown, Notifications, Search } from '@material-ui/icons'

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null);
    };

    return (
        <div className={isScrolled ? 'navbar scrolled' : 'navbar'}>
            <div className="container">

                <div className="left">
                    <img src='https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg' alt='Netflix Logo' />

                    <span>Homepage</span>
                    <span>Series</span>
                    <span>Movies</span>
                    <span>New And Popular</span>
                    <span>My List</span>
                </div>

                <div className="right">
                    <Search className='icon' />
                    <span>KID</span>
                    <Notifications className='icon' />
                    <img src="/images/profile.jpg" alt="Profile" />

                    <div className="profile">
                        <ArrowDropDown className='icon' />
                        <div className="options">
                            <span>Settings</span>
                            <span>Log Out</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Navbar