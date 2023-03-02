import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { ImageContext } from 'Context/contextApi';
import { API_CONST } from 'constants/api';

function Gallery({ data }) {
  const { setSelectedImage } = useContext(ImageContext);

  let imageData;

  if (data.length > 0) {
    imageData = data.map((photo) => {
      let url = `${API_CONST.IMAGE_URL}/${photo.server}/${photo.id}_${photo.secret}_m.jpg`;

      return (
        <NavLink to={photo.title} onClick={() => setSelectedImage(url)}>
          <img
            src={url}
            alt={photo.title}
            className='card-img-top h-100 img-fluid'
          />
        </NavLink>
      );
    });
  } else {
    return <h2>No Images</h2>;
  }

  return (
    <div className='px-4'>
      <div className='container'>
        <div className='row row-cols-1 gy-4 gx-4 row-cols-md-2 row-cols-lg-4'>
          {imageData.map((img) => img)}
        </div>
      </div>
    </div>
  );
}

export default Gallery;
