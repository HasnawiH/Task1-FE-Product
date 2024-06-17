import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductListPage from './pages/ProductList';
import ProductDetailsPage from './pages/ProductDetailsPage';

function Router () {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductListPage />} />
          <Route path="/products/:productId" element={<ProductDetailsPage />} />
        </Routes>
    </BrowserRouter>
  );
};

export default Router;
