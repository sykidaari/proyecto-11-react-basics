import H1 from '../../components/elements/H1/H1';
import P from '../../components/elements/P/P';
import ContentBlock from '../../components/wrappers/ContentBlock/ContentBlock';
import SectionBox from '../../components/wrappers/SectionBox/SectionBox';

const Home = () => {
  return (
    <>
      <SectionBox>
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
      </SectionBox>

      <img
        src='/assets/imgs/wan-shi-ton-big.png'
        className='w-lg z-10 drop-shadow-xl drop-shadow-app-teal-800'
      ></img>
    </>
  );
};

export default Home;
