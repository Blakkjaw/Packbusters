import React from 'react';
import './NavButton.scss';
import { Avatar } from '@mui/material';

function NavButton( {avatar, Icon, title}) {
  return (
    <div className='navButton'>
        {Icon && <Icon className='navButton__icon'></Icon>}
        {avatar && <Avatar className='navButton__icon' src={avatar}></Avatar>}
        <h3 className='navButton__title'>{title}</h3>
    </div>
  );
}

export default NavButton;
