import React from 'react';
import './NavPillButton.scss';

function NavPillButton({title, login}) {
  return (
    <div className={login ? 'navPillButton__login': 'navPillButton'}>
        <span classname='navPillButton__title'>{title}</span>
    </div>
    );
}

export default NavPillButton;
