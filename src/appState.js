import {
  lineThicknessSettings,
  startStopSettings,
  colorPickerSettings,
} from "./controls/defaultControlSettings"

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
    case "reset":
      return initialState
    default:
      return state
  }
}

export { appStateReducer, initialState }
