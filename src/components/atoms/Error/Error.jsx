import Message from '../../molecules/Message/Message';
import ContentBlock from '../ContentBlock/ContentBlock';
import ContentBox from '../ContentBox/ContentBox';
import P from '../P/P';

const Error = () => {
  return (
    <Message img='/assets/imgs/sad-knowledge-seeker.gif' alt='sad gif'>
      Something went wrong. Please reload the page or try again later!
    </Message>
  );
};

export default Error;
