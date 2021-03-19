import React, { Component } from "react";
import AddForm from './components/AddForm';
import SmurfList from './components/SmurfList';
import Header from './components/Header';
import { connect } from 'react-redux';
import { addNewSmurf, fetchSmurfs, setError} from './actions'

import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

class App extends Component {
  componentDidMount() {
    fetchSmurfs();
  }
  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <SmurfList/>
          <AddForm/>
        </main>
      </div>
    );
  }
}
const map2App = (state) => {
  return {
    ...state,
  }
}

const map2Dispatch = (dispatch) => {
  return (addNewSmurf, setError) 
}
export default connect(map2App, map2Dispatch)(App);

//Task List:
//1. Connect the fetchSmurfs actions to the App component.
//2. Call the fetchSmurfs action when the component first loads.