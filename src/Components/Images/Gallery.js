import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { ImageContext } from '../../Context/contextApi';

function Gallery({ data }) {
  const { setSelectedImage } = useContext(ImageContext);
  const imageURL = `http://live.staticflickr.com`;

  let imageData;

  if (data.length > 0) {
    imageData = data.map((photo) => {
      let url = `${imageURL}/${photo.server}/${photo.id}_${photo.secret}_m.jpg`;

      return (
        <NavLink to={photo.title} onClick={() => setSelectedImage(url)}>
          <img
            src={url}
            alt={photo.title}
            className='card-img-top h-100 img-fluid'
            style={{ objectFit: 'cover', height: '200px' }}
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

  //   return (
  //     <div>
  //       <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 justify-content-center'>
  //         {data.map((photo) => (
  //           <div key={photo.id} className='col mb-3'>
  //             <div className='card shadow-sm h-100'>
  //               <NavLink to={photo.title} onClick={setSelectedImage(imageURL)}>
  //                 <img
  //                   src={`${imageURL}/${photo.server}/${photo.id}_${photo.secret}_m.jpg`}
  //                   alt={photo.title}
  //                   className='card-img-top h-100 img-fluid'
  //                   style={{ objectFit: 'cover', height: '200px' }}
  //                 />
  //               </NavLink>
  //             </div>
  //           </div>
  //         ))}
  //       </div>
  //     </div>
  //   );
}

export default Gallery;
