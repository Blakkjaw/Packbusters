import React from 'react';
import './NavSelector.scss';
function NavSelector() {
    const selected = true;
  return (
  <div className='navSelector'>
      <div className={`navSelector__button ${selected ? 'navSelector__amateurSelected': 'navSelector__amateur'}`}>
        <span className='unskew'>Amateur</span>
      </div>

      <div className={`navSelector__button ${!selected ? 'navSelector__pornSelected': 'navSelector__porn'}`}>
        <span className='unskew'>Porn</span>
      </div>
  </div>
  );
}

export default NavSelector;
