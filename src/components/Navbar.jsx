import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <header className="py-6">
        <div className="container flex flex-wrap justify-between items-center gap-4">
          <Link to="/">
            <h1 className="font-semibold text-white">SupaBase</h1>
          </Link>

          <nav className="flex items-center justify-start gap-8  ">
            <NavLink
              to="/"
              className="hover:text-white text-[#afafaf] duration-150"
            >
              Home
            </NavLink>

            <NavLink
              to="/create"
              className="hover:text-white text-[#afafaf] duration-150"
            >
              Create
            </NavLink>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
