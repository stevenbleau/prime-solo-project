import { combineReducers } from 'redux';
import errors from './errors.reducer';
import user from './user.reducer';

// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga


// REDUCERS:
const firstName = (state = '', action) => {
  if (action.type === 'SET_FIRST_NAME') {
    return action.payload
  } 
  return state;
}

const lastName = (state = '', action) => {
  if (action.type === 'SET_LAST_NAME') {
    return action.payload
  } 
  return state;
}

const location = (state = '', action) => {
  if (action.type === 'SET_LOCATION') {
    return action.payload
  } 
  return state;
}

const bio = (state = '', action) => {
  if (action.type === 'SET_BIO') {
    return action.payload
  } 
  return state;
}

const photo = (state = '', action) => {
  if (action.type === 'SET_PHOTO') {
    return action.payload
  } 
  return state;
}

const campaign = (state = [], action) => {
  if (action.type === 'SET_CAMPAIGN') {
    return action.payload
  } 
  return state;
}



// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  user, // will have an id and username if someone is logged in
  firstName,
  lastName,
  location,
  bio,
  photo,
  campaign,
});

export default rootReducer;
