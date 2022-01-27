import React from 'react';
import './Navbar.scss';
import NavButton from './NavButton';
import HomeIcon from '@mui/icons-material/Home';
import MovieIcon from '@mui/icons-material/Movie';
import PhotoIcon from '@mui/icons-material/Photo';
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';
import NavSelector from './NavSelector';

function Navbar() {
  return (
  <div className='navbar'>
      <div className='navbar__left'>
        <img src="" alt=""></img>
        <h3 className='navbar__pageName'>Packbusters</h3>
        <NavSelector></NavSelector>
        <NavButton Icon={HomeIcon} title='Home'></NavButton>
        <NavButton Icon={MovieIcon} title='Movies'></NavButton>
        <NavButton Icon={PhotoIcon} title='Sets'></NavButton>
        <NavButton Icon={CollectionsBookmarkIcon} title='My Library'></NavButton>
        
      </div>


      <div className='navbar__right'>
        <NavButton title='Log in'></NavButton>
        <NavButton title='Sign up'></NavButton>
      </div>
  </div>
  );
}

export default Navbar;
