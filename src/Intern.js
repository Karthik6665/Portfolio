import React from 'react';
import './App.css';

const Intern = () => {
  return (
    <section id='skills'>
        <span className='skilltitle'>Internships</span>
        <div className='skillbars'>
            <div className='skillbar'>
                <div className='skillbartext'>
                    <h2 className='head'>CodeClause <span className='x'>JUNE[2023] - JULY[2023]  </span></h2> 
                    <span className='r'>Role:<span className='role'>Web Developer</span></span>
                    <li> Developed various web applications using HTML, CSS, and JavaScript in Visual Studio as an intern at CodeClause.</li>
                    <li> Created a stopwatch, to-do list, complete survey system, and a YouTube clone as part of the web developmentprojects.</li>
                    <li> Enhanced web development skills and gained practical experience in creating interactive and dynamic web solutions</li>
                </div>
            </div>
            <div className='skillbar'>
                <div className='skillbartext'>
                <h2 className='head'>Oasis Infobyte <span className='x'>APRIL[2023] - MAY[2023] </span></h2>
                <span className='r'>Role:<span className='role'>Web Developer</span></span> 
                    <li> Worked as a web developer at Oasis Infobyte and built various web applications using HTML, CSS, and JavaScript.</li>
                    <li> Developed a landing page, an impressive portfolio, and a temperature converter application within Visual Studio Code and contributed to creating interactive and user-friendly web solutions</li>
                </div>
            </div>
            <div className='skillbar'>
                <div className='skillbartext'>
                <h2 className='head'>Cisco-AICTE <span className='x'> JUNE[2023] - JULY[2023] </span></h2> 
                    <span className='r'>Role:<span className='role'>Network Engineer</span></span>
                    <li>Designed and implemented a comprehensive network topology for the college as a Network Engineer intern at Cisco through AICTE.</li>
                    <li> Configured wireless routers, servers, DHCP, and DNS servers for the network.</li>
                    <li> Conducted packet flow investigations to ensure seamless connectivity and efficient data transfer between different sections of the college network</li>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Intern
