import "./App.css"
import React, { useState, useEffect, useCallback } from "react"
import { ReactP5Wrapper } from "react-p5-wrapper"
import {
  Slider,
  Switch,
  FormGroup,
  FormControlLabel,
  Typography,
} from "@mui/material"
import ShapeControl from "./Controls/ShapeControl"
import constants from "./utils/constants"
import useAdjustShape from "./hooks/useAdjustShape"

const valuetext = (numOfLines) => {
  return `${numOfLines} sides`
}

const {
  LINE_THICKNESS,
  lineThickness,
  NUMBER_OF_SIDES,
  numberOfSides,
  NUMBER_OF_CIRCLES,
  numberOfCircles,
  NUMBER_OF_SPOKES,
  numberOfSpokes,
} = constants

function App() {
  const {
    numOfLines,
    outerCircleState,
    setOuterCircleState,
    outerPolygonState,
    setOuterPolygonState,
    radiantDotsState,
    setRadiantDotsState,
    radiantLinesState,
    setRadiantLinesState,
    ringOfCirlcesState,
    setRingOfCirclesState,
    mainCirclesState,
    setMainCirclesState,
    handleStateChange,
  } = useAdjustShape()

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
      return p5.createCanvas(850, 850)
    }

    // The utility functions
    const coinFlip = () => {
      return p5.random(1) < 0.5
    }

    const randomColor = () => {
      return PALETTE[p5.floor(p5.random(0, PALETTE.length))]
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

    const outerCircle = () => {
      p5.stroke(randomColor())
      p5.strokeWeight(outerCircleState.lineThickness)
      p5.noFill()

      p5.push()
      p5.translate(p5.width / 2, p5.height / 2)
      p5.ellipse(0, 0, CRYSTAL_SIZE, CRYSTAL_SIZE)
      p5.pop()
    }

    const outerPolygon = () => {
      p5.stroke(randomColor())
      p5.strokeWeight(outerPolygonState.lineThickness)
      p5.noFill()

      p5.push()
      p5.translate(p5.width / 2, p5.height / 2)
      hexagon(0, 0, RADIUS, outerPolygonState.numberOfSides)
      p5.pop()
    }

    const radiantLines = () => {
      const numOfSteps = coinFlip() ? STEPS_OUT : p5.floor(STEPS_OUT * 1.25)
      const step = RADIUS / numOfSteps
      const start = p5.floor(p5.random(0, numOfSteps))
      const stop = p5.floor(p5.random(start, numOfSteps + 1))
      const angle = 360 / radiantLinesState.numberOfSpokes

      p5.push()
      p5.translate(p5.height / 2, p5.height / 2)
      p5.stroke(randomColor())
      p5.strokeWeight(radiantLinesState.lineThickness)
      p5.rotate(extraRotation)

      for (let i = 0; i < radiantLinesState.numberOfSpokes; i++) {
        p5.line(start * step, 0, stop * step, 0)
        p5.rotate(angle)
      }
      p5.pop()
    }

    const mainCircles = () => {
      const numberOfCircles = mainCirclesState.numberOfCircles
      const angle = 360 / numberOfCircles
      const sizeOfShape = RADIUS * 0.928 // maybe need to adjust this
      const position = RADIUS - sizeOfShape / 2

      p5.stroke(randomColor())
      p5.strokeWeight(mainCirclesState.lineThickness)
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

    const squares = () => {
      const numberOfShapes = numOfLines
      const angle = 360 / numberOfShapes
      const sizeOfShape = RADIUS * p5.random(0.6)
      const position = RADIUS - p5.random(sizeOfShape * 2)
      const color = randomColor()
      p5.stroke(color)
      // strokeWeight(randomWeight())
      // strokeWeight(randomWeight() * 2)
      p5.fill(color)

      p5.push()
      p5.translate(p5.width / 2, p5.height / 2)
      for (let i = 0; i < numberOfShapes; i++) {
        p5.rect(0, position, sizeOfShape, sizeOfShape)
        p5.rotate(angle)
      }
      p5.pop()
    }

    const myTriangle = (center, radius, direction) => {
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

    const radiantDots = () => {
      const numberOfShapes = radiantDotsState.numberOfSpokes
      const angle = 360 / numberOfShapes
      const sizeOfShape = 6
      const singleStep = CRYSTAL_SIZE / 2 / STEPS_OUT
      const centerOffset = singleStep

      p5.fill(randomColor())
      p5.noStroke()
      p5.push()
      p5.translate(p5.width / 2, p5.height / 2)
      p5.rotate(extraRotation)
      for (let i = 0; i <= numberOfShapes; i++) {
        for (let x = centerOffset; x <= CRYSTAL_SIZE / 2; x += singleStep) {
          p5.rect(x, 0, sizeOfShape, sizeOfShape)
        }
        p5.rotate(angle)
      }
      p5.pop()
    }

    const ringOfShapes = () => {
      const steps = p5.floor(p5.random(1, STEPS_OUT))
      const layerColor = randomColor()
      const fillColor = coinFlip() ? layerColor : p5.color(0, 1)
      const weight = ringOfCirlcesState.lineThickness
      const singleStep = CRYSTAL_SIZE / 2 / STEPS_OUT
      const numberOfShapes = ringOfCirlcesState.numberOfCircles
      const randomShape = p5.random(1)
      const center = steps * singleStep
      const direction = coinFlip()
      const angle = 360 / numberOfShapes

      let radius

      if (steps < STEPS_OUT / 2) {
        radius = p5.floor(p5.random(1, steps)) * singleStep
      } else if (steps > STEPS_OUT / 2) {
        radius = p5.floor(p5.random(1, STEPS_OUT - steps)) * singleStep
      } else {
        radius = p5.floor(p5.random(1, STEPS_OUT / 2 + 1)) * singleStep
      }

      p5.stroke(layerColor)
      p5.fill(fillColor)
      p5.strokeWeight(weight * 2)
      p5.push()
      p5.translate(p5.width / 2, p5.height / 2)
      for (let i = 0; i < numberOfShapes; i++) {
        if (randomShape < 0.33) {
          p5.ellipse(0, center, radius, radius)
        } else if (randomShape >= 0.33 && randomShape < 0.66) {
          p5.rect(0, center, radius, radius)
        } else if (randomShape >= 0.66) {
          p5.ellipse(0, center, radius, radius)
          myTriangle(center, radius, direction)
        }
        p5.rotate(angle)
      }
      p5.pop()
    }

    const ringOfCircles = () => {
      const steps = p5.floor(p5.random(1, STEPS_OUT))
      const layerColor = randomColor()
      const fillColor = coinFlip() ? layerColor : p5.color(0, 1)
      const weight = ringOfCirlcesState.lineThickness
      const singleStep = CRYSTAL_SIZE / 2 / STEPS_OUT
      const numberOfShapes = ringOfCirlcesState.numberOfCircles
      const center = steps * singleStep
      const angle = 360 / numberOfShapes

      let radius

      if (steps < STEPS_OUT / 2) {
        radius = p5.floor(p5.random(1, steps)) * singleStep
      } else if (steps > STEPS_OUT / 2) {
        radius = p5.floor(p5.random(1, STEPS_OUT - steps)) * singleStep
      } else {
        radius = p5.floor(p5.random(1, STEPS_OUT / 2 + 1)) * singleStep
      }

      p5.stroke(layerColor)
      p5.fill(fillColor)
      p5.strokeWeight(weight * 2)
      p5.push()
      p5.translate(p5.width / 2, p5.height / 2)
      for (let i = 0; i < numberOfShapes; i++) {
        p5.ellipse(0, center, radius, radius)
        p5.rotate(angle)
      }
      p5.pop()
    }

    // Where we declare which shapes to render
    p5.draw = () => {
      outerCircleState.shouldShow ? outerCircle() : (() => {})()
      outerPolygonState.shouldShow ? outerPolygon() : (() => {})()
      ringOfCirlcesState.shouldShow ? ringOfCircles() : (() => {})()
      mainCirclesState.shouldShow ? mainCircles() : (() => {})()
      radiantLinesState.shouldShow ? radiantLines() : (() => {})()
      radiantDotsState.shouldShow ? radiantDots() : (() => {})()
    }
  }

  return (
    <div className="main-container">
      <FormGroup>
        {ShapeControl(
          {
            name: "Outer Circle",
            state: outerCircleState,
            setter: setOuterCircleState,
          },
          [
            {
              name: lineThickness,
              key: LINE_THICKNESS,
              rangeStart: 3,
              rangeStop: 13,
            },
          ]
        )}
        {ShapeControl(
          {
            name: "Main Polygon",
            state: outerPolygonState,
            setter: setOuterPolygonState,
          },
          [
            {
              name: numberOfSides,
              key: NUMBER_OF_SIDES,
              rangeStart: 3,
              rangeStop: 13,
            },
            {
              name: lineThickness,
              key: LINE_THICKNESS,
              rangeStart: 3,
              rangeStop: 15,
            },
          ]
        )}
        {ShapeControl(
          {
            name: "Main Circles",
            state: mainCirclesState,
            setter: setMainCirclesState,
          },
          [
            {
              name: numberOfCircles,
              key: NUMBER_OF_CIRCLES,
              rangeStart: 3,
              rangeStop: 13,
            },
            {
              name: lineThickness,
              key: LINE_THICKNESS,
              rangeStart: 3,
              rangeStop: 15,
            },
          ]
        )}
        {ShapeControl(
          {
            name: "Radiant Lines",
            state: radiantLinesState,
            setter: setRadiantLinesState,
          },
          [
            {
              name: numberOfSpokes,
              key: NUMBER_OF_SPOKES,
              rangeStart: 3,
              rangeStop: 13,
            },
            {
              name: lineThickness,
              key: LINE_THICKNESS,
              rangeStart: 3,
              rangeStop: 15,
            },
          ]
        )}
        {ShapeControl(
          {
            name: "Ring of Circles",
            state: ringOfCirlcesState,
            setter: setRingOfCirclesState,
          },
          [
            {
              name: numberOfCircles,
              key: NUMBER_OF_CIRCLES,
              rangeStart: 3,
              rangeStop: 13,
            },
            {
              name: lineThickness,
              key: LINE_THICKNESS,
              rangeStart: 3,
              rangeStop: 15,
            },
          ]
        )}
        {ShapeControl(
          {
            name: "Radiant Dots",
            state: radiantDotsState,
            setter: setRadiantDotsState,
          },
          [
            {
              name: numberOfSpokes,
              key: NUMBER_OF_SPOKES,
              rangeStart: 3,
              rangeStop: 13,
            },
            // {
            //   name: lineThickness,
            //   key: LINE_THICKNESS,
            //   rangeStart: 3,
            //   rangeStop: 15,
            // },
          ]
        )}
        {/* <FormControlLabel
          control={
            <Switch
              checked={showRingOfCircles}
              onChange={handleRingOfCirclesToggle}
            />
          }
          label="Ring of Circles"
        /> */}
      </FormGroup>
      <ReactP5Wrapper sketch={Canvas} numOfLines={numOfLines} />
    </div>
  )
}

export default App
