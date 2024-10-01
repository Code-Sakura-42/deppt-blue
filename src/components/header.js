import React, { useState, useEffect } from 'react';

function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      // Scrolling down
      setIsVisible(false);
    } else {
      // Scrolling up
      setIsVisible(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header style={{ 
      backgroundColor: 'rgba(255, 255, 255, 0.1)', 
      padding: '3px 0', 
      position: 'fixed', 
      top: isVisible ? '0' : '-60px', 
      width: '100%', 
      transition: 'top 0.3s',
      backdropFilter: 'blur(10px)', // Blur effect
      WebkitBackdropFilter: 'blur(10px)', // Blur effect for Safari
      border: '1px solid rgba(255, 255, 255, 0.2)', // Border for glass effect
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Subtle shadow
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ fontSize: '16px', fontWeight: 'bold', color: '#fff' }}>
          My Website
        </div>
        <nav style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
          <ul style={{ 
            listStyle: 'none', 
            padding: '0', 
            display: isMobileMenuOpen ? 'block' : 'flex', 
            alignItems: 'center', 
            flexDirection: isMobileMenuOpen ? 'column' : 'row', 
            position: isMobileMenuOpen ? 'absolute' : 'static', 
            top: isMobileMenuOpen ? '60px' : 'auto', 
            left: isMobileMenuOpen ? '0' : 'auto', 
            width: isMobileMenuOpen ? '100%' : 'auto', 
            backgroundColor: isMobileMenuOpen ? 'rgba(0, 0, 0, 0.8)' : 'transparent', 
            transition: 'all 0.3s ease-in-out'
          }}>
            <li style={{ marginRight: isMobileMenuOpen ? '0' : '20px', marginBottom: isMobileMenuOpen ? '10px' : '0' }}>
              <a href="#" style={{ textDecoration: 'none', color: '#fff', fontSize: '14px', transition: 'color 0.3s' }} onMouseOver={(e) => e.target.style.color = '#007bff'} onMouseOut={(e) => e.target.style.color = '#fff'}>Home</a>
            </li>
            <li style={{ marginRight: isMobileMenuOpen ? '0' : '20px', marginBottom: isMobileMenuOpen ? '10px' : '0' }}>
              <a href="#" style={{ textDecoration: 'none', color: '#fff', fontSize: '14px', transition: 'color 0.3s' }} onMouseOver={(e) => e.target.style.color = '#007bff'} onMouseOut={(e) => e.target.style.color = '#fff'}>About</a>
            </li>
            <li style={{ marginRight: isMobileMenuOpen ? '0' : '20px', marginBottom: isMobileMenuOpen ? '10px' : '0' }}>
              <a href="#" style={{ textDecoration: 'none', color: '#fff', fontSize: '14px', transition: 'color 0.3s' }} onMouseOver={(e) => e.target.style.color = '#007bff'} onMouseOut={(e) => e.target.style.color = '#fff'}>Services</a>
            </li>
            <li style={{ marginRight: isMobileMenuOpen ? '0' : '20px', marginBottom: isMobileMenuOpen ? '10px' : '0' }}>
              <a href="#" style={{ textDecoration: 'none', color: '#fff', fontSize: '14px', transition: 'color 0.3s' }} onMouseOver={(e) => e.target.style.color = '#007bff'} onMouseOut={(e) => e.target.style.color = '#fff'}>Contact</a>
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
            transition: 'background-color 0.3s'
          }} 
          onMouseOver={(e) => { e.target.style.backgroundColor = '#0056b3'; }} 
          onMouseOut={(e) => { e.target.style.backgroundColor = '#007bff'; }}
        >
          Contact
        </button>
      </div>
    </header>
  );
}

export default Header;
