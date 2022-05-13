import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import SingleProduct from './pages/SingleProduct';
import Error from './pages/Error';
import SharedLayout from './pages/SharedLayout';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import ProtectedRoute from './pages/ProtectedRoute';
import SharedProductlayout from './pages/SharedProductlayout';

const App = () => {
  const [user, setUser] = useState(null);
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='products' element={<SharedProductlayout />}>
            <Route index element={<Products />} />
            <Route path=':productId' element={<SingleProduct />} />
          </Route>
          <Route path='login' element={<Login setUser={setUser} />} />
          <Route
            path='dashboard'
            element={
              <ProtectedRoute user={user}>
                <Dashboard user={user} />
              </ProtectedRoute>
            }
          />
          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
