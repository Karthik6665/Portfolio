import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';

const Info = () => {
  return (
    <section id='intro'>
        <div className='introcontent'>
            <span className='hello'>Hello,</span>
            <span className='introtext'>I'm<span className='introname'>Kartik</span><br/>Web Developer</span>
            <p className='intropara'>I am a skilled web developer with experience in creating<br/> virtually appealing and user friendly websites. </p>
            <Link><button className='hbtn'>Hire Me</button></Link>
        </div>
        
    </section>
  )
}

export default Info
