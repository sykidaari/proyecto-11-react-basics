import { useState } from 'react';
import { contentApi } from '../../api/axios';
import ContentBlock from '../../components/atoms/ContentBlock/ContentBlock';
import Error from '../../components/atoms/Error/Error';
import Loader from '../../components/atoms/Loader/Loader';
import StyledP from '../../components/atoms/StyledP/StyledP';
import Card from '../../components/molecules/Card/Card';
import CardGallery from '../../components/organisms/CardGallery/CardGallery';
import { cN } from '../../utils/classNameManager';
import { useReqData } from '../../utils/hooks/useReqData';
import { Link } from 'react-router-dom';

const Quiz = () => {
  const {
    data: questions,
    loading,
    error
  } = useReqData({ request: () => contentApi.get('questions') });

  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [points, setPoints] = useState(0);

  if (loading) return <Loader />;
  if (error) return <Error />;

  if (currentQuestion === questions.length + 1)
    return (
      <Card title="You've finished the quiz!" className='hover:scale-100'>
        <ContentBlock className='flex-col gap-2'>
          <StyledP className='text-base'>
            Total Points:{' '}
            <span className='font-app-detail font-bold text-lg'>
              {points}/{questions.length}
            </span>
          </StyledP>
          <div
            className={cN(
              'flex gap-1 items-end',
              // MEDIA QUERIES:
              'max-[250px]:flex-col max-[250px]:items-center'
            )}
          >
            <ContentBlock
              className='py-0.5 hover:cursor-pointer'
              onClick={() => {
                setCurrentQuestion(1);
                setPoints(0);
              }}
            >
              <StyledP className='font-app-detail font-bold'>
                Restart quiz
              </StyledP>
            </ContentBlock>
            <span className='text-sm mb-0.5'>or</span>
            <ContentBlock className='py-0.5 '>
              <StyledP className='font-app-detail font-bold'>
                Go to{' '}
                <Link to='/' className='underline underline-offset-2'>
                  homepage
                </Link>
              </StyledP>
            </ContentBlock>
          </div>{' '}
        </ContentBlock>
      </Card>
    );

  return (
    <CardGallery className={'flex-col m-auto h-0'} items={questions}>
      {(q) => {
        const {
          id,
          question,
          possibleAnsers: possibleAnswers,
          correctAnswer
        } = q;

        return (
          <Card
            title={`Question ${id}.`}
            className={cN(
              'hover:scale-100 w-sm absolute bottom-1/2 translate-y-1/2 right-1/2 translate-1/2 hidden',
              currentQuestion === id && 'flex',
              // MEDIA QUERIES
              'max-[430px]:w-[calc(100%-32px)]',
              'max-[430px]:w-[calc(100%-18px)]'
            )}
          >
            <ContentBlock>
              <h3 className='font-app-detail text-sm text-center text-balance'>
                {question}
              </h3>
            </ContentBlock>

            <ul className='flex flex-col gap-2'>
              {possibleAnswers.map((answer) => (
                <li
                  key={answer}
                  onClick={() => {
                    setCurrentQuestion((previous) => previous + 1);
                    if (answer === correctAnswer) {
                      setPoints((previous) => previous + 1);
                    }
                  }}
                >
                  <ContentBlock className='hover:from-app-sepia-200 hover:cursor-pointer hover:font-semibold'>
                    <StyledP className='first-letter:uppercase'>
                      {answer}
                    </StyledP>
                  </ContentBlock>
                </li>
              ))}
            </ul>
          </Card>
        );
      }}
    </CardGallery>
  );
};

export default Quiz;
