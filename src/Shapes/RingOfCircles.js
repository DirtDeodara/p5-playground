import constants from "../utils/constants"
const { EXTRA_ROTATION, SINGLE_STEP } = constants

const RingOfCircles = (p5, state) => {
  const numberOfShapes = state.numberOfShapes
  const angle = 360 / numberOfShapes
  const sizeOfShape = state.diameter
  const step = state.step * SINGLE_STEP

  p5.stroke(p5.color(state.strokeColor))
  p5.strokeWeight(state.lineThickness)
  p5.noFill()

  p5.push()
  p5.translate(p5.width / 2, p5.height / 2)
  p5.rotate(state.rotation + EXTRA_ROTATION)
  for (let i = 0; i < numberOfShapes; i++) {
    p5.ellipse(step, 0, sizeOfShape, sizeOfShape)
    // p5.ellipse(step, 0, 3, 3)
    p5.rotate(angle)
  }
  p5.pop()
}

export default RingOfCircles
