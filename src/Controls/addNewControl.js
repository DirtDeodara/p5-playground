import { defaultControlSettings } from "./controlSettings"

const addNewControl = (type, state, dispatch) => {
  const stateObjectName = `${type}${Object.entries(state).length + 1}`
  dispatch({
    type: "addControl", // TODO add to copy or constants file
    payload: {
      stateObjectName: stateObjectName,
      value: defaultControlSettings[type],
    },
  })
}

export default addNewControl
