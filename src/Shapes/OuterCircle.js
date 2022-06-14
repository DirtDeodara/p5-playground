import { P5Instance } from "react-p5-wrapper"
import constants from "../utils/constants"
const { CRYSTAL_SIZE } = constants

const OuterCircle = (p5, state) => {
  p5.stroke(p5.color(255, 52, 154)) // TODO use state for this value
  p5.strokeWeight(state.lineThickness)
  p5.noFill()

  p5.push()
  p5.translate(p5.width / 2, p5.height / 2)
  p5.ellipse(0, 0, CRYSTAL_SIZE, CRYSTAL_SIZE)
  p5.pop()
}

export default OuterCircle
