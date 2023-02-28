import SearchBar from './SearchBar';
import { useNavigate } from 'react-router-dom';
import Category from './Category';

const Handle = () => {
  let navigate = useNavigate();

  const submitHandler = (event, navigate, queryInput) => {
    event.preventDefault();
    console.log(queryInput);
    let url = `/search/${queryInput}`;
    console.log(url);
    navigate(url);
  };

  return (
    <div className='row justify-content-center'>
      <div className='col-12 col-lg-8'>
        <h1 className='mb-3 text-center'> Image Snapshot</h1>
        <div className='row'>
          <SearchBar navigate={navigate} onHandleSubmit={submitHandler} />
          <Category />
        </div>
      </div>
    </div>
  );
};

export default Handle;
