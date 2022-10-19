import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom'; // history import


function SetLocation() {

    const location = useSelector(store => store.location);
    const dispatch = useDispatch();

    // Dispatch username input
    const handleChange = (event) => {
        //Pass data to reducer
        console.log('the payload is ', event.target.value);
        dispatch({ type: 'SET_LOCATION', payload: event.target.value})
    }

    return(
        <>
            <h3>City</h3>
            <div>
                <input value={location} onChange={handleChange} className="input" type="text" />
                {/* <button onClick={() => history.push('/step/two')} className="button">Next</button> */}
            </div>
        </>
    )
    
}

export default SetLocation;