import { ProductProvider } from "./context/product/index.js";
import AppRoutes from "./routes/AppRoutes.jsx";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <ProductProvider>
        <AppRoutes />
      </ProductProvider>
    </BrowserRouter>
  );
};

export default App;