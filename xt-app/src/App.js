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
    // TODO: need to check why data is not pulled when firebase is pulled
    // data should be populated on https://us-central1-ps-xt-coding.cloudfunctions.net/api/all
    // Axios.get("http://localhost:3030/allDetails").then(response => {

      Axios.get("https://api.spacexdata.com/v3/launches?limit=100").then(response => {

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
