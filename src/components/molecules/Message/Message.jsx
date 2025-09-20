import { Link } from 'react-router-dom';
import ContentBlock from '../../atoms/ContentBlock/ContentBlock';
import ContentBox from '../../atoms/ContentBox/ContentBox';
import StyledP from '../../atoms/StyledP/StyledP';
import StyledImg from '../../atoms/StyledImg/StyledImg';

const Message = ({ children, img, alt }) => {
  return (
    <ContentBox className='m-auto w-2xs gap-3'>
      <ContentBlock className='flex-col gap-2.5'>
        <StyledP className='flex flex-col justify-center items-center'>
          {children}
        </StyledP>
        <ContentBlock className='py-0.5 '>
          <StyledP className='font-app-detail  font-bold'>
            Go to{' '}
            <Link to='/' className='underline underline-offset-2'>
              homepage
            </Link>
          </StyledP>
        </ContentBlock>
      </ContentBlock>
      <ContentBlock>
        <StyledImg src={img} alt={alt} />
      </ContentBlock>
    </ContentBox>
  );
};

export default Message;
