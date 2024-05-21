import React, { useEffect } from 'react';
import AutoType from '../Autotype/AutoType.js';
import './MainPage.css';

function MainPage() {
  useEffect(() => {
    const handleKeyDown = (event) => {
      const container = document.querySelector('.main-container');
      if (event.key === 'ArrowDown') {
        container.style.transform = 'translateY(-100vh)';
      } else if (event.key === 'ArrowUp') {
        container.style.transform = 'translateY(0)';
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className='main-container'>
      <div className="outer-div1">
        <div className="inner-div">
          <div className='name'>
            <h1>Abhinav Awasthi</h1>
          </div>
          <div className="container">
            <h1>\<AutoType /></h1>
          </div>
          <br/>
          <div className='links'>
            <h3>
              <a href="#">GitHub &nbsp;</a>
              <a href="#"> &nbsp; LinkedIn</a>
            </h3>
          </div>
        </div>
      </div>
      <div className='outer-div2'>
        <div className='phoneNumber'><h3>📞 +91-8174037551</h3></div>
        <div className='email'><h3>📧<a href="mailto:abhinavawasthi8sep@gmail.com">abhinavawasthi8sep@gmail.com</a></h3></div>
        <div className='address'><h3>🏠 393 Reserve Police Line, Lucknow</h3></div>
        <div className='resume'><a href = "../../assets/resume-abhinav.pdf">📚 Download My Resume</a></div>
      </div>
    </div>
  );
}

export default MainPage;
