import React from 'react';

const NavItem = ({ icon, label }) => {
  return (
    <button className="rounded-full py-3 px-6 font-bold text-xl">
      {label}
    </button>
  );
};

export default NavItem;
