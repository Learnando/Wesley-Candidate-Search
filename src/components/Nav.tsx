import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="bg-blue-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="space-x-4">
          <Link to="/" className="hover:underline"></Link>
          <Link to="/saved" className="hover:underline"></Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
