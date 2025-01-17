import { Link, NavLink, useNavigate } from "react-router";
const URL_BASE = "Heroes-spa";
export const Navbar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    console.log("Logout");
    navigate(`/${URL_BASE}/login`, {
      replace: true,
    });
  };
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
      <Link className="navbar-brand" to="/">
        Asociaciones
      </Link>

      <div className="navbar-collapse">
        <div className="navbar-nav">
          <NavLink className="nav-item nav-link" to={`/${URL_BASE}/marvel`}>
            Marvel
          </NavLink>

          <NavLink className="nav-item nav-link" to={`/${URL_BASE}/dc`}>
            DC
          </NavLink>
          <NavLink className="nav-item nav-link" to={`/${URL_BASE}/search`}>
            Search
          </NavLink>
        </div>
      </div>

      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
        <ul className="navbar-nav ml-auto">
          <span className="nav-item nav-link text-primary">Fabian</span>
          <button className="nav-item nav-link btn" onClick={handleLogout}>
            Logout
          </button>
        </ul>
      </div>
    </nav>
  );
};
