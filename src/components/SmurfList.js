import React from 'react';
import Smurf from './Smurf';
import { useEffect } from 'react';
import { connect } from "react-redux";
import { fetchSmurfs } from '../actions'
import Loader from 'react-loader-spinner'

 const SmurfList = (props)=> {
    useEffect(() => {
    props.fetchSmurfs()
    }, [])
     
     return (<div className="listContainer">
        {props.isLoading ? <Loader type='Circles' color='#00BFFF' height={100} width={100} timeout={3000}/> : null}
        {props.smurfs.map(item => {
            return <Smurf key={item.id} smurf={item}/>    
        })}
        {props.error ? <p style={{color: 'red'}}>{props.error}</p>  : null}
    </div>
    );
}

const mapStateToProps = (state) => {
  return {
    ...state,
   
  };
};

export default connect(mapStateToProps, {fetchSmurfs})(SmurfList);

//Task List:
//1. Connect the smurfs and loading state values to the SmurfList component.
//2. Replace the single Smurf component instance with a map return a Smurf component for each entry in the smurfs list.
//3. Replace the static isLoading variable with the state loading variable.