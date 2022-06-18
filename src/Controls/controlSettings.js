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
  type: "slider",
  name: lineThickness,
  key: LINE_THICKNESS,
  sliderStart: 1,
  sliderStop: 20,
}

const startStopSettings = {
  type: "slider",
  name: "Start and Stop", // TODO add to copy
  key: RANGE,
  sliderStart: 0,
  sliderStop: 8,
}

const numberOfSidesSettings = {
  type: "slider",
  name: numberOfSides,
  key: NUMBER_OF_SIDES,
  sliderStart: 3,
  sliderStop: 13,
}

const diameterSettings = {
  type: "slider",
  name: diameter,
  key: DIAMETER,
  sliderStart: 1,
  sliderStop: 400,
}

const numberOfCirclesSettings = {
  type: "slider",
  name: numberOfCircles,
  key: NUMBER_OF_CIRCLES,
  sliderStart: 3,
  sliderStop: 13,
}

const numberOfShapesSettings = {
  type: "slider",
  // TODO consider turning all of these numberOf...Controls into a single control type
  name: numberOfShapes,
  key: NUMBER_OF_SHAPES,
  sliderStart: 3,
  sliderStop: 13,
}

const numberOfSpokesSettings = {
  type: "slider",
  name: numberOfSpokes,
  key: NUMBER_OF_SPOKES,
  sliderStart: 3,
  sliderStop: 13,
}

const stepOfOriginSettings = {
  type: "slider",
  name: "Step of Origin", // TODO add to copy
  key: STEP,
  sliderStart: 0,
  sliderStop: 8,
}

const colorPickerSettings = {
  type: "colorPicker",
  name: "Shape Color", // TODO add to copy
  key: "strokeColor",
}

const defaultControlSettings = {
  concentricCircles: {
    name: "Concentric Circles", // TODO add this and all below to copy
    key: "concentricCircles",
    shouldShow: true,
    subControlsHidden: false,
    lineThickness: 1, // TODO turn all numbers into consts
    range: [0, 1],
    strokeColor: "#000",
    subControls: [
      lineThicknessSettings,
      startStopSettings,
      colorPickerSettings,
    ],
  },
  concentricPolygons: {
    name: "Concentric Polygon",
    key: "concentricPolygons",
    shouldShow: true,
    subControlsHidden: false,
    numberOfSides: 3,
    lineThickness: 1,
    range: [0, 2],
    strokeColor: "#000",
    subControls: [
      numberOfSidesSettings,
      lineThicknessSettings,
      startStopSettings,
      colorPickerSettings,
    ],
  },
  ringOfCircles: {
    name: "Ring of Circles",
    key: "ringOfCircles",
    shouldShow: true,
    subControlsHidden: false,
    numberOfCircles: 3,
    lineThickness: 1,
    diameter: 200,
    step: 2,
    strokeColor: "#000",
    subControls: [
      numberOfCirclesSettings,
      lineThicknessSettings,
      diameterSettings,
      stepOfOriginSettings,
      colorPickerSettings,
    ],
  },
  ringOfPolygons: {
    name: "Ring of Polygons",
    key: "ringOfPolygons",
    shouldShow: true,
    subControlsHidden: false,
    numberOfShapes: 3,
    numberOfSides: 6,
    lineThickness: 1,
    diameter: 20,
    step: 1,
    strokeColor: "#000",
    subControls: [
      numberOfSidesSettings,
      numberOfShapesSettings,
      diameterSettings,
      lineThicknessSettings,
      stepOfOriginSettings,
      colorPickerSettings,
    ],
  },
  radiantLines: {
    name: "Radiant Lines",
    key: "radiantLines",
    shouldShow: true,
    subControlsHidden: false,
    numberOfSpokes: 3,
    lineThickness: 1,
    range: [0, 1],
    strokeColor: "#000",
    subControls: [
      numberOfSpokesSettings,
      lineThicknessSettings,
      startStopSettings,
      colorPickerSettings,
    ],
  },
  radiantDots: {
    name: "Radiant Dots",
    key: "radiantDots",
    shouldShow: true,
    subControlsHidden: false,
    numberOfSpokes: 3,
    lineThickness: 1,
    range: [0, 1],
    strokeColor: "#000",
    subControls: [
      numberOfSpokesSettings,
      startStopSettings,
      colorPickerSettings,
    ],
  },
}

export {
  defaultControlSettings,
  lineThicknessSettings,
  startStopSettings,
  colorPickerSettings,
}
