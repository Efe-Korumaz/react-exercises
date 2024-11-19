import { Link, Outlet } from "react-router-dom";

const Navigation = () => {
  return (
    
    <div className="nav">
      <nav>
        <ul>
          <li>
            <Link to="/Home">Home</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>
      </nav>

      {/* Dit toont de content van de pagina waarnaar je navigeert */}
      <Outlet />
    </div>
  );
};

export default Navigation;
