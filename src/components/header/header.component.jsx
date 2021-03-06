import React from 'react';
import { Link } from 'react-router-dom';

import './header.styles.css'


const Header = () => (
    <header >
        <div className = 'header-container'>
            <Link className='logo-container' to='/'>
                Logo Here
            </Link>
            <h1 className='page-title'>
            Sherice's Pieces
            </h1>
            <div className='options'>
                <Link className='option' to='/'>home |</Link>
                <Link className='option' to='/homepage2'>Homepage Option 2 |</Link>
                <Link className='option' to='/items'> items</Link>
                <Link className='option' to='/about'> about us</Link>
                <Link className='option' to='/faq'> faq</Link>
            </div>
        </div>
    </header>
);

export default Header;