import React from 'react';


import { useHistory } from 'react-router-dom';
import RegisterForm from '../RegisterForm/RegisterForm';
import CreateAccountPage from '../CreateAccountPage/CreateAccountPage';



function RegisterPage() {
  
  const history = useHistory();

  return (

      <div>

        <center>
          <RegisterForm />
          <button
            type="button"
            className="btn"
            onClick={() => {
              history.push('/login');
            }}
          >
            Login
          </button>
        </center>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>

      </div>

  );
}

export default RegisterPage;
