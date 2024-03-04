import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routes } from "./routes/Routes";
import { ProductProvider } from "./context/ProductProvider";
import CommonErrorBoundary from "./errorBoundary/commonErrorPage";
import "semantic-ui-css/semantic.min.css";
import Layout from "./components/layout/Layout";

const router = createBrowserRouter(routes);

function App() {
  return (
    <CommonErrorBoundary>
      <ProductProvider>
        <RouterProvider router={router}></RouterProvider>
      </ProductProvider>
    </CommonErrorBoundary>
  );
}

export default App;
