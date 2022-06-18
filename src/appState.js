import constants from "./utils/constants"
const {
  LINE_THICKNESS,
  lineThickness,
  RANGE,
} = constants

const initialState = {
  concentricCircles1: {
    name: "Concentric Circles",
    key: "concentricCircles",
    shouldShow: true,
    lineThickness: 1,
    range: [0, 2],
    subControls: [
      {
        name: lineThickness,
        key: LINE_THICKNESS,
        sliderStart: 1,
        sliderStop: 20,
      },
      {
        name: "Start and Stop",
        key: RANGE,
        sliderStart: 0,
        sliderStop: 8,
      },
    ],
  },
}

/**
 * useReducer will be invoked in App(?) with this reducer as an argument.
 * Then the dispatch function returned from useReducer will passed to a
 * handleStateChange function that is then used in the onChange function
 * of each input.
 */


const appStateReducer = (state, action) => {
  const { type, payload } = action
  const { key, value, stateObjectName } = payload
  switch (type) {
    case "addControl": {
      return {
        ...state,
        [stateObjectName]: value,
      }
    }
    case "updateState":
      return {
        ...state,
        [stateObjectName]: {
          ...state[stateObjectName],
          [key]: value,
        },
      }
    default:
      return state
  }
}

export { appStateReducer, initialState }
