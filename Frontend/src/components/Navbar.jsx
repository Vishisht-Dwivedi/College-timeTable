import React from 'react';
import logo from '../logo.png'; 

function Navbar() {
  return (
    <>
    <nav className="navbar">
      <div className="nav-container">
        <a href="/" className="logo-container">
          <img src={logo} alt="College Logo" className="college-logo" />
          <span className="college-name"><h1>Indian Institute Of Information Technology, Bhopal</h1></span>
        </a>
        
        <div className="nav-links">
          <a href="/" className="nav-link">Home</a>
          <a href="/timetable" className="nav-link">Timetable</a>
          <a href="/about" className="nav-link">About</a>
        </div>
      </div>
    </nav>
  
    
    <div className="hero-section">
    <div className="hero-content">
      <h2>IIIT Bhopal Timetable Management System</h2>
      <p>View, search, and manage academic schedules for students and faculty</p>
      <div className="hero-buttons">
        <button className="primary-btn">View Timetables</button>
        <button className="secondary-btn">Faculty Login</button>
      </div>
    </div>
  </div>
  <div className="page-header">
  <div className="header-content">
    <h1 className="header-title">
      <span className="header-icon">📅</span>
      Search Timetable
    </h1>
    <p className="header-subtitle">
      Find schedules by teacher name or department
      <span className="help-tooltip" title="You can search by partial names or department codes">
        <svg className="help-icon" viewBox="0 0 24 24">
          <path d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z"/>
        </svg>
      </span>
    </p>
  </div>
  <div className="header-divider"></div>
</div>

</>

    

  


    
   


    
  );
}

export default Navbar;