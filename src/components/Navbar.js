import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ background: 'blue', textAlign: 'center', marginBottom: "20px" }}>
      <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
        Take me home
      </Link>
    </nav>
  );
}

export default Navbar;