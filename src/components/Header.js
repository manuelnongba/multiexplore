import '../styles/Header.css';
import React from 'react';
import Link from './Link';

const Header = () => {
  return (
    <div
      style={{ borderBottom: '0.5px solid white' }}
      className="ui secondary pointing menu"
    >
      <Link href="/" className="item">
        Wikipedia
      </Link>
      <Link href="/youtube" className="item">
        Youtube
      </Link>
      <Link href="/google" className="item">
        Google
      </Link>
    </div>
  );
};

export default Header;
