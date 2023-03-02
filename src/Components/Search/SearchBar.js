import { useContext, useState } from 'react';
import { ImageContext } from 'Context/contextApi';
import Loading from 'Components/Search/Loading';

const SearchBar = ({ navigate, onHandleSubmit }) => {
  const { loading, setLoading } = useContext(ImageContext);
  const [selectedQuery, setSelectedQuery] = useState('');

  const submitHandler = (e) => {
    {
      loading ? <Loading /> : onHandleSubmit(e, navigate, selectedQuery);
      setSelectedQuery('');
      setLoading(true);
    }
  };

  const onQueryChange = (event) => {
    setSelectedQuery(event.target.value);
  };
  return (
    <form onSubmit={submitHandler}>
      <div className='search-bar-container w-100'>
        <div className='input-group d-flex'>
          <input
            type='text'
            name='search'
            className='flex-grow-1'
            placeholder='Search'
            aria-label='Search'
            aria-describedby='search-addon'
            value={selectedQuery}
            onChange={onQueryChange}
          />
          <button
            type='submit'
            className='btn btn-dark'
            disabled={!selectedQuery.trim()}
          >
            Search
          </button>
        </div>
      </div>
    </form>
  );
};

export default SearchBar;
