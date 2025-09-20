import { cN } from '../../../utils/classNameManager';
import { groupKeys } from '../../../utils/objectHelpers';
import Card from '../../molecules/Card/Card';
import DetailBlock from '../../molecules/DetailBlock/DetailBlock';

const EpisodeCard = ({ episode, detail = false }) => {
  const { Season, NumInSeason, Title } = episode;

  const detailAttributes = groupKeys(episode, [
    'Season',
    'NumInSeason',
    'OriginalAirDate'
  ]);

  const updatedAttributes = detailAttributes.map(([key, value]) => [
    key === 'NumInSeason'
      ? 'Episode'
      : key === 'OriginalAirDate'
      ? 'Aired'
      : key,
    value
  ]);

  return (
    <Card
      titleBlockClassName={cN('w-3xs h-18', detail && 'w-auto')}
      title={Title.slice(1, -1)}
      className={cN(detail && 'hover:scale-100 w-xs')}
    >
      {detail && detailAttributes.length > 0 && (
        <DetailBlock detailAttributes={updatedAttributes}></DetailBlock>
      )}
    </Card>
  );
};

export default EpisodeCard;
