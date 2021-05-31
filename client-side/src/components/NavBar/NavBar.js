import React from 'react';
import NavItem from './NavItem/NavItem';
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className="flex flex-col">
      <Link><NavItem icon={'TODO'} label="News" /></Link>
      
      <Link><NavItem icon={'TODO'} label="Media" /></Link>
      <Link><NavItem icon={'TODO'} label="Favorites" /></Link>
      <Link> <NavItem icon={'TODO'} label="Login" /> </Link>
    </div>
  );
};

export default NavBar;
