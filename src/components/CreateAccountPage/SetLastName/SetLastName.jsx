import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom'; // history import


function SetLastName() {

    const lastName = useSelector(store => store.lastName);
    const dispatch = useDispatch();

    // Dispatch username input
    const handleChange = (event) => {
        //Pass data to reducer
        console.log('the payload is ', event.target.value);
        dispatch({ type: 'SET_LAST_NAME', payload: event.target.value})
    }

    return(
        <>
            <h3>Last Name</h3>
            <div>
                <input value={lastName} onChange={handleChange} className="input" type="text" />
                {/* <button onClick={() => history.push('/step/two')} className="button">Next</button> */}
            </div>
        </>
    )
    
}

// this allows us to use <App /> in index.js
export default SetLastName;