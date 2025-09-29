import { cN } from '../../../utils/classNameManager';
import StyledP from '../../atoms/StyledP/StyledP';

const Footer = () => {
  return (
    <footer className='bg-gradient-to-b from-app-teal-500/10  to-app-teal-500/20  py-2 z-50 backdrop-blur-xs'>
      <StyledP
        className={cN(
          'text-right max-w-4xl m-auto text-app-sand-50/70 text-xs',
          //MEDIA QUERIES:
          ' sm:max-app-main:pr-3 max-sm:text-center max-sm:px-3'
        )}
      >
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
