import React from 'react'

import { headerMenus, searchKeywords, snsLink } from '../../data/header'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header id='header' role='banner'>
            <h1 className='header__logo'>
                <Link to='/'>
                    <em></em>
                    <span>coffee<br /><i>youtube</i></span>
                </Link>
            </h1>
            <nav className='header__menu'>
                <ul className='menu'>
                    {headerMenus.map((menu, key) => (
                        <li key={key}>
                            <Link to={menu.src}>
                                {menu.icon}<span>{menu.title}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
                <ul className='keyword'>
                    {searchKeywords.map((word, key) => (
                        <li key={key}>
                            <Link to={word.src}>
                                <span>{word.title}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
            <div className='header__sns'>
                <ul className='sns'>
                    {snsLink.map((sns, key) => (
                        <li key={key}>
                            <a href={sns.src} target='_blank' rel='noopener noreferrer' aria-label={sns.title}>
                                <span>{sns.icon}</span>
                            </a>
                        </li>
                    ))}
                </ul>

            </div>
        </header>
    )
}

export default Header
