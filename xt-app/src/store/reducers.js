import { ROCKET_DETAILS, FILTER_ROCKET_YEAR, FILTER_LANDING, FILTER_LAUNCH } from "./actions";

const initialState = {
  data: []
}

const getAllData = (state = initialState, action) => {
  switch (action.type) {
    case ROCKET_DETAILS:
      initialState.data.push(action.payload.rocketDetails);
      return {
        ...state,
        rockets: action.payload.rocketDetails
      }
    case FILTER_ROCKET_YEAR:
      const filtered_rocket = initialState.data && initialState.data[0].filter((detail) => {
        return detail.launch_year === action.payload.showYear
      });
      console.log(filtered_rocket);
      return {
        ...state,
        rockets: filtered_rocket
      }
    case FILTER_LANDING:
      // const filter_landing = initialState.data && initialState.data[0].filter((detail) => {
      //   return detail.launch_success.toString().toLowerCase() === action.payload.showLanding.toLowerCase()
      // });
      // console.log(filter_landing);
      return {
        ...state,
        // success_landing: filter_landing
      }
    case FILTER_LAUNCH:
      const filter_launching = initialState.data && initialState.data[0].filter((detail) => {
        return detail.launch_success.toString().toLowerCase() === action.payload.showLaunching.toLowerCase()
      });
      return {
        ...state,
        rockets: filter_launching
      }
    default:
      return state;
  }
}

export default getAllData;
