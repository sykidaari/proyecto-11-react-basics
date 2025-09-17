import H1 from '../../components/atoms/H1/H1';
import P from '../../components/atoms/P/P';
import ContentBlock from '../../components/atoms/ContentBlock/ContentBlock';
import ContentBox from '../../components/atoms/ContentBox/ContentBox';

const Home = () => {
  return (
    <div className='flex flex-row items-center m-auto'>
      <ContentBox as='section' className='max-w-sm'>
        <ContentBlock>
          <H1>Welcome to Wan Shi Tong's Archives!</H1>
        </ContentBlock>
        <ContentBlock>
          <P>
            Greetings, humans. I am{' '}
            <span className='font-semibold italic'>Wan Shi Tong</span>, He Who
            Knows Ten Thousand Things. These are my Archives; a collection
            within my great library, dedicated to preserving knowledge of the
            Avatar, their companions, and the events that shaped their world.
            Here you will find records of characters, accounts of episodes, and
            even challenges to test your wisdom. Explore with respect, for
            knowledge is a gift not to be squandered.
          </P>
        </ContentBlock>
      </ContentBox>

      <img
        src='/assets/imgs/wan-shi-ton-big.png'
        className='w-lg object-contain z-10 drop-shadow-xl drop-shadow-app-teal-800'
      ></img>
    </div>
  );
};

export default Home;
