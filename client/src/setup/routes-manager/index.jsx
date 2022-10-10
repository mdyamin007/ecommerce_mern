import { Route, Routes } from "react-router-dom";
import Home from "../../pages/home";
import Login from "../../pages/login";
import Register from "../../pages/register";
import SellerChecker from "../../pages/seller-checker";
import ProductDetails from "../../pages/product";

const RoutesManager = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="seller-checker" element={<SellerChecker />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="productdetails" element={<ProductDetails />} />
    </Routes>
  );
};

export default RoutesManager;
