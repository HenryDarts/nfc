import React from 'react'
import Navbar from '../components/navbar/Navbar.component'
import './home.styles.scss'

const Home = () => {
    return (
        <div className='home'>
            <Navbar />
            <img src="/images/profile.jpg" alt="Profile" width="100%" />
        </div>
    )
}

export default Home