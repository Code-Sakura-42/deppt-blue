// End of Selection
import React from 'react';

function Hero() {
  return (
    <section style={{ 
      backgroundColor: '#e9ecef', 
      padding: '60px 0', 
      textAlign: 'center' 
    }}>
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        padding: '0 20px' 
      }}>
        <h1 style={{ 
          fontSize: '48px', 
          marginBottom: '20px', 
          color: '#343a40' 
        }}>
          Welcome to Our Website
        </h1>
        <p style={{ 
          fontSize: '18px', 
          marginBottom: '40px', 
          color: '#6c757d' 
        }}>
          We are glad to have you here. Explore our services and offerings.
        </p>
        <a href="#" style={{ 
          padding: '10px 30px', 
          backgroundColor: '#007bff', 
          color: '#fff', 
          borderRadius: '4px', 
          textDecoration: 'none', 
          transition: 'background-color 0.3s' 
        }} onMouseOver={(e) => e.target.style.backgroundColor = '#0056b3'} onMouseOut={(e) => e.target.style.backgroundColor = '#007bff'}>
          Learn More
        </a>
      </div>
    </section>
  );
}

export default Hero;
