import Link from 'next/link';
import { useRouter } from 'next/router';
import { useGlobalContext } from "../components/context/GlobalContext";

const Header = () => {
  const router = useRouter();
  const { menuOpen, setMenuOpen, isLoggedIn, setIsLoggedIn } = useGlobalContext();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  

  const navigationLinks = [
    { text: 'Home', href: '/' },
    { text: 'Properties', href: '/properties' },
    { text: 'Contact', href: '/#contact' },
    { text: 'Sign in', href: '/signing/signIn' },
    { text: 'Sign up', href: '/signing/signUp' },


  ];

  return (
    <header className="bg-white h-[98px] flex flex-row py-[22px] px-20 box-border items-center justify-center sticky w-full top-[0] z-[2] text-center text-5xl text-primary-500 font-body-large-400 lg:pl-10 lg:pr-10 lg:box-border md:pl-6 md:pr-6 md:box-border">
      <div className="flex-1 flex flex-row items-center justify-between">
        <Link href="/">
          <div className="flex flex-row items-center justify-center gap-[10px]">
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
        <div className="flex md:hidden gap-[8rem] mx-auto">
          {/* Use the map function to generate the navigation links */}
          {navigationLinks.map(({ text, href }) => (
            <div
              key={text}
              className="text-primary-900 cursor-pointer hover:scale-110 transition-transform text-xl hover:text-primary-500"
            >
              <Link href={href}>
                <span>{text}</span>
              </Link>
            </div>
          ))}
        </div>
        {/* Conditional rendering for Sign In / Sign Out buttons */}

        <button
          onClick={toggleMenu}
          className="hidden md:flex cursor-pointer border-none p-0 bg-transparent flex flex-row items-center justify-center whitespace-nowrap"
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
        {navigationLinks.map(({ text, href }) => (
          <Link key={text} href={href}>
            <div className="text-primary-900 cursor-pointer p-4">
              {text}
            </div>
          </Link>
        ))}
        
      </div>
    </header>
  );
};

export default Header;