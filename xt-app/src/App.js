import React, {useEffect, useReducer} from 'react';
import Axios from 'axios';

import './App.css';

import LaunchProgram from './components/launchProgram/index';
import getAllData from './store/reducers';

function App() {

  const [filterData, dispatch] = useReducer(getAllData, []);

  useEffect(() => {
    Axios.get("http://localhost:3030/allDetails").then(response => {

        dispatch({
            type: "ROCKET_DETAILS",
            payload: { rocketDetails: response.data }
        });

    });

}, []);

  return (
    <div className="App">
      <LaunchProgram data={filterData && filterData.rockets}/>
      <h3 className="center">
        Developed By: <span>Damini Upadhyay</span>
      </h3>
    </div>
  );
}

export default App;
