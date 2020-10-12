import React, { useEffect, useReducer } from 'react';
import Axios from 'axios';

import './App.css';

import Header from './common/Header';
import LaunchProgram from './components/launchProgram/index';
import Footer from './common/Footer';
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
      <Header />
      <LaunchProgram data={filterData && filterData.rockets} />
      <Footer />
    </div>
  );
}

export default App;
