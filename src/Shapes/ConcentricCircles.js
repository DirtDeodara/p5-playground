import constants from "../utils/constants"
const { CRYSTAL_SIZE, SINGLE_STEP } = constants
const ConcentricCircles = (p5, state) => {
  const start = state.range[0] * SINGLE_STEP
  const stop = state.range[1] * SINGLE_STEP

  p5.stroke(p5.color(state.strokeColor)) 
  p5.strokeWeight(state.lineThickness)
  p5.noFill()

  p5.push()
  p5.translate(p5.width / 2, p5.height / 2)
  for (let x = start; x <= stop; x += SINGLE_STEP) {
    p5.ellipse(0, 0, CRYSTAL_SIZE - x * 2, CRYSTAL_SIZE - x * 2)
  }
  p5.pop()
}

export default ConcentricCircles
