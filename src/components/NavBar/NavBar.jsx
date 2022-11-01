import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useSelector } from 'react-redux';
import './NavBar.css';
import DiscoverIcon from '../../media/discover_icon.svg';
import { useParams, useHistory } from 'react-router-dom';


//import discover_icon from '../../media/discover_icon';

function NavBar() {
  const user = useSelector((store) => store.user);
  const history = useHistory();


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
                    Login
                </Link>

                <Link className="navLink" to="/about">
                About
                </Link>
            </>
        )}

        {/* If a user is logged in, show these links */}
        {user.id && (
          <>

            {/* <img src={DiscoverIcon} className="navLink" onClick={() => history.push(`/discover`)}></img> */}

            <Link className="navLink" to="/discover">
              Discover
            </Link>

            <Link className="navLink" to="/pledges">
              Pledges
            </Link>

            <Link className="navLink" to="/my/campaigns">
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
