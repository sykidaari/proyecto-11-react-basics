import CardGallery from '../../components/organisms/CardGallery/CardGallery';
import CharacterCard from '../../components/organisms/CharacterCard/CharacterCard';
import { useReqData } from '../../utils/hooks/useReqData';
import { characterApi } from '../../api/axios';
import Loader from '../../components/atoms/Loader/Loader';
import Error from '../../components/atoms/Error/Error';
import { useParams } from 'react-router-dom';
import NotFound from '../NotFound/NotFound';
import PageMenu from '../../components/organisms/PageMenu/PageMenu';

const Characters = () => {
  const { pagenr } = useParams();

  const currentPageNr = pagenr ? Number(pagenr) : 1;

  const {
    data: characters,
    loading,
    error
  } = useReqData({
    request: () =>
      characterApi.get('', {
        params: { perPage: 20, page: currentPageNr }
      }),
    edit: (data) => data.map(({ _id, ...rest }) => ({ id: _id, ...rest })),
    deps: [currentPageNr]
  });

  if (loading) return <Loader />;
  if (error) return <Error />;
  if (!characters.length) return <NotFound />;

  return (
    <>
      <PageMenu
        pages={['<', currentPageNr, '>']}
        to='/characters/page'
        pagenr={pagenr}
      />

      <CardGallery items={characters} to='/characters/character'>
        {(character) => <CharacterCard character={character} />}
      </CardGallery>
    </>
  );
};

export default Characters;
