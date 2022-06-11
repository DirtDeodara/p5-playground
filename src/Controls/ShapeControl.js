import { Slider, Typography, FormControlLabel, Switch } from "@mui/material"
import useAdjustShape from "../hooks/useAdjustShape"
import constants from "../utils/constants"
import { createSliderMarks } from "../helpers"
const { SHOULD_SHOW } = constants

const ShapeControl = ({ name, state, setter }, subControls) => {
  const { handleStateChange } = useAdjustShape()

  return (
    <div className="formItem">
      <FormControlLabel
        control={
          <Switch
            checked={state.shouldShow}
            onChange={(e) => handleStateChange(e, SHOULD_SHOW, setter)}
          />
        }
        label={name}
      />
      {state.shouldShow &&
        subControls.map((control) => {
          const { name, key, rangeStart, rangeStop } = control
          return (
            <>
              <Typography>{name}</Typography>
              <Slider
                defaultValue={state[key]}
                //   getAriaValueText={valuetext}
                aria-labelledby="discrete-slider"
                step={1}
                marks={createSliderMarks(rangeStart, rangeStop)}
                min={rangeStart}
                max={rangeStop}
                value={state[key]}
                onChange={(e) => handleStateChange(e, key, setter)}
              />
            </>
          )
        })}
    </div>
  )
}

export default ShapeControl
