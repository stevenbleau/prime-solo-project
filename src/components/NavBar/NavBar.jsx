import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useSelector } from 'react-redux';
import './NavBar.css';

//import discover_icon from '../../media/discover_icon';

function NavBar() {
  const user = useSelector((store) => store.user);

  return (
    <div className="nav">
      {/* <Link to="/home">
        <h2 className="nav-title">Prime Solo Project</h2>
      </Link> */}
      <div>
        {/* If no user is logged in, show these links */}
        {!user.id && (
          // If there's no user, show login/registration links
          <>
                <Link className="navLink" to="/login">
                    Login / Register
                </Link>

                <Link className="navLink" to="/about">
                About
                </Link>
            </>
        )}

        {/* If a user is logged in, show these links */}
        {user.id && (
          <>
            <Link className="navLink" to="/user">
              Discover
            </Link>

            <Link className="navLink" to="/info">
              Pledges
            </Link>

            <Link className="navLink" to="/info">
              My Campaigns
            </Link>

            <Link className="navLink" to="/profile">
              Profile
            </Link>

          </>
        )}

      </div>
    </div>
  );
}

export default NavBar;
