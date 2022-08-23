import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <nav className="w-full flex items-center px-20 py-6 shadow">
      <Link to="/">
        <div>
          <h1 className="text-2xl font-semibold">Ashraful's Online Market</h1>
        </div>
      </Link>
    </nav>
  );
};

export default NavBar;
