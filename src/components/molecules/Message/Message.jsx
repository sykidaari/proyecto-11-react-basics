import { Link } from 'react-router-dom';
import ContentBlock from '../../atoms/ContentBlock/ContentBlock';
import ContentBox from '../../atoms/ContentBox/ContentBox';
import P from '../../atoms/P/P';

const Message = ({ children, img, alt }) => {
  return (
    <ContentBox className='m-auto w-2xs gap-3'>
      <ContentBlock className='flex-col gap-2.5'>
        <P className='flex flex-col justify-center items-center'>{children}</P>
        <ContentBlock className='py-0.5 '>
          <P className='font-app-detail  font-bold'>
            Go to{' '}
            <Link to='/' className='underline underline-offset-2'>
              homepage
            </Link>
          </P>
        </ContentBlock>
      </ContentBlock>
      <ContentBlock>
        <img src={img} alt={alt} className='rounded-sm' />
      </ContentBlock>
    </ContentBox>
  );
};

export default Message;
