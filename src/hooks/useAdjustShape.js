import { useState } from "react"
import constants from "../utils/constants"

// interface initialState {
//   shouldShow: boolean 
//   lineThickness?: number
//   numberOfSides?: number
//   numberOfCircles?: number
//   numberOfShapes?: number
//   numberOfSpokes?: number
//   step?: number
//   diameter?: number
//   range?: [number]
// }

const {
  SHOULD_SHOW,
  LINE_THICKNESS,
  NUMBER_OF_SIDES,
  NUMBER_OF_CIRCLES,
  NUMBER_OF_SHAPES,
  NUMBER_OF_SPOKES,
  STEP,
  DIAMETER,
  RANGE,
} = constants

const useAdjustShape = () => {
  const [outerCircleState, setOuterCircleState] = useState({
    shouldShow: false,
    lineThickness: 1,
  })

  const [outerPolygonState, setOuterPolygonState] = useState({
    shouldShow: false,
    lineThickness: 1,
    numberOfSides: 3,
  })

  const [mainCirclesState, setMainCirclesState] = useState({
    shouldShow: false,
    lineThickness: 1,
    numberOfCircles: 3,
  })

  const [radiantDotsState, setRadiantDotsState] = useState({
    shouldShow: false,
    lineThickness: 1,
    numberOfSpokes: 3,
    [RANGE]: [0, 1],
  })

  const [ringOfCirclesState, setRingOfCirclesState] = useState({
    shouldShow: false,
    lineThickness: 1,
    [NUMBER_OF_SHAPES]: 3,
    [STEP]: 1,
    [DIAMETER]: 1,
  })

  const [ringOfTrianglesState, setRingOfTrianglesState] = useState({
    shouldShow: false,
    lineThickness: 1,
    [NUMBER_OF_SHAPES]: 3,
    [STEP]: 1,
    [DIAMETER]: 1,
  })

  const [ringOfSqauresState, setRingOfSquaresState] = useState({
    shouldShow: false,
    lineThickness: 1,
    [NUMBER_OF_SHAPES]: 3,
    [STEP]: 1,
    [DIAMETER]: 1,
  })

  const [radiantLinesState, setRadiantLinesState] = useState({
    shouldShow: false,
    lineThickness: 1,
    numberOfSpokes: 3,
    [RANGE]: [0, 1],
  })

  const handleStateChange = (e, key, setter) => {
    const value = key === SHOULD_SHOW ? e.target.checked : e.target.value
    setter((prevState) => ({
      ...prevState,
      [key]: value,
    }))
  }

  return {
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
    handleStateChange,
  }
}

export default useAdjustShape
