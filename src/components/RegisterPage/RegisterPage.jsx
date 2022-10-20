import React from 'react';


import { useHistory } from 'react-router-dom';
import RegisterForm from '../RegisterForm/RegisterForm';
import CreateAccountPage from '../CreateAccountPage/CreateAccountPage';
import logo from '../../media/pigeon_logo.svg';


function RegisterPage() {
  
  const history = useHistory();

  return (

      <div>

        <center>
        <img src={logo} />
          <RegisterForm />
          <button
            type="button"
            className="btn btn_asLink"
            onClick={() => {
              history.push('/login');
            }}
          >
            Login
          </button>
        </center>
      </div>

  );
}

export default RegisterPage;
