import { Route, Routes } from "react-router-dom";
import Home from "../../pages/home";
import SellerChecker from "../../pages/seller-checker";

const RoutesManager = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="seller-checker" element={<SellerChecker />} />
    </Routes>
  );
};

export default RoutesManager;
