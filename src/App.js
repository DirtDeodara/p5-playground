import "./App.css" // TODO think about this
import React, { useReducer, useEffect } from "react"
import { ReactP5Wrapper, P5Instance } from "react-p5-wrapper"
import { Button, FormGroup } from "@mui/material"
import ShapeControl from "./controls/ShapeControl"
import addNewControl from "./controls/addNewControl"
import { appStateReducer, initialState } from "./appState"
import { defaultControlSettings } from "./controls/defaultControlSettings"
import {
  ConcentricCircles,
  ConcentricPolygons,
  RingOfCircles,
  RadiantLines,
  RadiantDots,
  RingOfPolygons,
} from "./Shapes"

const App = () => {
  const initState = JSON.parse(localStorage.getItem("state"))
    ? JSON.parse(localStorage.getItem("state"))
    : initialState

  const [appState, appStateDispatch] = useReducer(appStateReducer, initState)


  useEffect(() => {
    localStorage.setItem("state", JSON.stringify(appState))
  }, [appState])

  const Canvas = (p5) => {
    p5.setup = () => {
      p5.noLoop()
      p5.angleMode(p5.DEGREES)
      p5.rectMode(p5.CENTER)
      return p5.createCanvas(850, 850)
    }

    // Where we declare which shapes to render
    p5.draw = () => {
      Object.values(appState).forEach((stateObj, i) => {
        if (stateObj.shouldShow) {
          switch (stateObj.key) {
            case "concentricCircles":
              return ConcentricCircles(p5, stateObj)
            case "concentricPolygons":
              return ConcentricPolygons(p5, stateObj)
            case "ringOfCircles":
              return RingOfCircles(p5, stateObj)
            case "radiantLines":
              return RadiantLines(p5, stateObj)
            case "radiantDots":
              return RadiantDots(p5, stateObj)
            case "ringOfPolygons":
              return RingOfPolygons(p5, stateObj)
            default:
              break
          }
        }
      })
    }
  }

  return (
    <div className="main-container">
      <div className="form-container">
        <div className="add-button-group">
          {Object.values(defaultControlSettings).map((setting, i) => {
            return (
              <Button
                key={i}
                variant="outlined"
                className="add-button"
                onClick={() =>
                  addNewControl(setting.key, appState, appStateDispatch)
                }
              >
                Add {setting.name}
              </Button>
            )
          })}
          <Button
            variant="outlined"
            className="add-button"
            onClick={() =>
              appStateDispatch({
                type: "reset",
                payload: initialState,
              })
            }
          >
            RESET
          </Button>
        </div>
        <FormGroup>
          {Object.values(appState).map((stateObj, i) => {
            const { key } = stateObj
            const stateObjectName = `${key}${i + 1}`
            return ShapeControl(stateObjectName, stateObj, appStateDispatch)
          })}
        </FormGroup>
      </div>
      <ReactP5Wrapper sketch={Canvas} />
    </div>
  )
}

export default App
