import StyledH1 from '../../components/atoms/StyledH1/StyledH1';
import StyledP from '../../components/atoms/StyledP/StyledP';
import ContentBlock from '../../components/atoms/ContentBlock/ContentBlock';
import ContentBox from '../../components/atoms/ContentBox/ContentBox';
import StyledImg from '../../components/atoms/StyledImg/StyledImg';

const Home = () => {
  return (
    <div className='m-auto flex justify-center items-center'>
      <ContentBox as='section' className='max-w-sm'>
        <ContentBlock>
          <StyledH1>Welcome to Wan Shi Tong's Archives!</StyledH1>
        </ContentBlock>
        <ContentBlock>
          <StyledP>
            Greetings, humans. I am{' '}
            <span className='font-semibold italic'>Wan Shi Tong</span>, He Who
            Knows Ten Thousand Things. These are my Archives; a collection
            within my great library, dedicated to preserving knowledge of the
            Avatar, their companions, and the events that shaped their world.
            Here you will find records of characters, accounts of episodes, and
            even challenges to test your wisdom. Explore with respect, for
            knowledge is a gift not to be squandered.
          </StyledP>
        </ContentBlock>
      </ContentBox>

      <StyledImg
        src='wan-shi-ton-big.png'
        alt='Wan Shi Ton'
        className='w-lg drop-shadow-xl'
      />
    </div>
  );
};

export default Home;
