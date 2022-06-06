import { Slider } from "@mui/material"
import useAdjustShape from "../hooks/useAdjustShape"

function valuetext(numOfSides) {
  return `${numOfSides} sides`
}

const SidesSlider = () => {
  const { numOfSides, setNumOfSides } = useAdjustShape()

  const handleChange = (_, newValue) => {
    setNumOfSides(newValue)
  }

  return (
    <Slider
      defaultValue={numOfSides}
      getAriaValueText={valuetext}
      aria-labelledby="discrete-slider"
      valueLabelDisplay="on"
      step={1}
      marks
      min={3}
      max={13}
      value={numOfSides}
      onChange={handleChange}
    />
  )
}

export default SidesSlider
