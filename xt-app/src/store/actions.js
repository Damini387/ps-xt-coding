export const ROCKET_DETAILS = 'ROCKET_DETAILS'; // action types
export const FILTER_ROCKET_YEAR = 'FILTER_ROCKET_YEAR' // action types
export const FILTER_LANDING = 'FILTER_LANDING' // action types
export const FILTER_LAUNCH = 'FILTER_LAUNCH' // action types

export const rocketDetails = (rocketDetails) => ( {
   type: ROCKET_DETAILS,
   payload: {
      rocketDetails
   }
} );


export const filterYear = (filterYear) => ( {
   type: FILTER_ROCKET_YEAR,
   payload: {
      filterYear
   }
} );

export const filterLanding = (filterLanding) => ( {
    type: FILTER_LANDING,
    payload: {
       filterLanding
    }
 } );

 export const filterLaunch = (filterLaunch) => ( {
    type: FILTER_LAUNCH,
    payload: {
        filterLaunch
    }
 } );
