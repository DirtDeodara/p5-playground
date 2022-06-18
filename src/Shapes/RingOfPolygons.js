import Polygon from "./Polygon"
import constants from "../utils/constants"
const { EXTRA_ROTATION, SINGLE_STEP } = constants

const RingOfShapes = (p5, state) => {
  const step = state.step * SINGLE_STEP
  const weight = state.lineThickness
  const numberOfShapes = state.numberOfShapes
  const angle = 360 / numberOfShapes
  const radius = state.diameter

  p5.stroke(p5.color(state.strokeColor)) // TODO use state for this value
  // p5.fill(p5.color(255, 52, 154)) // TODO use state for this value and create toggle to allow for hollow shapes
  p5.noFill()
  p5.strokeWeight(weight)

  p5.push()
  p5.translate(p5.width / 2, p5.height / 2)
  p5.rotate(EXTRA_ROTATION)
  for (let i = 0; i < numberOfShapes; i++) {
    Polygon(p5, step, 0, radius, state.numberOfSides)
    p5.rotate(angle)
  }
  p5.pop()
}

export default RingOfShapes
