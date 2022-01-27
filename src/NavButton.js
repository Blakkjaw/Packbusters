import React from 'react';
import './NavButton.scss';

function NavButton({Icon, title}) {
  return (
    <div className='navButton'>
        {Icon && <Icon className='navButton__icon'></Icon>}
        <h3 classname='navButton__title'>{title}</h3>
    </div>
  );
}

export default NavButton;
