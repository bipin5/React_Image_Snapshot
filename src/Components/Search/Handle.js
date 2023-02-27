import Search from './Search';
import { useNavigate } from 'react-router-dom';
import Category from './Category';

const Handle = () => {
  let navigate = useNavigate();

  const submitHandler = (event, navigate, query) => {
    event.preventDefault();
    console.log(query);
    let url = `/search/${query}`;

    navigate(url);
  };

  return (
    <div className='row justify-content-center'>
      <div className='col-12 col-lg-8'>
        <h1 className='mb-3 text-center'> Image Snapshot</h1>
        <div className='row'>
          <div className='col'>
            <Search navigate={navigate} onHandleSubmit={submitHandler} />
          </div>
          <Category />
        </div>
      </div>
    </div>
  );
};

export default Handle;
