const Triangle = (p5, center, radius, direction) => {
  if (direction) {
    p5.beginShape()
    p5.vertex(center + radius * p5.cos(0), radius * p5.sin(0))
    p5.vertex(center + radius * p5.cos(120), radius * p5.sin(120))
    p5.vertex(center + radius * p5.cos(240), radius * p5.sin(240))
    p5.endShape(p5.CLOSE)
  } else {
    p5.beginShape()
    p5.vertex(center + radius * p5.cos(180), radius * p5.sin(180))
    p5.vertex(center + radius * p5.cos(300), radius * p5.sin(300))
    p5.vertex(center + radius * p5.cos(60), radius * p5.sin(60))
    p5.endShape(p5.CLOSE)
  }
}

export default Triangle
