import React from 'react';
import Html from './html.png';
import './App.css';
import css from './css.png';
import javascript from './javascript.png';
import c from './c.png';
import python from './python.png';
import devops from './Devops.png';
import react from './react.png';
import SQL from './SQL.png'

const Lang = () => {
  return (
    <section id='sec'>
        <div className='thirdouterdiv'>
            <img className='Himg' src={Html} alt='project'/>
            <span className='v'>HTML</span>
        </div>
        <div className='thirdouterdiv'>
            <img className='Himg' src={css} alt='project'/>
            <span className='v'>CSS</span>
        </div>
        <div className='thirdouterdiv'>
            <img className='Himg' src={javascript} alt='project'/>
            <span className='v'>JavaScript</span>
        </div>
        <div className='thirdouterdiv'>
            <img className='Himg' src={c} alt='project'/>
            <span className='v'>C</span>
        </div>
        <div className='thirdouterdiv'>
            <img className='Himg' src={devops} alt='project'/>
            <span className='v'>Devops</span>
        </div>
        <div className='thirdouterdiv'>
            <img className='Himg' src={python} alt='project'/>
            <span className='v'>Python</span>
        </div>
        <div className='thirdouterdiv'>
            <img className='Himg' src={react} alt='project'/>
            <span className='v'>ReactJs</span>
        </div>
        <div className='thirdouterdiv'>
            <img className='Himg' src={SQL} alt='project'/>
            <span className='v'>SQL</span>
        </div>
    </section>
  )
}

export default Lang
