// TODO: add landing success

import React, { useEffect, useState } from 'react';
import Axios from 'axios';

import Rocket from './rocket';

const Rockets = () => {

    const [rocketDetails, setRocketDetails] = useState();

    useEffect(() => {
        Axios.get("http://localhost:3030/allDetails").then(response => {
            setRocketDetails(response.data);
        });
    }, []);


    return (
        <div className="rockets">
            {rocketDetails && rocketDetails.map((details, index) => {
                const { links: { mission_patch }, mission_name, flight_number, mission_id, launch_year, launch_success } = details;
                return <Rocket 
                            rcktImg={mission_patch} 
                            rocketName={`${mission_name} #${flight_number}`} 
                            missionIds={mission_id}
                            launchYear={launch_year} 
                            launchSuccess={`${launch_success}`} 
                            landingSuccess={`${false}`}
                            key={index} />
            })}
        </div>
    );
}

export default Rockets;