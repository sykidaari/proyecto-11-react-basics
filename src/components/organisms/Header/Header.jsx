import StyledNavLink from '../../atoms/StyledNavLink/StyledNavLink';

const Header = () => {
  return (
    <header className='fixed top-0 w-screen bg-gradient-to-b from-app-teal-500 to-app-teal-500/10  py-2 px-5 z-50 backdrop-blur-xs'>
      <nav>
        <ul className='flex justify-between max-w-4xl m-auto'>
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
