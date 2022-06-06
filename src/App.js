import "./App.css"
import React, { useState, useEffect, useCallback } from "react"
// import Canvas from "./ShapeGenerator/Canvas"
import { ReactP5Wrapper } from "react-p5-wrapper"
import SidesSlider from "./Controls/SidesSlider"
import { Slider } from "@mui/material"

import useAdjustShape from "./hooks/useAdjustShape"

function valuetext(numOfLines) {
  return `${numOfLines} sides`
}

function App() {
  const { numOfLines, setNumOfLines } = useAdjustShape()
  console.log(numOfLines)
  const evenNum = numOfLines % 2 === 0
  const extraRotation = evenNum ? 360 / numOfLines : 270


  const CRYSTAL_SIZE = 800
  const RADIUS = CRYSTAL_SIZE / 2
  let PALETTE = []
  const STEPS_OUT = 8

  const Canvas = (p5) => {
    p5.setup = () => {
      PALETTE = [
        p5.color(255, 52, 154), //pink
        p5.color(4, 0, 152), //blue
      ]

      p5.noLoop()
      p5.angleMode(p5.DEGREES)
      p5.rectMode(p5.CENTER)
      return p5.createCanvas(1000, 1000)
    }

    // The utility functions
    const coinFlip = () => {
      return p5.random(1) < 0.5
    }

    const randomColor = () => {
      return PALETTE[p5.floor(p5.random(0, PALETTE.length))]
    }

    const randomWeight = () => {
      return coinFlip() ? 3 : 6
    }

    const pointOnCircle = (posX, posY, radius, angle) => {
      const x = posX + radius * p5.cos(angle)
      const y = posY + radius * p5.sin(angle)
      return p5.createVector(x, y)
    }

    // The various individual shapes
    const hexagon = (posX, posY, radius, sides) => {
      const rotationAngle = 360 / sides
      p5.beginShape()
      for (let i = 0; i < sides; i++) {
        const thisVertex = pointOnCircle(
          posX,
          posY,
          radius,
          i * rotationAngle + extraRotation
        )
        p5.vertex(thisVertex.x, thisVertex.y)
      }
      p5.endShape(p5.CLOSE)
    }

    const outlineShape = () => {
      p5.stroke(randomColor())
      p5.strokeWeight(randomWeight() * 1.25)
      p5.noFill()

      p5.push()
      p5.translate(p5.width / 2, p5.height / 2)
      coinFlip()
        ? p5.ellipse(0, 0, CRYSTAL_SIZE, CRYSTAL_SIZE)
        : hexagon(0, 0, RADIUS, numOfLines)
      coinFlip()
        ? p5.ellipse(0, 0, CRYSTAL_SIZE, CRYSTAL_SIZE)
        : hexagon(0, 0, RADIUS, numOfLines)
      p5.pop()
    }

    const simpleLines = () => {
      const numOfSteps = coinFlip() ? STEPS_OUT : p5.floor(STEPS_OUT * 1.25)
      const step = RADIUS / numOfSteps
      const start = p5.floor(p5.random(0, numOfSteps))
      const stop = p5.floor(p5.random(start, numOfSteps + 1))
      const angle = 360 / numOfLines

      p5.push()
      p5.translate(p5.height / 2, p5.height / 2)
      p5.stroke(randomColor())
      p5.strokeWeight(coinFlip() ? 3 : 6)
      p5.rotate(extraRotation)

      for (let i = 0; i < numOfLines; i++) {
        p5.line(start * step, 0, stop * step, 0)
        p5.rotate(angle)
      }
      p5.pop()
    }

    const circles = () => {
      const numberOfCircles = numOfLines
      const angle = 360 / numberOfCircles
      const sizeOfShape = RADIUS * 0.93
      const position = RADIUS - sizeOfShape / 2

      p5.stroke(randomColor())
      p5.strokeWeight(randomWeight() * 1.25)
      p5.noFill()

      p5.push()
      p5.translate(p5.width / 2, p5.height / 2)
      p5.rotate(extraRotation)
      for (let i = 0; i < numberOfCircles; i++) {
        p5.ellipse(position, 0, sizeOfShape, sizeOfShape)
        p5.rotate(angle)
      }
      p5.pop()
    }

    // Where we declare which shapes to render
    p5.draw = () => {
      outlineShape()
      circles()
      simpleLines()
    }
  }

  const handleNumOfLinesChange = (_, newValue) => {
    setNumOfLines(newValue)
  }

  return (
    <>
      <Slider
        defaultValue={numOfLines}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="on"
        step={1}
        marks
        min={3}
        max={13}
        value={numOfLines}
        onChange={handleNumOfLinesChange}
      />
      <ReactP5Wrapper sketch={Canvas} numOfLines={numOfLines} />
    </>
  )
}

export default App
