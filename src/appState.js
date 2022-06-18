import {
  lineThicknessSettings,
  startStopSettings,
  colorPickerSettings,
} from "./controls/controlSettings"

const initialState = {
  concentricCircles1: {
    name: "Concentric Circles",
    key: "concentricCircles",
    shouldShow: true,
    subControlsHidden: false,
    lineThickness: 1,
    range: [0, 2],
    strokeColor: "#000",
    subControls: [
      lineThicknessSettings,
      startStopSettings,
      colorPickerSettings,
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
