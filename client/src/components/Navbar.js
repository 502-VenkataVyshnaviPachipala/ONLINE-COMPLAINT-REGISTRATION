import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={styles.navbar}>
      {/* Brand logo aligned securely on the left side */}
      <Link to="/" style={styles.logo}>ComplaintCare</Link>
      
      {/* Navigation button menu links grouped tightly on the right side */}
      <div style={styles.navLinks}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/register" style={styles.link}>SignUp</Link>
        <Link to="/login" style={styles.link}>Login</Link>
      </div>
    </nav>
  );
}

const styles = {
  navbar: {
    backgroundColor: '#1a252f', 
    display: 'flex',
    alignItems: 'center',
    padding: '15px 50px',
    width: '100%',
    height: '60px',
    boxSizing: 'border-box',
    position: 'relative', // Enables absolute layout positioning inside
  },
  logo: {
    color: '#ffffff',
    fontSize: '20px',
    fontWeight: 'bold',
    textDecoration: 'none',
    position: 'absolute',
    left: '50px', // Forces logo to stay locked on the left
  },
  navLinks: {
    display: 'flex',
    gap: '25px', 
    position: 'absolute',
    right: '50px', // Forces the entire link group to stay locked on the right side
  },
  link: {
    color: '#ffffff',
    fontSize: '16px',
    fontWeight: '500',
    textDecoration: 'none',
    cursor: 'pointer'
  },
};

export default Navbar;
