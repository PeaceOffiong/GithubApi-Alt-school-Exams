import React from 'react';
import { NavLink } from 'react-router-dom';
import SocialMedia from "./SocialMedia";

const Navbar = () => {
  return (
    <nav id="nav">
      <div className="nav">
        <div className="nav-links">
          <ul className="links">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "scrollLink active" : "scrollLink"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Repositories"
                className={({ isActive }) =>
                  isActive ? "scrollLink active" : "scrollLink"
                }
              >
                Repositories
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/testerrorboundary"
                className={({ isActive }) =>
                  isActive ? "scrollLink active" : "scrollLink"
                }
              >
                TestError
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/error"
                className={({ isActive }) =>
                  isActive ? "scrollLink active" : "scrollLink"
                }
              >
                TestErrorPage
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="nav-logo">
          <label htmlFor="logo" className="logo">
            <h4 className="one">peace</h4>
            <h4 className="two">ben</h4>
          </label>
        </div>
        <SocialMedia />
      </div>
    </nav>
  );
}

export default Navbar