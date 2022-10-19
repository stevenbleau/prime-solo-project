import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom'; // history import


function SetBio() {

    const bio = useSelector(store => store.bio);
    const dispatch = useDispatch();


    const handleChange = (event) => {
        //Pass data to reducer
        console.log('the payload is ', event.target.value);
        dispatch({ type: 'SET_BIO', payload: event.target.value})
    }

    return(
        <>
            <h3>Bio</h3>
            <div>
                <input value={bio} onChange={handleChange} className="input" type="text" />
                {/* <button onClick={() => history.push('/step/two')} className="button">Next</button> */}
            </div>
        </>
    )
    
}

export default SetBio;