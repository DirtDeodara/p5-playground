import { useState } from "react"
import constants from "../utils/constants"

const {
  SHOULD_SHOW,
  LINE_THICKNESS,
  NUMBER_OF_SIDES,
  NUMBER_OF_CIRCLES,
  NUMBER_OF_SPOKES,
} = constants

const useAdjustShape = () => {
  const [numOfLines, setNumOfLines] = useState(3) // deprecated

  const [outerCircleState, setOuterCircleState] = useState({
    [SHOULD_SHOW]: false,
    [LINE_THICKNESS]: 1,
  })

  const [outerPolygonState, setOuterPolygonState] = useState({
    [SHOULD_SHOW]: false,
    [LINE_THICKNESS]: 1,
    [NUMBER_OF_SIDES]: 3,
  })

  const [mainCirclesState, setMainCirclesState] = useState({
    [SHOULD_SHOW]: false,
    [LINE_THICKNESS]: 1,
    [NUMBER_OF_CIRCLES]: 3,
  })

  const [radiantDotsState, setRadiantDotsState] = useState({
    [SHOULD_SHOW]: false,
    [LINE_THICKNESS]: 1,
    [NUMBER_OF_SPOKES]: 3,
  })

  const [ringOfCirlcesState, setRingOfCirclesState] = useState({
    [SHOULD_SHOW]: false,
    [LINE_THICKNESS]: 1,
    [NUMBER_OF_CIRCLES]: 3,
  })

  const [radiantLinesState, setRadiantLinesState] = useState({
    [SHOULD_SHOW]: false,
    [LINE_THICKNESS]: 1,
    [NUMBER_OF_CIRCLES]: 3,
  })

  const handleStateChange = (e, key, setter) => {
    let value = key === SHOULD_SHOW ? e.target.checked : e.target.value
    console.log(key, value)
    setter((prevState) => ({
      ...prevState,
      [key]: value,
    }))
  }

  return {
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
  }
}

export default useAdjustShape
