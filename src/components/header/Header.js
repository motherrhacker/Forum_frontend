import React from 'react';
import s from './Header.module.css';

const Header = () => {
    return(
      <header className={s.appHeader}>
            <img src="/logo.png"/>
      </header>
    );
}

export default Header;