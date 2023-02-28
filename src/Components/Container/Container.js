import { useContext, useEffect } from 'react';
import Gallery from '../Images/Gallery';
import { ImageContext } from '../../Context/contextApi';
import Loading from '../Search/Loading';

function Container({ query }) {
  const { images, loading, onSearchResult } = useContext(ImageContext);

  useEffect(() => {
    onSearchResult(query);
  }, [query]);

  return <div> {loading ? <Loading /> : <Gallery data={images} />}</div>;
}

export default Container;
