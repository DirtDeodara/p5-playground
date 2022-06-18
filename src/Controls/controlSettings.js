import constants from "../utils/constants"

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
  DIAMETER,
  diameter,
  RANGE,
} = constants

const lineThicknessSettings = {
  name: lineThickness,
  key: LINE_THICKNESS,
  sliderStart: 1,
  sliderStop: 20,
}

const startStopSettings = {
  name: "Start and Stop", // TODO add to copy
  key: RANGE,
  sliderStart: 0,
  sliderStop: 8,
}

const numberOfSidesSettings = {
  name: numberOfSides,
  key: NUMBER_OF_SIDES,
  sliderStart: 3,
  sliderStop: 13,
}

const diameterSettings = {
  name: diameter,
  key: DIAMETER,
  sliderStart: 1,
  sliderStop: 400,
}

const numberOfCirclesSettings = {
  name: numberOfCircles,
  key: NUMBER_OF_CIRCLES,
  sliderStart: 3,
  sliderStop: 13,
}

const numberOfShapesSettings = {
  // TODO consider turning all of these numberOf...Controls into a single control type
  name: numberOfShapes,
  key: NUMBER_OF_SHAPES,
  sliderStart: 3,
  sliderStop: 13,
}

const numberOfSpokesSettings = {
  name: numberOfSpokes,
  key: NUMBER_OF_SPOKES,
  sliderStart: 3,
  sliderStop: 13,
}

const stepOfOriginSettings = {
  name: "Step of Origin", // TODO add to copy
  key: STEP,
  sliderStart: 0,
  sliderStop: 8,
}

const defaultControlSettings = {
  concentricCircles: {
    name: "Concentric Circles", // TODO add this and all below to copy
    key: "concentricCircles",
    shouldShow: true,
    lineThickness: 1, // TODO turn all numbers into consts
    range: [0, 1],
    subControls: [lineThicknessSettings, startStopSettings],
  },
  concentricPolygons: {
    name: "Concentric Polygon",
    key: "concentricPolygons",
    shouldShow: true,
    numberOfSides: 3,
    lineThickness: 1,
    range: [0, 1],
    subControls: [
      numberOfSidesSettings,
      lineThicknessSettings,
      startStopSettings,
    ],
  },
  ringOfCircles: {
    name: "Ring of Circles",
    key: "ringOfCircles",
    shouldShow: true,
    numberOfCircles: 3,
    lineThickness: 1,
    diameter: 200,
    step: 2,
    subControls: [
      numberOfCirclesSettings,
      lineThicknessSettings,
      diameterSettings,
      stepOfOriginSettings,
    ],
  },
  ringOfPolygons: {
    name: "Ring of Polygons",
    key: "ringOfPolygons",
    shouldShow: true,
    numberOfShapes: 3,
    numberOfSides: 6,
    lineThickness: 1,
    diameter: 8,
    step: 1,
    subControls: [
      numberOfSidesSettings,
      numberOfShapesSettings,
      diameterSettings,
      lineThicknessSettings,
      stepOfOriginSettings,
    ],
  },
  radiantLines: {
    name: "Radiant Lines",
    key: "radiantLines",
    shouldShow: true,
    numberOfSpokes: 3,
    lineThickness: 1,
    range: [0, 1],
    subControls: [
      numberOfSpokesSettings,
      lineThicknessSettings,
      startStopSettings,
    ],
  },
  radiantDots: {
    name: "Radiant Dots",
    key: "radiantDots",
    shouldShow: true,
    numberOfSpokes: 3,
    lineThickness: 1,
    range: [0, 1],
    subControls: [numberOfSpokesSettings, startStopSettings],
  },
}

export default defaultControlSettings
