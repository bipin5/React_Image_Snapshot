import ImageContextProvider from '../../Context/contextApi';
import Handle from '../Search/Handle';
import Item from '../Search/Item';
import { Route, Routes, Navigate } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';

function App() {
  return (
    <ImageContextProvider>
      <Handle />
      <Routes>
        <Route
          exact
          path='/'
          element={<Navigate to={ROUTES.MOUNTAIN} replace />}
        />
        <Route
          exact
          path={ROUTES.BIRD}
          element={<Item categoryInput={ROUTES.BIRD} />}
        />
        <Route
          exact
          path={ROUTES.MOUNTAIN}
          element={<Item categoryInput={ROUTES.MOUNTAIN} />}
        />
        <Route
          exact
          path={ROUTES.BEACH}
          element={<Item categoryInput={ROUTES.BEACH} />}
        />
        <Route
          exact
          path={ROUTES.FOOD}
          element={<Item categoryInput={ROUTES.FOOD} />}
        />
        <Route path={ROUTES.SEARCH} element={<Item />} />
      </Routes>
    </ImageContextProvider>
  );
}

export default App;
