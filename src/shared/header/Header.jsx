import React from 'react';
import './Header.scss';

const Header = () => {
  return (
    <header>
      <div className="header-container animate__animated animate__fadeIn">
        <div className="first-title">
          <h2>
            <span className="bigger">[ </span> Making your Life Easier
            <span className="bigger"> ]</span>
          </h2>
        </div>
        <div className="main-title">
          <h1>Discover the World</h1>
        </div>
      </div>
    </header>
  )
};

export default Header;