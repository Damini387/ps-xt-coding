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
      return {
        ...state,
        rockets: filtered_rocket
      }
    case FILTER_LANDING:
      const removeNull = initialState.data && initialState.data[0].filter((detail) => {
        return !(detail.rocket.first_stage && detail.rocket.first_stage.cores[0].land_success === null)
      });
      const filter_landing = removeNull.filter((detail) => {
          return detail.rocket.first_stage && detail.rocket.first_stage.cores[0].land_success.toString().toLowerCase() === action.payload.showLanding.toLowerCase();
      });
      return {
        ...state,
        rockets: filter_landing
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
