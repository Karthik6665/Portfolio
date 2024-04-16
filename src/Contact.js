import React,{ useState, useRef }  from 'react';
import emailjs from 'emailjs-com';
import './App.css';
const Contact = () => {
    const [data, setData] = useState({
        name: "",
        mobile_number:null,
        email: "",
        message: ""
      });
    
      const { name, email, message,mobile_number } = data;
    
      const form = useRef(); 
    
      const changeHandler = e => {
        setData({ ...data, [e.target.name]: e.target.value });
      };
    
      const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_hgrlteo', 'template_xzpt0aj', e.target, 'wAB59C0hNiSgetluO')
          .then(
            (response) => {
              console.log('SUCCESS!', response.status, response.text);
              setData({
                name: "",
                mobile_number:"",
                email: "",
                message: ""
            });
            },
            (error) => {
              console.log('FAILED...', error);
            }
          );
    
        form.current.reset();
      };
    
      return (
        <div className="contact-form-container">
          <div>
          <h1>Contact me</h1>
          </div>
          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <label>Name</label>
            <input type="text" name="name" value={name} onChange={changeHandler} />
            <label>Mobile No</label>
            <input type="tel" name="mobile_number" value={mobile_number} onChange={changeHandler} />
            <label>Email</label>
            <input type="email" name="email" value={email} onChange={changeHandler} />
            <label>Message</label>
            <textarea name="message" value={message} onChange={changeHandler} />
            <button type="submit" className="submit-button">Send</button>
          </form>
        </div>
      );
    };
export default Contact
