import StyledP from '../../atoms/StyledP/StyledP';

const Footer = () => {
  return (
    <footer className=' bg-gradient-to-b from-app-teal-500/10  to-app-teal-500/20  py-2 z-50 backdrop-blur-xs'>
      <StyledP className='text-right max-w-4xl m-auto text-app-sand-50/70 text-xs'>
        Created by{' '}
        <a
          href='https://github.com/sykidaari'
          target='_blank'
          className='font-app-detail font-semibold underline hover:text-app-sand-50/90'
        >
          Kira
        </a>{' '}
        with the power of the elements!
      </StyledP>
    </footer>
  );
};

export default Footer;
