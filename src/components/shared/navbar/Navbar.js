import React from 'react';
import './Navbar.scss';
import NavButton from './NavButton';
import HomeIcon from '@mui/icons-material/Home';
import MovieIcon from '@mui/icons-material/Movie';
import PhotoIcon from '@mui/icons-material/Photo';
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';
import NavSelector from './NavSelector';
import NavPillButton from './NavPillButton';
import { useTranslation } from 'react-i18next';


function Navbar() {
  const { t } = useTranslation();
  const loggedIn = true;
  return (
  <div className='navbar'>
      <div className='navbar__left'>
        <img src="" alt=""></img>
        <h3>Packbusters</h3>
        <NavSelector></NavSelector>
        <NavButton Icon={HomeIcon} title={t('navBar.home')}></NavButton>
        <NavButton Icon={MovieIcon} title={t('navBar.movies')}></NavButton>
        <NavButton Icon={PhotoIcon} title={t('navBar.sets')}></NavButton>
        <NavButton Icon={CollectionsBookmarkIcon} title={t('navBar.library')}></NavButton>
        
      </div>


      <div className='navbar__right'>
        {loggedIn ? 
              <div>
                <NavButton avatar='https://lh3.googleusercontent.com/ogw/ADea4I5C7sWbw6jIWsmpaDkA1xFtE7oBDlotF50liO8iCII=s83-c-mo' title='Blakkjaw'></NavButton>
              </div>
        :
                <div>
                <NavPillButton title={t('navBar.register')}></NavPillButton>
                <NavPillButton login={true} title={t('navBar.login')}></NavPillButton>
              </div>
        }

      </div>
  </div>
  );
}

export default Navbar;
