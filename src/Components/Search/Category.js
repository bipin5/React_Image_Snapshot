import { NavLink } from 'react-router-dom';

const Category = () => {
  const categories = ['mountain', 'beaches', 'birds', 'food'];

  return (
    <div className='pt-0 text-center'>
      <div className='container row'>
        <div className='row row-cols-1 gx-5 gy-4 px-2 row-cols-md-1 row-cols-lg-5 d-flex justify-content-center ms-1 p-2'>
          {categories.map((category) => (
            <NavLink
              className='m-2 pt-2 py-2 d-flex justify-content-center text-decoration-none bg-dark text-white'
              to={category}
            >
              {category.toUpperCase()}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
