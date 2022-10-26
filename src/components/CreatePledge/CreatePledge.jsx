import React from 'react';
import { useState, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';


function CreatePledge() {

  const history = useHistory()


  const handleClick = event =>  {
    console.log('pitch in button clicked', event.target.value);
    history.push(`/pledges`)
  };

  return (
    <div className="container">
      <h2>Create Pledge Page</h2>

      <button onClick={handleClick}>Submit</button>
    </div>
  );
}

export default CreatePledge;