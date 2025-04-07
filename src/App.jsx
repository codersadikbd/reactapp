import { BrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import ProfilePage from "./pages/ProfilePage";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <routes>
          <route path="/" element={<HomePage />} />
          <route path="/Product" element={<ProductPage />} />
          <route path="/Profile" element={<ProfilePage />} />
          <route path="*" element={<NotFound />} />
        </routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
