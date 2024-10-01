import React from 'react';
import { FaGithub, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <footer style={{ 
      backgroundColor: '#f8f9fa', 
      padding: '10px 0', 
      borderTop: '1px solid #d1d1d1', 
      position: 'fixed', 
      bottom: 0, 
      width: '100%' 
    }}>
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        padding: '0 20px', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between' 
      }}>
        <div style={{ textAlign: 'left', marginLeft: '20px', fontSize: '14px', color: '#6c757d' }}>
          © 2023. All rights reserved.
        </div>
        <div style={{ display: 'flex', alignItems: 'center', marginRight: '20px' }}>
          <a href="https://github.com" style={{ marginRight: '10px', color: '#000', fontSize: '20px' }} onMouseOver={(e) => e.target.style.color = '#007bff'} onMouseOut={(e) => e.target.style.color = '#000'}>
            <FaGithub />
          </a>
          <a href="https://instagram.com" style={{ marginRight: '10px', color: '#000', fontSize: '20px' }} onMouseOver={(e) => e.target.style.color = '#007bff'} onMouseOut={(e) => e.target.style.color = '#000'}>
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

