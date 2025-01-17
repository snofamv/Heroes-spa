import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router";
export const Navbar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    console.log("Logout");
    navigate(`/login`, {
      replace: true,
    });
  };
  const [showToggle, setShowToggle] = useState(false);
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
      <div className="container-fluid">
        <Link to={"/"} className="navbar-brand">
          HeroesSPA
        </Link>

        <button
          onClick={() => setShowToggle(!showToggle)}
          className="navbar-toggler"
       
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse ${showToggle ? "show" : ""}`}
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav">
            <NavLink
              className={({ isActive }) =>
                `nav-item nav-link ${isActive ? "active" : ""}`
              }
              to={`/marvel`}
            >
              Marvel
            </NavLink>
            <NavLink className="nav-item nav-link" to={`/dc`}>
              DC
            </NavLink>
            <NavLink className="nav-item nav-link" to={`/search`}>
              Search
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
    // <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
    //   <Link className="navbar-brand" to="/">
    //     Asociaciones
    //   </Link>

    //   <div className="navbar-collapse">
    //     <div className="navbar-nav">
    //       <NavLink className="nav-item nav-link" to={`/marvel`}>
    //         Marvel
    //       </NavLink>

    //       <NavLink className="nav-item nav-link" to={`/dc`}>
    //         DC
    //       </NavLink>
    //       <NavLink className="nav-item nav-link" to={`/search`}>
    //         Search
    //       </NavLink>
    //     </div>
    //   </div>

    //   <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
    //     <ul className="navbar-nav ml-auto">
    //       <span className="nav-item nav-link text-primary">Fabian</span>
    //       <button className="nav-item nav-link btn" onClick={handleLogout}>
    //         Logout
    //       </button>
    //     </ul>
    //   </div>
    // </nav>
  );
};
