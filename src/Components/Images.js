const Images = (props) => {
  return (
    <div>
      <h3>{props.category} Pictures</h3>
      <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 justify-content-center'>
        {props.data.map((photo) => (
          <div key={photo.id} className='col mb-3'>
            <div className='card shadow-sm h-100'>
              <img
                src={`http://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_m.jpg`}
                alt={photo.title}
                className='card-img-top h-100 img-fluid'
                style={{ objectFit: 'cover', height: '200px' }}
                onClick={() =>
                  window.open(
                    `http://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_z.jpg`
                  )
                }
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Images;
