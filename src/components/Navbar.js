import React from "react";
import {
  Link,
  useNavigate,
} from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const token =
    !!localStorage.getItem("token");

  const logout = () => {
    localStorage.removeItem("token");

    localStorage.removeItem("user");

    navigate("/login");

    window.location.reload();
  };

  return (
    <nav className="navbar">

      <Link
        to="/"
        className="logo"
      >
        <span className="logo-mark">
          RB
        </span>
        ResumeBuilder
      </Link>

      <div className="nav-links">

        <Link to="/">
          Home
        </Link>

        <Link to="/templates">
          Templates
        </Link>

        {token ? (
          <>
            <Link to="/dashboard">
              Dashboard
            </Link>

            <button
              onClick={logout}
              className="logout-btn"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login">
              Login
            </Link>

            <Link
              to="/register"
              className="register-link"
            >
              Register
            </Link>
          </>
        )}

      </div>

    </nav>
  );
}

export default Navbar;
