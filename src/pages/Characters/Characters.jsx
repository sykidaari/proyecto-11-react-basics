import CardGallery from '../../components/organisms/CardGallery/CardGallery';
import CharacterCard from '../../components/organisms/CharacterCard/CharacterCard';
import { useReqData } from '../../utils/hooks/useReqData';
import { characterApi } from '../../api/axios';
import Loader from '../../components/atoms/Loader/Loader';
import Error from '../../components/atoms/Error/Error';

const Characters = () => {
  const {
    data: characters,
    loading,
    error
  } = useReqData({
    request: () => characterApi.get(),
    edit: (data) => data.map(({ _id, ...rest }) => ({ id: _id, ...rest }))
  });

  return (
    <>
      {loading && <Loader />}
      {error && <Error />}

      <CardGallery items={characters} to='character'>
        {(character) => <CharacterCard character={character} />}
      </CardGallery>
    </>
  );
};

export default Characters;
