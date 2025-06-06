import React from 'react';
import './navBar.css';

function NavBar() {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li><a href="#Hello" className="nav-link">Hello!</a></li>
        <li><a href="#work-experience" className="nav-link">Work Experience</a></li>
        <li><a href="#skills" className="nav-link">Skills</a></li>
        <li><a href="#education" className="nav-link">Education</a></li>
      </ul>
    </nav>
  );
}

export default NavBar;
