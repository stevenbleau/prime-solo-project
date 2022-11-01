import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom'; // history import



function RegisterForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [location, setLocation] = useState('');
  const [bio, setBio] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const history = useHistory();
  


  
  const errors = useSelector((store) => store.errors);
  const user = useSelector(store => store.user);
  const dispatch = useDispatch();

  const registerUser = (event) => {
    event.preventDefault();

    dispatch({
      type: 'REGISTER',
      payload: {
        username: username,
        password: password,
        first_name: firstName,
        last_name: lastName,
        location: location,
        bio: bio,
        image_url: imageUrl,

      }
    });
  }; // end registerUser

  return (


    <form className="formPanel" onSubmit={registerUser}>
      <h2>Register User</h2>
      {errors.registrationMessage && (
        <h3 className="alert" role="alert">
          {errors.registrationMessage}
        </h3>
      )}

      <div>
        <label htmlFor="username">
          Username:
          <input
            type="text"
            name="username"
            value={username}
            required
            onChange={(event) => setUsername(event.target.value)}
          />
        </label>
      </div>

      <div>
        <label htmlFor="password">
          Password:
          <input
            type="password"
            name="password"
            value={password}
            required
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
      </div>

      <div>
        <label htmlFor="first-name">
          First Name:
          <input
            type="text"
            name="first-name"
            value={firstName}
            required
            onChange={(event) => setFirstName(event.target.value)}
          />
        </label>
      </div>

      <div>
        <label htmlFor="last-name">
          Last Name:
          <input
            type="text"
            name="last-name"
            value={lastName}
            required
            onChange={(event) => setLastName(event.target.value)}
          />
        </label>
      </div>

      <div>
        <label htmlFor="location">
          City:
          <input
            type="text"
            name="location"
            value={location}
            required
            onChange={(event) => setLocation(event.target.value)}
          />
        </label>
      </div>

      <div>
        <label htmlFor="bio">
          Bio:
          <input
            type="text"
            name="bio"
            value={bio}
            required
            onChange={(event) => setBio(event.target.value)}
          />
        </label>
      </div>

      <div>
        <label htmlFor="image-url">
          Profile Image Url:
          <input
            type="text"
            name="image-url"
            value={imageUrl}
            required
            onChange={(event) => setImageUrl(event.target.value)}
          />
        </label>
      </div>
      <br/>


      

      

      <div>
        <input className="btn" type="submit" name="submit" value="Register" />
      </div>

        
    </form>
    
  );
}

export default RegisterForm;
