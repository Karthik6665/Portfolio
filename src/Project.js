import React from 'react';
import './App.css';
import Projectimage from './Project.jpeg';

const Project = () => {
  return (
    <section id='skills'>
        <span className='skilltitle'>Project Name: <span className='pname'>IPsec Tunnel Enhanced Router Communication </span></span>
        <div className='skillbars'>
            <div className='skillbar'>
                <div className='skillbartext'>
                    <ul>
                        <li className='inf'>The project focuses on a network with three routers (R1, R2, and R3) and two PCs (PC1 and PC2). The physical connections involve serial cables, forming a chain.</li>
                        <li className='inf'>The network initially experiences packet loss due to lack of secure communication or routing issues. To address this, an IPsec tunnel is established between R1 and R3, enabling licensing and cryptography, Diffie-Hellman key exchange, Internet Key Exchange (IKE), ICMP, and AES.</li>
                        <li className='inf'>This enhances packet reliability and ensures secure communication between the routers, addressing the initial packet loss issue.</li>
                        <li className='inf'>The project demonstrates the importance of securing inter-router communication in complex network topologies, leading to improved network performance and data transmission.</li>
                    </ul>
                    <img className='Pimg' src={Projectimage} alt='project'/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Project;
