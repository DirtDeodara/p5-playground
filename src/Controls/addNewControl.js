import controlSettings from "./controlSettings"

const addNewControl = (type, state, dispatch) => {
  console.log(`${type}${Object.entries(state).length + 1}`)
  const stateObjectName = `${type}${Object.entries(state).length + 1}`
  dispatch({
    type: "addControl", // TODO add to copy or constants file
    payload: {
      stateObjectName: stateObjectName,
      value: controlSettings[type],
    },
  })
}

export default addNewControl
