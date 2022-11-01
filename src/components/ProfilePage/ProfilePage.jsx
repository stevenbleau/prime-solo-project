import React from 'react';
import { useState, useEffect } from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useDispatch, useSelector} from 'react-redux';

function ProfilePage() {

  const user = useSelector(store => store.user)
  // console.log(user);


  return (
    <div className="detailPage">
      <h2>Welcome, {user.username}!</h2>
      <p>Your ID is: {user.id}</p>

      <h3>Profile Picture</h3>
      <img src={user.image_url}></img>
      <h3>First Name: {user.first_name}</h3>
      <h3>Last Name: {user.last_name}</h3>
      <h3>Location: {user.location}</h3>
      <h3>Bio: {user.bio}</h3>

      <br/>
      <LogOutButton className="btn" />
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
    </div>
  
  );
}

// this allows us to use <App /> in index.js
export default ProfilePage;