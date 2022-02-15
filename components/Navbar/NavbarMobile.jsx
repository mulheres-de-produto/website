import React, { useState } from 'react';
import Link from 'next/link'
import data from './MenuListOptions';
import MdpIconLink from './MdpIconLink';

function MobileMenuButton({onClick}) {

    return (
        <div className="mobile-menu-button flex items-center md:hidden">
          <button className="outline-none mobile-menu-button" onClick={onClick}>
            <svg
              className="w-6 h-6 text-gray-500"
              x-show="!showMenu"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
    )
};
  
function NavBarItems({isOpen}) {
    const className = isOpen ? 'h-full delay-150 duration-300 ease-in-out' : 'h-0';
    return (
        <div className={className}>
        <ul>
            {data.map (({href, text}) => (
            <li key={`menu-${text}`} className="active" >
                <Link href={href}>
                    <a className="block px-2 py-4 text-sm font-semibold text-white bg-green-500">
                    {text.toUpperCase()}
                    </a>
                </Link>
            </li>
            ))}
        </ul>
        </div>
    )
}

function onClick(isOpen, fn) {
    fn(!isOpen)
};

export default function NavbarMobile() {
    const [isOpen, toggleMenu] = useState(false);
    console.log('NavbarMobile', isOpen);

    return (
        <div className="navbar-mobile laptop:hidden">
            <div className='flex justify-between'>
                <MdpIconLink/>
                <MobileMenuButton onClick={()=>onClick(isOpen, toggleMenu)}/>
            </div>
            <NavBarItems isOpen={isOpen}/>
        </div>
    )
}