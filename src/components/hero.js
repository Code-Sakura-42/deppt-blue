    import React from 'react';

function Hero() {
  return (
    <section style={{ 
      backgroundImage: 'url(/wallpaper.jpg)', 
      backgroundSize: 'cover', 
      backgroundPosition: 'center', 
      padding: '30px 0', 
      textAlign: 'center',
      height: 'calc(100vh - 60px)', // Adjust height to account for header and footer
      display: 'flex', // Use flexbox to center content
      alignItems: 'center', // Center content vertically
      justifyContent: 'center' // Center content horizontally
    }}>
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        padding: '0 20px',
        background: 'rgba(255, 255, 255, 0.1)', // Glass effect background
        borderRadius: '10px', // Rounded corners
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Subtle shadow
        backdropFilter: 'blur(10px)', // Blur effect
        WebkitBackdropFilter: 'blur(10px)', // Blur effect for Safari
        border: '1px solid rgba(255, 255, 255, 0.2)', // Border for glass effect
        width: '90%', // Ensure the div is responsive
        maxWidth: '1200px', // Max width for larger screens
        display: 'flex', // Use flexbox to adapt to content size
        flexDirection: 'column', // Arrange children in a column
        alignItems: 'center', // Center children horizontally
        margin: '20px' // Add margin to the center card
      }}>
        <h1 style={{ 
          fontSize: '36px', 
          marginBottom: '20px', 
          color: '#fff' 
        }}>
          Welcome to Our Website
        </h1>
        <p style={{ 
          fontSize: '16px', 
          marginBottom: '30px', 
          color: '#fff' 
        }}>
          We are glad to have you here. Explore our services and offerings.
        </p>
        <a href="#" style={{ 
          padding: '8px 20px', 
          backgroundColor: '#007bff', 
          color: '#fff', 
          borderRadius: '4px', 
          textDecoration: 'none', 
          transition: 'background-color 0.3s',
          display: 'inline-block', // Ensure the button is inline-block
          marginTop: '20px', // Add margin to separate from the paragraph
          marginBottom: '20px' // Add bottom margin to the button
        }} onMouseOver={(e) => e.target.style.backgroundColor = '#0056b3'} onMouseOut={(e) => e.target.style.backgroundColor = '#007bff'}>
          Learn More
        </a>
      </div>
    </section>
  );
}

export default Hero;
