import React from 'react'
import Navbar from './Navbar'
import Info from './Info'
import Skills from './Skills';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Project from './Project';
import Intern from './Intern';
import Contact from './Contact';
import Lang from './Lang';


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Info/>
        <Routes>
          <Route path='/About' Component={Skills}/>
          <Route path='/Projects' Component={Project}/>
          <Route path='/Internships' Component={Intern}/>
          <Route path='/contactme' Component={Contact}/>
          <Route path='/skills' Component={Lang}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
