import ContentBlock from '../../atoms/ContentBlock/ContentBlock';
import StyledP from '../../atoms/StyledP/StyledP';

const DetailBlock = ({ detailAttributes }) => {
  return (
    <ContentBlock className='p-4 justify-start'>
      <ul className='list-disc ml-4'>
        {detailAttributes.map(([key, value]) => (
          <li key={key}>
            <StyledP className='text-start mb-1.5'>
              <span className='capitalize'>{key}: </span>
              <span className='font-semibold'>{value}</span>
            </StyledP>
          </li>
        ))}
      </ul>
    </ContentBlock>
  );
};

export default DetailBlock;
