import { useParams } from 'react-router-dom';
import { characterApi } from '../../api/axios';
import { useReqData } from '../../utils/hooks/useReqData';
import CharacterCard from '../../components/organisms/CharacterCard/CharacterCard';
import Loader from '../../components/atoms/Loader/Loader';
import Error from '../../components/atoms/Error/Error';
import NotFound from '../NotFound/NotFound';

const Character = () => {
  const { id } = useParams();

  const {
    data: character,
    loading,
    error
  } = useReqData({
    request: () => characterApi.get(id)
  });

  if (loading) return <Loader />;
  if (error) return <Error />;
  if (!character) return <NotFound />;

  return <CharacterCard character={character} detail />;
};

export default Character;
