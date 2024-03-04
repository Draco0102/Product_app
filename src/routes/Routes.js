import ProductsMainPage from "../pages/ProductMainPage";
import HomePage from "../pages/HomePage";
export const routes = [
  {
    path: "/",
    element: <HomePage />,
    children: [],
  },
  {
    path: "/home",
    element: <HomePage />,
    children: [],
  },
  {
    path: "/products",
    element: <ProductsMainPage />,
    children: [],
  },
];
