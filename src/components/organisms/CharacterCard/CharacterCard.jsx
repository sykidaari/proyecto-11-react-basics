import ContentBlock from '../../atoms/ContentBlock/ContentBlock';
import Card from '../../molecules/Card/Card';

const CharacterCard = ({ className, character }) => {
  const { photoUrl, name } = character;

  return (
    <Card title={name} boxClassName={className}>
      <ContentBlock className='h-full'>
        <img src={photoUrl} alt={name} className='rounded-md object-contain' />
      </ContentBlock>
    </Card>
  );
};

export default CharacterCard;
