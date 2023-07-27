import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  
  const navigationLinks = [
    { text: 'Home', href: '/' },
    { text: 'About', href: '/about' },
    { text: 'Contact', href: '/contact' },
  ];

  return (
    <header className="bg-white h-[98px] flex flex-row py-[22px] px-20 box-border items-center justify-center sticky w-full top-[0] z-[2] text-center text-5xl text-primary-500 font-body-large-400 lg:pl-10 lg:pr-10 lg:box-border md:pl-6 md:pr-6 md:box-border">
      <div className="flex-1 flex flex-row items-center justify-between">
        <Link href="/">
          <div className="flex flex-row items-center justify-center gap-[8px]">
            <img className="w-11 h-11" alt="" src="/houseline.svg" />
            <div className="flex flex-col items-start justify-start">
              <div className="leading-[24px] font-semibold">REIS</div>
              <div className="text-sm leading-[16px] font-medium">
                Real Estate
              </div>
            </div>
          </div>
        </Link>
        {/* navigation links */}
        <div className="flex md:hidden gap-10 mx-auto" >
          {/* Use the map function to generate the navigation links */}
          {navigationLinks.map((link) => {
            const{href,text}=link
           return <Link key={link} href={href}>
              <div className="text-primary-900 cursor-pointer hover:scale-110 transition-transform">
                {text}
              </div>
            </Link>
          })}
        </div>
        <button
          onClick={toggleMenu}
          className="hidden md:flex cursor-pointer border-none p-0 bg-transparent flex flex-row items-center justify-center"
        >
          <img
            className="w-6 h-6 overflow-hidden flex"
            alt=""
            src="/notification.svg"
          />
        </button>
      </div>
      {/* Responsive Hamburger navigation links Menu */}
      <div className={` ${menuOpen ? 'block' : 'hidden'} absolute top-[98px] left-[20px] right-[20px] bg-white border rounded shadow`}>
        {/* Use the map function to generate the navigation links */}
        {navigationLinks.map((link) => (
          <Link key={link.href} href={link.href}>
            <div className="text-primary-900 cursor-pointer p-4">
              {link.text}
            </div>
          </Link>
        ))}
      </div>
    </header>
  );
};

export default Header;
