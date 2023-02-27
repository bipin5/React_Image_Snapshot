import { useContext, useState } from 'react';
import { ImageContext } from '../../Context/contextApi';

const Search = ({ navigate, onHandleSubmit }) => {
  const { loading, setLoading } = useContext(ImageContext);
  const [selectedQuery, setSelectedQuery] = useState('');

  const submitHandler = (event) => {
    // eslint-disable-next-line no-lone-blocks
    {
      loading ? (
        <h1>Loading</h1>
      ) : (
        onHandleSubmit(event, navigate, selectedQuery)
      );
    }
    setSelectedQuery('');
    setLoading(true);
  };

  const onQueryChange = (event) => {
    setSelectedQuery(event.target.value);
  };
  return (
    <form onSubmit={submitHandler}>
      <div className='search-bar-container w-100'>
        <div className='input-group d-flex'>
          <input
            type='search'
            className='flex-grow-1'
            placeholder='Search'
            aria-label='Search'
            aria-describedby='search-addon'
            value={selectedQuery}
            onChange={onQueryChange}
          />
          <button type='submit' className='btn btn-dark'>
            Search
          </button>
        </div>
      </div>
    </form>
  );
};

export default Search;
