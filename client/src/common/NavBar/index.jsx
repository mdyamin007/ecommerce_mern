import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.jpg";

const NavBar = () => {
  return (
    <nav className="w-full flex justify-between items-center px-20 py-3 shadow">
      <Link to="/">
        <div className="flex justify-center items-center">
          <img src={Logo} className="h-12 w-12 mx-5" />
          <h1 className="text-4xl font-semibold text-teal-500 font-serif">
            Safe Market
          </h1>
        </div>
      </Link>
      <nav>
        <Link to="/seller-checker">
          <div className="text-teal-500">Check Seller</div>
        </Link>
      </nav>
    </nav>
  );
};

export default NavBar;
