import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white shadow-md px-6 py-3">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">ContractMate</h1>
        <div className="space-x-6">
          <NavLink to="/" className="hover:underline">
            Home
          </NavLink>
          <NavLink to="/vendors" className="hover:underline">
            Vendors
          </NavLink>
          <NavLink to="/contracts" className="hover:underline">
            Contracts
          </NavLink>
          <NavLink to="/new-contract" className="hover:underline">
            New Contract
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
