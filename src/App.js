import "./App.css" // TODO think about this
import React from "react"
import { ReactP5Wrapper, P5Instance } from "react-p5-wrapper"
import { FormGroup } from "@mui/material"
import ShapeControl from "./Controls/ShapeControl"
import constants from "./utils/constants"
import useAdjustShape from "./hooks/useAdjustShape"
import {
  OuterCircle,
  OuterPolygon,
  MainCircles,
  RadiantLines,
  RadiantDots,
  RingOfShapes,
} from "./Shapes"

const {
  LINE_THICKNESS,
  lineThickness,
  NUMBER_OF_SIDES,
  numberOfSides,
  NUMBER_OF_CIRCLES,
  numberOfCircles,
  NUMBER_OF_SHAPES,
  numberOfShapes,
  NUMBER_OF_SPOKES,
  numberOfSpokes,
  STEP,
  step,
  DIAMETER,
  diameter,
  RANGE,
} = constants

const App = () => {
  const {
    outerCircleState,
    setOuterCircleState,
    outerPolygonState,
    setOuterPolygonState,
    radiantDotsState,
    setRadiantDotsState,
    radiantLinesState,
    setRadiantLinesState,
    ringOfCirclesState,
    setRingOfCirclesState,
    ringOfTrianglesState,
    setRingOfTrianglesState,
    ringOfSqauresState,
    setRingOfSquaresState,
    mainCirclesState,
    setMainCirclesState,
  } = useAdjustShape()


  const Canvas = (p5) => {
    p5.setup = () => {
      const PALETTE = [
        p5.color(255, 52, 154), //pink
        p5.color(4, 0, 152), //blue
      ]

      p5.noLoop()
      p5.angleMode(p5.DEGREES)
      p5.rectMode(p5.CENTER)
      return p5.createCanvas(850, 850)
    }

    // Where we declare which shapes to render
    p5.draw = () => {
      outerCircleState.shouldShow
        ? OuterCircle(p5, outerCircleState)
        : (() => {})()
      outerPolygonState.shouldShow
        ? OuterPolygon(p5, outerPolygonState)
        : (() => {})()
      mainCirclesState.shouldShow
        ? MainCircles(p5, mainCirclesState)
        : (() => {})()
      radiantLinesState.shouldShow
        ? RadiantLines(p5, radiantLinesState)
        : (() => {})()
      radiantDotsState.shouldShow
        ? RadiantDots(p5, radiantDotsState)
        : (() => {})()
      ringOfTrianglesState.shouldShow
        ? RingOfShapes(p5, ringOfTrianglesState, "triangle")
        : (() => {})()
      ringOfCirclesState.shouldShow
        ? RingOfShapes(p5, ringOfCirclesState, "circle")
        : (() => {})()
      ringOfSqauresState.shouldShow
        ? RingOfShapes(p5, ringOfSqauresState, "sqaure")
        : (() => {})()
    }
  }

  return (
    <div className="main-container">
      <FormGroup>
        {ShapeControl({
          name: "Outer Circle",
          state: outerCircleState,
          setter: setOuterCircleState,
          subControls: [
            {
              name: lineThickness,
              key: LINE_THICKNESS,
              sliderStart: 1,
              sliderStop: 15,
            },
          ],
        })}
        {ShapeControl({
          name: "Main Polygon",
          state: outerPolygonState,
          setter: setOuterPolygonState,
          subControls: [
            {
              name: numberOfSides,
              key: NUMBER_OF_SIDES,
              sliderStart: 3,
              sliderStop: 13,
            },
            {
              name: lineThickness,
              key: LINE_THICKNESS,
              sliderStart: 1,
              sliderStop: 15,
            },
          ],
        })}
        {ShapeControl({
          name: "Main Circles",
          state: mainCirclesState,
          setter: setMainCirclesState,
          subControls: [
            {
              name: numberOfCircles,
              key: NUMBER_OF_CIRCLES,
              sliderStart: 3,
              sliderStop: 13,
            },
            {
              name: lineThickness,
              key: LINE_THICKNESS,
              sliderStart: 1,
              sliderStop: 15,
            },
          ],
        })}
        {ShapeControl({
          name: "Radiant Lines",
          state: radiantLinesState,
          setter: setRadiantLinesState,
          subControls: [
            {
              name: numberOfSpokes,
              key: NUMBER_OF_SPOKES,
              sliderStart: 3,
              sliderStop: 13,
            },
            {
              name: lineThickness,
              key: LINE_THICKNESS,
              sliderStart: 1,
              sliderStop: 15,
            },
            {
              name: "Start and Stop",
              key: RANGE,
              sliderStart: 0,
              sliderStop: 8,
            },
          ],
        })}
        {ShapeControl({
          name: "Ring of Circles",
          state: ringOfCirclesState,
          setter: setRingOfCirclesState,
          subControls: [
            {
              name: numberOfShapes,
              key: NUMBER_OF_SHAPES,
              sliderStart: 3,
              sliderStop: 13,
            },
            {
              name: diameter,
              key: DIAMETER,
              sliderStart: 1,
              sliderStop: 80,
            },
            {
              name: lineThickness,
              key: LINE_THICKNESS,
              sliderStart: 1,
              sliderStop: 30,
            },
            {
              name: step,
              key: STEP,
              sliderStart: 1,
              sliderStop: 7,
            },
          ],
        })}
        {ShapeControl({
          name: "Ring of Triangles",
          state: ringOfTrianglesState,
          setter: setRingOfTrianglesState,
          subControls: [
            {
              name: numberOfShapes,
              key: NUMBER_OF_SHAPES,
              sliderStart: 3,
              sliderStop: 13,
            },
            {
              name: diameter,
              key: DIAMETER,
              sliderStart: 1,
              sliderStop: 80,
            },
            {
              name: lineThickness,
              key: LINE_THICKNESS,
              sliderStart: 1,
              sliderStop: 30,
            },
            {
              name: step,
              key: STEP,
              sliderStart: 1,
              sliderStop: 7,
            },
          ],
        })}
        {ShapeControl({
          name: "Ring of Squares",
          state: ringOfSqauresState,
          setter: setRingOfSquaresState,
          subControls: [
            {
              name: numberOfShapes,
              key: NUMBER_OF_SHAPES,
              sliderStart: 3,
              sliderStop: 13,
            },
            {
              name: diameter,
              key: DIAMETER,
              sliderStart: 1,
              sliderStop: 80,
            },
            {
              name: lineThickness,
              key: LINE_THICKNESS,
              sliderStart: 1,
              sliderStop: 30,
            },
            {
              name: step,
              key: STEP,
              sliderStart: 1,
              sliderStop: 7,
            },
          ],
        })}
        {ShapeControl({
          name: "Radiant Dots",
          state: radiantDotsState,
          setter: setRadiantDotsState,
          subControls: [
            {
              name: numberOfSpokes,
              key: NUMBER_OF_SPOKES,
              sliderStart: 3,
              sliderStop: 13,
            },
            {
              name: "Start and Stop",
              key: RANGE,
              sliderStart: 0,
              sliderStop: 8,
            },
          ],
        })}
      </FormGroup>
      <ReactP5Wrapper sketch={Canvas} />
    </div>
  )
}

export default App
