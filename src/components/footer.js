import React from 'react';
import { FaGithub, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <footer style={{ 
      backgroundColor: 'rgba(255, 255, 255, 0.1)', 
      padding: '10px 0', 
      position: 'fixed', 
      bottom: 0, 
      width: '100%', 
      backdropFilter: 'blur(10px)', 
      WebkitBackdropFilter: 'blur(10px)', 
      borderTop: '1px solid rgba(255, 255, 255, 0.3)' 
    }}>
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        padding: '0 20px', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between',
        flexDirection: 'row' 
      }}>
        <div style={{ textAlign: 'left', marginLeft: '20px', fontSize: '14px', color: '#ffffff' }}>
          © 2023. All rights reserved.
        </div>
        <div style={{ display: 'flex', alignItems: 'center', marginRight: '20px' }}>
          <a href="https://github.com" style={{ marginRight: '10px', color: '#ffffff', fontSize: '20px' }} onMouseOver={(e) => e.target.style.color = '#ffffff'} onMouseOut={(e) => e.target.style.color = '#ffffff'}>
            <FaGithub />
          </a>
          <a href="https://instagram.com" style={{ marginRight: '10px', color: '#ffffff', fontSize: '20px' }} onMouseOver={(e) => e.target.style.color = '#ffffff'} onMouseOut={(e) => e.target.style.color = '#ffffff'}>
            <FaInstagram />
          </a>
        </div>
      </div>
      <style jsx>{`
        @media (max-width: 768px) {
          footer div {
            flex-direction: column;
            align-items: center;
          }
          footer div div {
            margin-top: 10px;
          }
        }
      `}</style>
    </footer>
  );
}

export default Footer;

