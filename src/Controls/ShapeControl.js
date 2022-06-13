import { Slider, Typography, FormControlLabel, Switch } from "@mui/material"
import useAdjustShape from "../hooks/useAdjustShape"
import constants from "../utils/constants"
import { createSliderMarks } from "../helpers"
const { SHOULD_SHOW } = constants

const ShapeControl = ({ name, state, setter }, subControls) => {
  const { handleStateChange } = useAdjustShape()

  return (
    <div className="formItem">
      <div>
        <FormControlLabel
          control={
            <Switch
              checked={state.shouldShow}
              onChange={(e) => handleStateChange(e, SHOULD_SHOW, setter)}
            />
          }
          label={name}
        />
      </div>
      {state.shouldShow &&
        subControls.map((control, i) => {
          const { name, key, sliderStart, sliderStop } = control
          return (
            <div key={i}>
              <Typography>{name}</Typography>
              <Slider
                defaultValue={state[key]}
                //   getAriaValueText={valuetext}
                aria-labelledby="discrete-slider"
                step={1}
                marks={createSliderMarks(sliderStart, sliderStop)}
                min={sliderStart}
                max={sliderStop}
                value={state[key]}
                onChange={(e) => handleStateChange(e, key, setter)}
              />
            </div>
          )
        })}
    </div>
  )
}

export default ShapeControl
