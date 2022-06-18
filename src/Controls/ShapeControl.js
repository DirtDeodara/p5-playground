import React from "react"
import { CirclePicker, SwatchesPicker } from "react-color"
import { Slider, Typography, FormControlLabel, Switch } from "@mui/material"
import constants from "../utils/constants"

const { SHOULD_SHOW } = constants

const handleShapeStateChange = (e, stateObjectName, key, dispatch) => {
  let value
  switch (key) {
    case SHOULD_SHOW:
      value = e.target.checked
      break
    case "strokeColor":
      value = e.hex
      break
    default:
      value = e.target.value
      break
  }
  // const value = key === SHOULD_SHOW ? e.target.checked : e.target.value
  dispatch({ type: "updateState", payload: { key, value, stateObjectName } })
}

const ShapeControl = (stateObjectName, state, dispatch) => {
  const { name, strokeColor, subControls } = state
  return (
    <div className="formItem" key={stateObjectName}>
      <div>
        <FormControlLabel
          control={
            <Switch
              checked={state.shouldShow}
              onChange={(e) =>
                handleShapeStateChange(
                  e,
                  stateObjectName,
                  SHOULD_SHOW,
                  dispatch
                )
              }
            />
          }
          label={name}
        />
      </div>
      {state.shouldShow &&
        subControls.map((subControl, i) => {
          let { type, name, key } = subControl
          switch (type) {
            case "slider":
              return (
                <div key={i}>
                  <Typography>{name}</Typography>
                  <Slider
                    defaultValue={state[key]}
                    //   getAriaValueText={valuetext} // do I need this?
                    aria-labelledby="discrete-slider"
                    step={1}
                    valueLabelDisplay="auto"
                    min={subControl.sliderStart}
                    max={subControl.sliderStop}
                    value={state[key]}
                    onChange={(e) =>
                      handleShapeStateChange(e, stateObjectName, key, dispatch)
                    }
                  />
                </div>
              )
            case "colorPicker":
              return (
                <SwatchesPicker
                  key={i}
                  color={strokeColor}
                  onChangeComplete={(e) => {
                    handleShapeStateChange(e, stateObjectName, key, dispatch)
                  }}
                />
              )
            default:
              return null
          }
        })}
    </div>
  )
}

export default ShapeControl
