import constants from "../utils/constants"
import Triangle from "./Triangle"
const { EXTRA_ROTATION, SINGLE_STEP } = constants

const RingOfShapes = (p5, state, variant) => {
  console.log(state, variant)
  const step = state.step
  const weight = state.lineThickness
  const numberOfShapes = state.numberOfShapes
  const center = step * SINGLE_STEP
  const direction = false // TODO build a toggle for this and change the name to something more clear
  const angle = 360 / numberOfShapes
  const radius = (state.diameter * SINGLE_STEP) / 8

  p5.stroke(p5.color(255, 52, 154)) // TODO use state for this value
  p5.fill(p5.color(255, 52, 154)) // TODO use state for this value and create toggle to allow for hollow shapes
  p5.strokeWeight(weight * 2)

  p5.push()
  p5.translate(p5.width / 2, p5.height / 2)
  variant === "triangle" ? p5.rotate(EXTRA_ROTATION) : (() => {})()
  for (let i = 0; i < numberOfShapes; i++) {
    switch (variant) {
      case "circle":
        p5.ellipse(0, center, radius, radius)
        break
      case "triangle":
        Triangle(p5, center, radius, direction)
        break
      case "sqaure":
        p5.rect(0, center, radius, radius)
        break
      default:
        break
    }
    p5.rotate(angle)
  }
  p5.pop()
}

export default RingOfShapes
