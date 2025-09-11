import P from '../elements/P/P';

const Footer = () => {
  return (
    <footer className='fixed bottom-0 w-screen bg-gradient-to-b from-app-teal-500/10  to-app-teal-500/20  py-3 z-50 backdrop-blur-xs'>
      <P className='text-right max-w-4xl m-auto text-app-sand-50/70'>
        Created by{' '}
        <a
          href='https://github.com/sykidaari'
          target='_blank'
          className='font-app-detail font-semibold underline hover:text-app-sand-50/90'
        >
          Kira
        </a>{' '}
        with the power of the elements!
      </P>
    </footer>
  );
};

export default Footer;
