import constants from "../utils/constants"
const { EXTRA_ROTATION, RADIUS } = constants

const MainCircles = (p5, state) => {
  const numberOfCircles = state.numberOfCircles
  const angle = 360 / numberOfCircles
  const sizeOfShape = RADIUS * 0.928 // maybe need to adjust this
  const position = RADIUS - sizeOfShape / 2

  p5.stroke(p5.color(255, 52, 154)) // TODO use state for this value
  p5.strokeWeight(state.lineThickness)
  p5.noFill()

  p5.push()
  p5.translate(p5.width / 2, p5.height / 2)
  p5.rotate(EXTRA_ROTATION)
  for (let i = 0; i < numberOfCircles; i++) {
    p5.ellipse(position, 0, sizeOfShape, sizeOfShape)
    p5.rotate(angle)
  }
  p5.pop()
}

export default MainCircles
