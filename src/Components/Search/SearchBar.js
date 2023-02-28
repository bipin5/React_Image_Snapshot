import { useContext, useState } from 'react';
import { ImageContext } from '../../Context/contextApi';
import Loading from './Loading';

const SearchBar = ({ navigate, onHandleSubmit }) => {
  const { loading, setLoading } = useContext(ImageContext);
  const [selectedQuery, setSelectedQuery] = useState('');
  console.log('First', selectedQuery);

  const onQueryChange = (event) => {
    setSelectedQuery(event.target.value);
  };
  console.log('Second', selectedQuery);

  const submitHandler = (e) => {
    console.log({ selectedQuery });
    {
      loading ? <Loading /> : onHandleSubmit(e, navigate, selectedQuery);

      setSelectedQuery('');
      setLoading(true);
    }
  };

  return (
    <div className='search-bar-container w-100'>
      <div className='input-group d-flex'>
        <form onSubmit={submitHandler}>
          <input
            type='text'
            name='search'
            className='flex-grow-1'
            placeholder='Search'
            aria-label='Search'
            aria-describedby='search-addon'
            onChange={onQueryChange}
            value={selectedQuery}
          />
          <button
            type='submit'
            className='btn btn-dark'
            disabled={!selectedQuery.trim()}
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
