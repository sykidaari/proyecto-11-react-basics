import { useParams } from 'react-router-dom';
import { useReqData } from '../../utils/hooks/useReqData';
import { contentApi } from '../../api/axios';
import Loader from '../../components/atoms/Loader/Loader';
import Error from '../../components/atoms/Error/Error';
import NotFound from '../NotFound/NotFound';
import EpisodeCard from '../../components/organisms/EpisodeCard/EpisodeCard';

const Episode = () => {
  const { id } = useParams();

  const {
    data: episode,
    loading,
    error
  } = useReqData({
    request: () => contentApi.get(`episodes/${id}`)
  });

  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Error />
      ) : !episode ? (
        <NotFound />
      ) : (
        <EpisodeCard episode={episode} detail={true} />
      )}
    </>
  );
};

export default Episode;
