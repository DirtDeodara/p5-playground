const pointOnCircle = (p5, posX, posY, radius, angle) => {
  const x = posX + radius * p5.cos(angle)
  const y = posY + radius * p5.sin(angle)
  return p5.createVector(x, y)
}
const Polygon = (p5, posX, posY, radius, sides) => {
  const rotationAngle = 360 / sides
  p5.beginShape()
  for (let i = 0; i < sides; i++) {
    const thisVertex = pointOnCircle(
      p5,
      posX,
      posY,
      radius,
      i * rotationAngle
    )
    p5.vertex(thisVertex.x, thisVertex.y)
  }
  p5.endShape(p5.CLOSE)
}

export default Polygon
