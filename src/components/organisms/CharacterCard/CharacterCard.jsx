import { cN } from '../../../utils/classNameManager';
import { groupKeys } from '../../../utils/objectHelpers';
import ContentBlock from '../../atoms/ContentBlock/ContentBlock';
import StyledImg from '../../atoms/StyledImg/StyledImg';
import StyledP from '../../atoms/StyledP/StyledP';
import Card from '../../molecules/Card/Card';
import DetailBlock from '../../molecules/DetailBlock/DetailBlock';

const CharacterCard = ({ character, detail = false }) => {
  const { photoUrl, name } = character;

  const detailAttributes = groupKeys(character, [
    'gender',
    'affiliation',
    'position',
    'profession',
    'weapon',
    'predecessor'
  ]);

  return (
    <Card
      title={name}
      className={cN(
        'w-2xs h-74',
        detail && 'h-auto w-md hover:scale-100 ',
        // MEDIA QUERIES:
        'max-[320px]:w-[calc(100vw-18px)]',
        detail && 'max-[500px]:w-[calc(100vw-18px)]'
      )}
    >
      <ContentBlock className='h-full '>
        <StyledImg
          className={cN('max-h-48', detail && 'max-w-full max-h-74')}
          externalSrc={photoUrl}
          alt={name}
        />
      </ContentBlock>

      {detail && detailAttributes.length > 0 && (
        <DetailBlock detailAttributes={detailAttributes}></DetailBlock>
      )}
    </Card>
  );
};

export default CharacterCard;
