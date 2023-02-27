import { useContext, useEffect } from 'react';
import Gallery from '../Images/Gallery';
import { ImageContext } from '../../Context/contextApi';

function Container({ query }) {
  const { images, loading, onSearchResult } = useContext(ImageContext);
  useEffect(() => {
    onSearchResult(query);
  });

  return <div> {loading ? <h1>Loading</h1> : <Gallery data={images} />}</div>;
}

export default Container;
