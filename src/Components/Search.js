const Search = (props) => {
  const submitHandler = () => {
    props.onQueryChange(props.selectedQuery);
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
            value={props.selectedQuery}
            onChange={props.onQueryChange}
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
