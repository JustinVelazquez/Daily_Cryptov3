import React from 'react';
import NavItem from './NavItem/NavItem';

const NavBar = () => {
  return (
    <div className="flex flex-col">
      <NavItem icon={'TODO'} label="News" />
      <NavItem icon={'TODO'} label="Media" />
      <NavItem icon={'TODO'} label="Favorites" />
      <NavItem icon={'TODO'} label="Login" />
    </div>
  );
};

export default NavBar;
