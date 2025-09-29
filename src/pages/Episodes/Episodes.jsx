import { contentApi } from '../../api/axios';
import EpisodeCard from '../../components/organisms/EpisodeCard/EpisodeCard';
import CardGallery from '../../components/organisms/CardGallery/CardGallery';
import Loader from '../../components/atoms/Loader/Loader';
import PageMenu from '../../components/organisms/PageMenu/PageMenu';
import { useReqData } from '../../utils/hooks/useReqData';
import Error from '../../components/atoms/Error/Error';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NotFound from '../NotFound/NotFound';
import { cN } from '../../utils/classNameManager';

const Episodes = () => {
  const {
    data: episodes,
    loading,
    error
  } = useReqData({
    request: () => contentApi.get('episodes'),
    edit: (data) => data.slice(0, -2)
    // last 2 episodes are incorrect data, nonexistent
  });

  const [seasons, setSeasons] = useState([]);

  useEffect(() => {
    setSeasons([...new Set(episodes.map((episode) => Number(episode.Season)))]);
  }, [episodes]);

  const { pagenr } = useParams();

  const currentSeason = pagenr ? Number(pagenr) : 1;

  const episodesBySeason = episodes.filter(
    (episode) => Number(episode.Season) === currentSeason
  );

  if (loading) return <Loader />;
  if (error) return <Error />;
  if (!episodesBySeason.length) return <NotFound />;

  return (
    <>
      <PageMenu
        prefix='Season'
        pages={seasons}
        to='/episodes/season'
        pagenr={pagenr}
        shrink
      />

      <CardGallery items={episodesBySeason} to='/episodes/episode'>
        {(episode) => <EpisodeCard episode={episode} className='w-3xs h-17' />}
      </CardGallery>
    </>
  );
};

export default Episodes;
