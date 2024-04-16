import React from 'react';
import './App.css';


const Skills = () => {
  return (
    <section id='skills'>
        <span className='skilltitle'>What I do</span>
        <span className='skilldesc'>I am a skilled and passionate web designer with a strong understanding of design principles and a keen eye for detail. With proficiency in HTML, CSS, and JavaScript, I specialize in crafting visually appealing and user-friendly websites. Additionally, as a certified ServiceNow developer with both CSA and CAD credentials, I bring expertise in configuring and customizing ServiceNow solutions. Furthermore, my knowledge of cybersecurity in networks enhances my ability to create secure and resilient web experiences</span>
        <div className='skillbars'>
            <div className='skillbar'>
                <div className='skillbartext'>
                    <h2>Service now Developer</h2>
                    <p>I've specialized in configuring and customizing ServiceNow solutions as a certified developer with CSA and CAD credentials.</p>
                </div>
            </div>
            <div className='skillbar'>
                <div className='skillbartext'>
                    <h2>Web Developer</h2>
                    <p>As a web developer, I possess comprehensive knowledge in HTML, CSS, and JavaScript, along with proficiency in Redux and ReactJS. My skill set enables me to build dynamic and responsive web applications, ensuring seamless user experiences and efficient data management.</p>
                </div>
            </div>
            <div className='skillbar'>
                <div className='skillbartext'>
                    <h2>Cybersecurity</h2>
                    <p>As a cybersecurity Begineer, I possess expertise in threat detection, risk assessment, and mitigation strategies. My knowledge spans areas such as network security, encryption protocols, and vulnerability management. With a focus on ensuring data integrity and confidentiality, I implement robust cybersecurity measures to safeguard against cyber threats and breaches.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills

