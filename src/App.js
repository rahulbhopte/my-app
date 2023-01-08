
import './App.css';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Login from './pages/Login';
import Product from './pages/Product';
import ProductList from './pages/ProductList';
import Register from './pages/Register';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ProductBar from './components/ProductBar';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "/register",
      element: <Register/>,
    },
    {
      path: "/login",
      element: <Login/>,
    },
    {
      path: "/cart",
      element: <Cart/>,
    },
    {
      path: "/productlist",
      element: <ProductList/>,
    },
    {
      path: "/product",
      element: <Product/>,
    },
  ]);
  return (
    <RouterProvider router={router} />
    
  );
}

export default App;
