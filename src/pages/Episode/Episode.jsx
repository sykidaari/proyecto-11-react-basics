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
    request: () => {
      if (id === '125' || id === '126') {
        return Promise.resolve({ data: null });
      } // episodes 125 and 126 are incorrect data, nonexistent, so skip API call
      return contentApi.get(`episodes/${id}`);
    }
  });

  if (loading) return <Loader />;
  if (error || episode === null) return <Error />;
  if (!episode) return <NotFound />;

  return <EpisodeCard episode={episode} detail />;
};

export default Episode;
