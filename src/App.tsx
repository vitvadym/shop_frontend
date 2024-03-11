import ErrorPage from './pages/404ErrorPage';
import CartPage from './pages/CartPage';
import ProductDetail from './pages/ProductDetailPage';
import Home from './pages/HomePage';
import { Toaster } from 'react-hot-toast';

import Layout from './components/Layout';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Paths } from './constants/constants';

import ProductsList from './pages/ProductsList';
import Favorites from './pages/Favorites';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path={Paths.HOME}
            element={<Layout />}
          >
            <Route
              index
              element={<Home />}
            />
            <Route
              path={Paths.CART}
              element={<CartPage />}
            />
            <Route
              path={Paths.FAVORITES}
              element={<Favorites />}
            />
            <Route
              path={Paths.PRODUCT_DETAIL}
              element={<ProductDetail />}
            />
            <Route
              path={Paths.PRODUCTS_LIST}
              element={<ProductsList />}
            />
            <Route
              path={Paths.ERROR}
              element={<ErrorPage />}
            />
          </Route>
        </Routes>
        <Toaster
          position='bottom-center'
          toastOptions={{ duration: 1000 }}
        />
      </BrowserRouter>
    </>
  );
};

export default App;
