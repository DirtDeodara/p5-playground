import Polygon from "./Polygon"
import constants from "../utils/constants"

const { RADIUS, SINGLE_STEP, EXTRA_ROTATION } = constants

const ConcentricPolygons = (p5, state) => {
  const start = state.range[0] * SINGLE_STEP
  const stop = state.range[1] * SINGLE_STEP

  p5.stroke(p5.color(state.strokeColor)) // TODO use state for this value
  p5.strokeWeight(state.lineThickness)
  p5.noFill()

  p5.push()
  p5.translate(p5.width / 2, p5.height / 2)
  p5.rotate(EXTRA_ROTATION)
  for (let x = start; x <= stop; x += SINGLE_STEP) {
    Polygon(p5, 0, 0, RADIUS - x, state.numberOfSides)
  }
  p5.pop()
}

export default ConcentricPolygons
