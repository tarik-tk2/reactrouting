import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div>
            <nav style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem"
        }}>
      <Link to="/container">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/details">Details</Link>
  </nav>
        </div>
    );
};

export default Nav;