import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';

function Sandbox() {

    const history = useHistory();
    const username = useSelector(store => store.username);
    const dispatch = useDispatch();

    // Dispatch username input
    const handleChange = (event) => {
        //Pass data to reducer
        console.log('the payload is ', event.target.value);
        dispatch({ type: 'SET_USERNAME', payload: event.target.value})
    }

    return(
        <>
            <h3>Enter a username</h3>
            <div>
                {/* Step 1: create username */}
                <input value={username} onChange={handleChange} className="input" type="text" />
                <button onClick={() => history.push('create/username')} className="button">Next</button>
            </div>
        </>
    )
    
}

// this allows us to use <App /> in index.js
export default Sandbox;