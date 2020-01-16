import React from 'react';
import Link from '../atoms/link';
import Subheading from '../atoms/subheading';
import './navbar.scss';

const Navbar = props => {
    const navItems = [
        { name: 'Blog', link: '/blog' },
        { name: 'Gallery', link: '/gallery' },
        { name: 'Videos', link: '/videos' },
    ];

    return (
        <div className="navbar__container">
            {
                navItems.map((navItem) => 
                    <Link link={navItem.link} children={<Subheading children={navItem.name}/>}/>)
            }
        </div>
    );
}

export default Navbar;