import { Link } from 'react-router-dom';
import Message from '../../components/molecules/Message/Message';

const NotFound = () => {
  return (
    <Message img='youre-not-bright.gif' alt='funny gif'>
      <span className='text-2xl font-app-detail'>404</span> Sorry, this page
      doesn't exist.
    </Message>
  );
};

export default NotFound;
