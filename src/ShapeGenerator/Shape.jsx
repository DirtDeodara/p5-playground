// import p5 from "p5"
import React, { useState } from "react"
import Sketch from "react-p5"
import { Slider } from "@mui/material"

const CRYSTAL_SIZE = 800
const RADIUS = CRYSTAL_SIZE / 2
let PALETTE = []
const STEPS_OUT = 8

const Shape = () => {
  const setup = (p5, canvasParentRef) => {
    // use parent to render the canvas in this ref
    // (without that p5 will render the canvas outside of your component)
    p5.createCanvas(1000, 1000).parent(canvasParentRef)
    p5.noLoop()
    p5.angleMode(p5.DEGREES)
    p5.rectMode(p5.CENTER)

    PALETTE = [
      p5.color(255, 52, 154), //pink
      p5.color(4, 0, 152), //blue
    ]
  }
  const [numOfSides, setNumOfSides] = useState(6)

  const draw = (p5) => {
    const coinFlip = () => {
      return p5.random(1) < 0.5
    }

    const handleChange = (_, newValue) => {
      setNumOfSides(newValue)
      p5.redraw()
    }

    const simpleLines = () => {
      const numOfSteps = coinFlip() ? STEPS_OUT : p5.floor(STEPS_OUT * 1.25)
      const step = RADIUS / numOfSteps
      const start = p5.floor(p5.random(0, numOfSteps))
      const stop = p5.floor(p5.random(start, numOfSteps + 1))

      const numberOfShapes = coinFlip() ? numOfSides : numOfSides * 2
      const angle = 360 / numberOfShapes

      const randomColor = () => {
        return PALETTE[p5.floor(p5.random(0, PALETTE.length))]
      }

      p5.noFill()

      p5.push()
      p5.translate(p5.height / 2, p5.height / 2)
      p5.stroke(randomColor())
      p5.strokeWeight(coinFlip() ? 3 : 6)

      for (let i = 0; i < numberOfShapes; i++) {
        p5.line(start * step, 0, stop * step, 0)
        p5.rotate(angle)
      }
      p5.pop()
    }

    simpleLines()
  }

  return (
    <>
      {" "}
      <Slider
        defaultValue={numOfSides}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="on"
        step={1}
        marks
        min={3}
        max={13}
        value={numOfSides}
        onChange={(_, newValue) => {
            setNumOfSides(newValue)
          }}
      />
      <Sketch setup={setup} draw={draw} />
    </>
  )
}

export default Shape
