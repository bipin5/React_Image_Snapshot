const Category = (props) => {
  const categories = ['Mountain', 'Beaches', 'Birds', 'Food'];

  const clickHandler = (category) => {
    props.onCategoryChange(category);
  };
  return (
    <div className='my-4'>
      <div className='row'>
        {categories.map((category) => (
          <div key={category} className='col-12 col-sm-auto mb-2 mb-sm-0'>
            <button
              type='button'
              className={`btn btn-sm btn-dark w-100`}
              onClick={() => clickHandler(category)}
            >
              {category}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
