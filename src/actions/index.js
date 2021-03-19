import axios from 'axios';

//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.
export const FETCH_SMURFS_START = 'FETCH_SMURFS_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_SPELLS_FAILURE';
export const ADD_NEW_SMURF = 'ADD_NEW_SMURF';
export const SET_ERROR = 'SET_ERROR';

export const fetchSmurfs = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_SMURFS_START })
    axios
      .get('http://localhost:3333/smurfs')
      .then((res) => (
        // console.log(res.data)
        dispatch({
          type: FETCH_SUCCESS, payload: res.data
        })
      ))
      .catch((err) => {
        dispatch({
          type: FETCH_FAILURE, payload: err.message
        })
      })
  }
}
  
export const addNewSmurf = (smurf) =>  {
  return (dispatch) => {
    axios.post('http://localhost:3333/smurfs', smurf)
      .then((res) => {
        dispatch({ type: FETCH_SUCCESS, payload: res.data })
      })
      .catch((err) => {
        dispatch({
          type: FETCH_FAILURE, payload: err.res.data
        })
      })
  }
}

export const setError = () => {
  return (dispatch)=> dispatch({type: SET_ERROR})
}