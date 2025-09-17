import Card from '../../molecules/Card/Card';

const EpisodeCard = ({ className, episode }) => {
  const { Season, NumInSeason, Title } = episode;

  return <Card titleBlockClassName={className} title={Title.slice(1, -1)} />;
};

export default EpisodeCard;
