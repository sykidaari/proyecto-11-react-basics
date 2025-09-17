import { contentApi } from '../../api/axios';
import EpisodeCard from '../../components/organisms/EpisodeCard/EpisodeCard';
import CardGallery from '../../components/organisms/CardGallery/CardGallery';
import Loader from '../../components/atoms/Loader/Loader';
import PageMenu from '../../components/organisms/pageMenu/pageMenu';
import { useReqData } from '../../utils/hooks/useReqData';
import Error from '../../components/atoms/Error/Error';
import { useEffect, useState } from 'react';

const Episodes = () => {
  const {
    data: episodes,
    loading,
    error
  } = useReqData({
    request: () => contentApi.get('episodes'),
    edit: (data) => data.slice(0, -2)
  });

  const [seasons, setSeasons] = useState([]);

  useEffect(() => {
    setSeasons([...new Set(episodes.map((episode) => episode.Season))]);
  }, [episodes]);

  return (
    <>
      <PageMenu prefix='Season' pages={seasons} />

      {loading && <Loader />}
      {error && <Error />}

      <CardGallery items={episodes} to='episode'>
        {(episode) => <EpisodeCard episode={episode} className='w-3xs h-17' />}
      </CardGallery>
    </>
  );
};

export default Episodes;
