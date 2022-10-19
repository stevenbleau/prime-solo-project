import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom'; // history import


function SetPhoto() {

    const photo = useSelector(store => store.photo);
    const dispatch = useDispatch();

    const handleChange = (event) => {
        //Pass data to reducer
        console.log('the payload is ', event.target.value);
        dispatch({ type: 'SET_PHOTO', payload: event.target.value})
    }

    return(
        <>
            <h3>image URL</h3>
            <div>
                <input value={photo} onChange={handleChange} className="input" type="text" />
                {/* <button onClick={() => history.push('/step/two')} className="button">Next</button> */}
            </div>
        </>
    )
    
}

export default SetPhoto;