import React, { useState } from 'react';

function Header() {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 200); // Reset the click effect after 200ms
  };

  return (
    <header style={{ backgroundColor: '#f8f9fa', padding: '3px 0', borderBottom: '1px solid #d1d1d1' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ fontSize: '16px', fontWeight: 'bold' }}>
          My Website
        </div>
        <nav style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
          <ul style={{ listStyle: 'none', padding: '0', display: 'flex', alignItems: 'center' }}>
            <li style={{ marginRight: '20px' }}>
              <a href="#" style={{ textDecoration: 'none', color: '#000', fontSize: '14px', transition: 'color 0.3s' }} onMouseOver={(e) => e.target.style.color = '#007bff'} onMouseOut={(e) => e.target.style.color = '#000'}>Home</a>
            </li>
            <li style={{ marginRight: '20px' }}>
              <a href="#" style={{ textDecoration: 'none', color: '#000', fontSize: '14px', transition: 'color 0.3s' }} onMouseOver={(e) => e.target.style.color = '#007bff'} onMouseOut={(e) => e.target.style.color = '#000'}>About</a>
            </li>
            <li style={{ marginRight: '20px' }}>
              <a href="#" style={{ textDecoration: 'none', color: '#000', fontSize: '14px', transition: 'color 0.3s' }} onMouseOver={(e) => e.target.style.color = '#007bff'} onMouseOut={(e) => e.target.style.color = '#000'}>Services</a>
            </li>
            <li style={{ marginRight: '20px' }}>
              <a href="#" style={{ textDecoration: 'none', color: '#000', fontSize: '14px', transition: 'color 0.3s' }} onMouseOver={(e) => e.target.style.color = '#007bff'} onMouseOut={(e) => e.target.style.color = '#000'}>Contact</a>
            </li>
          </ul>
        </nav>
        <button 
          style={{ 
            padding: '8px 20px', 
            backgroundColor: '#007bff', 
            color: '#fff', 
            border: 'none', 
            borderRadius: '4px', 
            cursor: 'pointer', 
            transition: 'background-color 0.3s, transform 0.3s',
            transform: isClicked ? 'scale(0.95)' : 'scale(1)'
          }} 
          onMouseOver={(e) => { e.target.style.backgroundColor = '#0056b3'; e.target.style.transform = 'scale(1.05)'; }} 
          onMouseOut={(e) => { e.target.style.backgroundColor = '#007bff'; e.target.style.transform = 'scale(1)'; }}
          onClick={handleClick}
        >
          Contact
        </button>
      </div>
    </header>
  );
}

export default Header;
