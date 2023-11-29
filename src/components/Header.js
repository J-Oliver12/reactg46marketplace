import React from 'react';
import logo from '../components/icon.png'; 

const Header = () => {
  return (
    <header style={{ backgroundColor: 'red', color: 'white', height: '130px', position: 'relative'  }}>
      <div className="black-bar" style={{ backgroundColor: 'black', display: 'flex', alignItems: 'center', padding: '10px' }}>
        {/* Styles to the image to adjust its size */}
        <img src={logo} alt="Logo" style={{ height: '30px', marginRight: '10px' }} />

        {/* Bootstrap classes to create a row with menu options */}
        <ul className="nav" style={{ listStyleType: 'none', margin: 0, padding: 0 }}>
          <li className="nav-item">
            <a className="nav-link" href="#" style={{ color: 'white' }}>Login</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#" style={{ color: 'white' }}>Sign Up</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#" style={{ color: 'white' }}>About</a>
          </li>
          {/* More menu options */}
        </ul>
      </div>
      <h1 className="mb-4" style={{ paddingLeft: '260px', marginLeft: '20px', fontSize: '1.5em', marginTop: '20px' }}>Marketplace UI!</h1>
      {/* Other header content */}
    </header>
  );
};

export default Header;














