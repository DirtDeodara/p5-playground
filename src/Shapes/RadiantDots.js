import constants from "../utils/constants"
const { EXTRA_ROTATION, SINGLE_STEP } = constants

const RadiantDots = (p5, state) => {
  const numberOfShapes = state.numberOfSpokes
  const angle = 360 / numberOfShapes
  const sizeOfShape = 6
  const start = state.range[0] * SINGLE_STEP
  const stop = state.range[1] * SINGLE_STEP

  p5.fill(p5.color(255, 52, 154)) // TODO use state for this value
  p5.noStroke()
  p5.push()
  p5.translate(p5.width / 2, p5.height / 2)
  p5.rotate(EXTRA_ROTATION)
  for (let i = 0; i <= numberOfShapes; i++) {
    for (let x = start; x <= stop; x += SINGLE_STEP) {
      console.log(start, stop)
      p5.rect(x, 0, sizeOfShape, sizeOfShape)
    }
    p5.rotate(angle)
  }
  p5.pop()
}

export default RadiantDots
