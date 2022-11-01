import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import { useSelector } from 'react-redux';

import logo from '../../media/pigeon_logo.svg';

function Nav() {
  const user = useSelector((store) => store.user);

  return (
    <div className="header">
              {/* LOGO */}
          <center>
            <br/>

            <img src={logo} />
            <br/>
          </center>
          <br/>
    </div>
  );
}

export default Nav;
