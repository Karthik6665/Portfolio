import React from 'react';
import {Link} from 'react-router-dom';
import './App.css';
import pic from './logo.png';

const Navbar = () => {
  return (
    <div>
        <nav className='navbar'>
            <img src={pic} className='lo' alt='logo'/>
            <div>
                <Link to='/home' className='navitems'>Home</Link>
                <Link to='/About' className='navitems'>About</Link>
                <Link to='/Projects' className='navitems'>Projects</Link>
                <Link to='/Internships' className='navitems'>Internships</Link>
                <Link to='/Skills' className='navitems'>skills</Link>
            </div>
            <Link to='/contactme'><button className='cbtn'>Contact me</button></Link>
        </nav>
      
    </div>
  )
}

export default Navbar
