import React from "react"
import { SwatchesPicker } from "react-color"
import {
  Slider,
  Typography,
  FormControlLabel,
  Switch,
  IconButton,
} from "@mui/material"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import ExpandLessIcon from "@mui/icons-material/ExpandLess"
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
  dispatch({ type: "updateState", payload: { key, value, stateObjectName } })
}

const ShapeControl = (stateObjectName, state, dispatch) => {
  const { name, strokeColor, subControls } = state
  return (
    <div className="formItem" key={stateObjectName}>
      <div className="topBar">
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
        <IconButton
          onClick={(e) => {
            console.log(e)
            dispatch({
              type: "updateState",
              payload: {
                key: "subControlsHidden",
                value: !state.subControlsHidden,
                stateObjectName,
              },
            })
          }}
        >
          {state.subControlsHidden ? <ExpandMoreIcon /> : <ExpandLessIcon />}
        </IconButton>
      </div>
      {state.shouldShow &&
        !state.subControlsHidden &&
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
                <div key={i} className="colorPicker">
                  <SwatchesPicker
                    color={strokeColor}
                    onChangeComplete={(e) => {
                      handleShapeStateChange(e, stateObjectName, key, dispatch)
                    }}
                  />
                </div>
              )
            default:
              return null
          }
        })}
    </div>
  )
}

export default ShapeControl
