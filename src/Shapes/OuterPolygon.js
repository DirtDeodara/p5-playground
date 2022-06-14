import constants from "../utils/constants"

const { EXTRA_ROTATION, RADIUS } = constants

const OuterPolygon = (p5, state) => {
  const pointOnCircle = (posX, posY, radius, angle) => {
    const x = posX + radius * p5.cos(angle)
    const y = posY + radius * p5.sin(angle)
    return p5.createVector(x, y)
  }

  const polygon = (posX, posY, radius, sides) => {
    const rotationAngle = 360 / sides
    p5.beginShape()
    for (let i = 0; i < sides; i++) {
      const thisVertex = pointOnCircle(
        posX,
        posY,
        radius,
        i * rotationAngle + EXTRA_ROTATION
      )
      p5.vertex(thisVertex.x, thisVertex.y)
    }
    p5.endShape(p5.CLOSE)
  }

  p5.stroke(p5.color(255, 52, 154)) // TODO use state for this value
  p5.strokeWeight(state.lineThickness)
  p5.noFill()

  p5.push()
  p5.translate(p5.width / 2, p5.height / 2)
  polygon(0, 0, RADIUS, state.numberOfSides)
  p5.pop()
}

export default OuterPolygon
