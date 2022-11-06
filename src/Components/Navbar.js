import React from 'react';
import { NavLink } from 'react-router-dom';
import SocialMedia from "./SocialMedia";
import { useGlobalContext } from '../context';

const Navbar = () => {
  const { HandleRepositories } = useGlobalContext();
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
                to="/repositories"
                className={({ isActive }) =>
                  isActive ? "scrollLink active" : "scrollLink"
                }
                onClick={HandleRepositories}
              >
                Repositories
              </NavLink>
            </li>
            <li>
              <NavLink
                to="singlerepositories"
                className={({ isActive }) =>
                  isActive ? "scrollLink active" : "scrollLink"
                }
              >
                SingleRepository
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