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
      titleBlockClassName={cN(
        'w-3xs h-18',
        detail && 'w-auto',
        // MEDIA-QUERIES:
        'max-[330px]:w-50 max-[260px]:w-40',

        // for detail view
        'max-[360px]:min-w-full'
      )}
      title={Title.slice(1, -1)}
      className={cN(
        detail && 'hover:scale-100 w-xs',
        // MEDIA-QUERIES:
        'max-[360px]:w-full'
      )}
    >
      {detail && detailAttributes.length > 0 && (
        <DetailBlock detailAttributes={updatedAttributes}></DetailBlock>
      )}
    </Card>
  );
};

export default EpisodeCard;
