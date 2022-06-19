import { defaultControlSettings } from "./defaultControlSettings"
import constants from "../utils/constants"

const { ADD_CONTROL } = constants

const addNewControl = (type, state, dispatch) => {
  const stateObjectName = `${type}${Object.entries(state).length + 1}`
  dispatch({
    type: ADD_CONTROL,
    payload: {
      stateObjectName: stateObjectName,
      value: defaultControlSettings[type],
    },
  })
}

export default addNewControl
