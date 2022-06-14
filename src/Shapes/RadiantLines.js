import constants from "../utils/constants"
const { EXTRA_ROTATION, RADIUS, STEPS_OUT } = constants

const RadiantLines = (p5, state) => {
  const numOfSteps = STEPS_OUT
  const step = RADIUS / numOfSteps
  const start = state.range[0] // p5.floor(p5.random(0, numOfSteps))
  const stop = state.range[1] // p5.floor(p5.random(start, numOfSteps + 1))
  const angle = 360 / state.numberOfSpokes

  p5.push()
  p5.translate(p5.height / 2, p5.height / 2)
  p5.stroke(p5.color(255, 52, 154)) // TODO use state for this value
  p5.strokeWeight(state.lineThickness)
  p5.rotate(EXTRA_ROTATION)

  for (let i = 0; i < state.numberOfSpokes; i++) {
    p5.line(start * step, 0, stop * step, 0)
    p5.rotate(angle)
  }
  p5.pop()
}

export default RadiantLines
