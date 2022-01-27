import React from 'react';
import './NavSelector.scss';

import { useTranslation } from 'react-i18next';



function NavSelector() {
  const { t } = useTranslation();
  const selected = true;
  return (
  <div className='navSelector'>
      <div className={`navSelector__button ${selected ? 'navSelector__amateurSelected': 'navSelector__amateur'}`}>
        <span className='unskew'>{t('navBar.amateur')}</span>
      </div>

      <div className={`navSelector__button ${!selected ? 'navSelector__pornSelected': 'navSelector__porn'}`}>
        <span className='unskew'>{t('navBar.porn')}</span>
      </div>
  </div>
  );
}

export default NavSelector;
