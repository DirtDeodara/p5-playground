import React, { useState } from "react"
import { ReactP5Wrapper } from "react-p5-wrapper"

const CRYSTAL_SIZE = 800
const RADIUS = CRYSTAL_SIZE / 2
let PALETTE = []
const STEPS_OUT = 8
let numOfSides

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

  p5.updateWithProps = (props) => {
    if (props.numOfSides) {
      numOfSides = props.numOfSides
    }
  }

  const coinFlip = () => {
    return p5.random(1) < 0.5
  }

  const simpleLines = (props) => {
    const numOfSteps = coinFlip() ? STEPS_OUT : p5.floor(STEPS_OUT * 1.25)
    const step = RADIUS / numOfSteps
    const start = p5.floor(p5.random(0, numOfSteps))
    const stop = p5.floor(p5.random(start, numOfSteps + 1))
    const numberOfShapes = coinFlip() ? numOfSides : numOfSides * 2
    const angle = 360 / numberOfShapes

    const randomColor = () => {
      return PALETTE[p5.floor(p5.random(0, PALETTE.length))]
    }

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

  p5.draw = () => {
    // p5.background(100)
    // p5.normalMaterial()
    // p5.noStroke()
    // p5.push()
    // p5.rotateY(rotation)
    // p5.box(100)
    // p5.pop()
    simpleLines()
  }
}

export default Canvas
