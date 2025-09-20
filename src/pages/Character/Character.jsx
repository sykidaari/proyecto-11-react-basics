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

  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Error />
      ) : !character ? (
        <NotFound />
      ) : (
        <CharacterCard character={character} detail={true} />
      )}
    </>
  );
};

export default Character;
