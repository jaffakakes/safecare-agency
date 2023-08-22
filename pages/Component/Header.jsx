import React from 'react';

const Header = ({ headerText }) => {
    const isBrowser = typeof window !== "undefined";
    const isMobile = isBrowser && window.innerWidth <= 768;
    
    const styles = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
      height: isMobile ? '100vh' : '300px',
      backgroundColor: '#053C6E',
      color: 'white',
      fontWeight: 'bold',
      paddingLeft: '5rem',
      paddingRight: '5rem',
      fontSize: isMobile ?'35px':'55px',
      textAlign: isMobile ? 'center' : 'left',
  };
  
    return (
      <div style={styles}>
        <p>{headerText}</p>
      </div>
    );
  };

export default Header;