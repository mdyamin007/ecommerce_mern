import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <nav className="w-full flex justify-between items-center px-20 py-6 shadow">
      <div>
        <Link to="/">
          <h1 className="text-4xl font-semibold text-teal-500 font-serif">
            Ashraful's Online Market
          </h1>
        </Link>
      </div>
      <nav>
        <Link to="/seller-checker">
          <div className="text-teal-500">Check Seller</div>
        </Link>
      </nav>
    </nav>
  );
};

export default NavBar;
