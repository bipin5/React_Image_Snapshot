import { NavLink } from 'react-router-dom';
import { ROUTES } from 'constants/routes';

const Category = () => {
  return (
    <div className='pt-0 text-center'>
      <div className='container row'>
        <div className='row row-cols-1 gx-5 gy-4 px-2 row-cols-md-1 row-cols-lg-5 d-flex justify-content-center ms-1 p-2'>
          <NavLink
            className='m-2 pt-2 py-2 d-flex justify-content-center text-decoration-none bg-dark text-white '
            to={ROUTES.MOUNTAIN}
          >
            Mountain
          </NavLink>
          <NavLink
            className=' m-2 pt-2 py-2 d-flex justify-content-center text-decoration-none bg-dark text-white '
            to={ROUTES.BEACH}
          >
            Beaches
          </NavLink>
          <NavLink
            className=' m-2 pt-2 py-2 d-flex justify-content-center text-center text-decoration-none bg-dark text-white '
            to={ROUTES.BIRD}
          >
            Birds
          </NavLink>
          <NavLink
            className='m-2 pt-2 d-flex py-2 justify-content-center text-decoration-none bg-dark text-white '
            to={ROUTES.FOOD}
          >
            Food
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Category;
