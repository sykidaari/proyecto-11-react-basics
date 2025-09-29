import { useState } from 'react';
import { cN } from '../../../utils/classNameManager';
import StyledImg from '../../atoms/StyledImg/StyledImg';
import StyledNavLink from '../../atoms/StyledNavLink/StyledNavLink';

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className='fixed top-0 w-screen bg-gradient-to-b from-app-teal-500 to-app-teal-500/10  py-2 px-5 z-50 backdrop-blur-xs'>
      {/* MOBILE MENU BUTTON */}
      <button
        onClick={() => setOpen(!open)}
        className={cN('w-9 hidden max-[400px]:block')}
      >
        <StyledImg src='menu.png' alt='menu' />
      </button>
      <nav>
        <ul
          className={cN(
            'flex justify-between max-w-4xl m-auto',
            // MEDIA QUERIES/MOBILE MENU:
            'max-[400px]:flex-col max-[400px]:items-start max-[400px]:*:w-30 max-[400px]:gap-1 max-[400px]:mt-3',
            !open && 'max-[400px]:hidden'
          )}
        >
          <li>
            <StyledNavLink to='/'>Home</StyledNavLink>
          </li>
          <li>
            <StyledNavLink to='/characters'>Characters</StyledNavLink>
          </li>
          <li>
            <StyledNavLink to='/episodes'>Episodes</StyledNavLink>
          </li>
          <li>
            <StyledNavLink to='/quiz'>Quiz</StyledNavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
