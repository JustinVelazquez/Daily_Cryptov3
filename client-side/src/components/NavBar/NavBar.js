import React from 'react';
import NavItem from './NavItem/NavItem';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
// import { getPosts, getMedia } from '../../actions/posts';

const NavBar = () => {
  const dispatch = useDispatch();

  // const handlePosts = () => dispatch(getPosts())
  // const handleMedia = () => dispatch(getMedia())

  return (
    <div className="flex flex-col">
      <NavItem
        // onClick={handlePosts}
        icon={'TODO'}
        label="News"
      />
      <NavItem
        // onClick={handleMedia}
        icon={'TODO'}
        label="Media"
      />
      <NavItem icon={'TODO'} label="Favorites" />
      <NavItem icon={'TODO'} label="Login" />
    </div>
  );
};

export default NavBar;
