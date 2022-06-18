import React from "react"
import { Slider, Typography, FormControlLabel, Switch } from "@mui/material"
import constants from "../utils/constants"
const { SHOULD_SHOW } = constants

const handleShapeStateChange = (e, stateObjectName, key, dispatch) => {
  const value = key === SHOULD_SHOW ? e.target.checked : e.target.value
  dispatch({ type: "updateState", payload: { key, value, stateObjectName } })
}

/**
 * examples
 * @param {"concentricCircles"} name
 * @returns
 */
const ShapeControl = (stateObjectName, state, dispatch) => {
  const { name, subControls } = state
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
          const { name, key, sliderStart, sliderStop } = subControl
          return (
            <div key={i}>
              <Typography>{name}</Typography>
              <Slider
                defaultValue={state[key]}
                //   getAriaValueText={valuetext} // do I need this?
                aria-labelledby="discrete-slider"
                step={1}
                valueLabelDisplay="auto"
                // marks={createSliderMarks(sliderStart, sliderStop)}
                min={sliderStart}
                max={sliderStop}
                value={state[key]}
                onChange={(e) =>
                  handleShapeStateChange(e, stateObjectName, key, dispatch)
                }
              />
            </div>
          )
        })}
    </div>
  )
}

export default ShapeControl
