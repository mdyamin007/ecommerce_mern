import { Route, Routes } from "react-router-dom";
import Home from "../../pages/home";
import Login from "../../pages/login";
import SellerChecker from "../../pages/seller-checker";

const RoutesManager = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="seller-checker" element={<SellerChecker />} />
      <Route path="login" element={<Login />} />
    </Routes>
  );
};

export default RoutesManager;
