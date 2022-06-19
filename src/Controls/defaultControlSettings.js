import constants from "../utils/constants"
import copy from "../utils/copy" // TODO consider adding an index file to export both copy and constants from

const {
  LINE_THICKNESS,
  NUMBER_OF_SIDES,
  NUMBER_OF_SHAPES,
  NUMBER_OF_SPOKES,
  STROKE_COLOR,
  STEP,
  DIAMETER,
  RANGE,
  SLIDER,
  COLOR_PICKER,
  ROTATION,
  CONCENTRIC_CIRCLES,
  CONCENTRIC_POLYGONS,
  RING_OF_CIRCLES,
  RING_OF_POLYGONS,
  RADIANT_DOTS,
  RADIANT_LINES,
  DEFAULT_LINE_THICKNESS,
  DEFAULT_NUMBER_OF_SIDES,
  DEFAULT_ROTATION,
  DEFAULT_NUMBER_OF_SPOKES,
  DEFAULT_NUMBER_OF_SHAPES
} = constants

const {
  lineThickness,
  rotation,
  startAndStop,
  numberOfSides,
  numberOfShapes,
  numberOfSpokes,
  diameter,
  stepOfOrigin,
  strokeColor,
  concentricCircles,
  concentricPolygons,
  ringOfCircles,
  ringOfPolygons,
  radiantDots,
  radiantLines,
} = copy

const lineThicknessSettings = {
  type: SLIDER,
  name: lineThickness,
  key: LINE_THICKNESS,
  sliderStart: 1,
  sliderStop: 20,
}

const rotationSettings = {
  type: SLIDER,
  name: rotation,
  key: ROTATION,
  sliderStart: 0,
  sliderStop: 60, // TODO assess if this is the right range limit
}

const startStopSettings = {
  type: SLIDER,
  name: startAndStop,
  key: RANGE,
  sliderStart: 0,
  sliderStop: 8,
}

const numberOfSidesSettings = {
  type: SLIDER,
  name: numberOfSides,
  key: NUMBER_OF_SIDES,
  sliderStart: 3,
  sliderStop: 13,
}

const diameterSettings = {
  type: SLIDER,
  name: diameter,
  key: DIAMETER,
  sliderStart: 1,
  sliderStop: 400,
}

const numberOfShapesSettings = {
  type: SLIDER,
  // TODO consider turning all of these numberOf...Controls into a single control type
  name: numberOfShapes,
  key: NUMBER_OF_SHAPES,
  sliderStart: 3,
  sliderStop: 13,
}

const numberOfSpokesSettings = {
  type: SLIDER,
  name: numberOfSpokes,
  key: NUMBER_OF_SPOKES,
  sliderStart: 3,
  sliderStop: 13,
}

const stepOfOriginSettings = {
  type: SLIDER,
  name: stepOfOrigin,
  key: STEP,
  sliderStart: 0,
  sliderStop: 8,
}

const colorPickerSettings = {
  type: COLOR_PICKER,
  name: strokeColor,
  key: STROKE_COLOR,
}

const defaultControlSettings = {
  concentricCircles: {
    name: concentricCircles,
    key: CONCENTRIC_CIRCLES,
    shouldShow: true,
    subControlsHidden: false,
    lineThickness: DEFAULT_LINE_THICKNESS, // TODO turn all numbers into consts
    range: [0, 1],
    strokeColor: "#000",
    subControls: [
      lineThicknessSettings,
      startStopSettings,
      colorPickerSettings,
    ],
  },
  concentricPolygons: {
    name: concentricPolygons,
    key: CONCENTRIC_POLYGONS,
    shouldShow: true,
    subControlsHidden: false,
    numberOfSides: DEFAULT_NUMBER_OF_SIDES,
    rotation: DEFAULT_ROTATION,
    lineThickness: DEFAULT_LINE_THICKNESS,
    range: [0, 2],
    strokeColor: "#000",
    subControls: [
      numberOfSidesSettings,
      rotationSettings,
      lineThicknessSettings,
      startStopSettings,
      colorPickerSettings,
    ],
  },
  ringOfCircles: {
    name: ringOfCircles,
    key: RING_OF_CIRCLES,
    shouldShow: true,
    subControlsHidden: false,
    numberOfShapes: DEFAULT_NUMBER_OF_SHAPES,
    rotation: DEFAULT_ROTATION,
    lineThickness: DEFAULT_LINE_THICKNESS,
    diameter: 200,
    step: 2,
    strokeColor: "#000",
    subControls: [
      numberOfShapesSettings,
      rotationSettings,
      lineThicknessSettings,
      diameterSettings,
      stepOfOriginSettings,
      colorPickerSettings,
    ],
  },
  ringOfPolygons: {
    name: ringOfPolygons,
    key: RING_OF_POLYGONS,
    shouldShow: true,
    subControlsHidden: false,
    numberOfShapes: DEFAULT_NUMBER_OF_SHAPES,
    numberOfSides: DEFAULT_NUMBER_OF_SIDES,
    rotation: DEFAULT_ROTATION,
    lineThickness: DEFAULT_LINE_THICKNESS,
    diameter: 20,
    step: 1,
    strokeColor: "#000",
    subControls: [
      numberOfSidesSettings,
      numberOfShapesSettings,
      rotationSettings,
      diameterSettings,
      lineThicknessSettings,
      stepOfOriginSettings,
      colorPickerSettings,
    ],
  },
  radiantLines: {
    name: radiantLines,
    key: RADIANT_LINES,
    shouldShow: true,
    subControlsHidden: false,
    numberOfSpokes: DEFAULT_NUMBER_OF_SPOKES,
    rotation: DEFAULT_ROTATION,
    lineThickness: DEFAULT_LINE_THICKNESS,
    range: [0, 1],
    strokeColor: "#000",
    subControls: [
      numberOfSpokesSettings,
      rotationSettings,
      lineThicknessSettings,
      startStopSettings,
      colorPickerSettings,
    ],
  },
  radiantDots: {
    name: radiantDots,
    key: RADIANT_DOTS,
    shouldShow: true,
    subControlsHidden: false,
    numberOfSpokes: DEFAULT_NUMBER_OF_SPOKES,
    rotation: DEFAULT_ROTATION,
    lineThickness: DEFAULT_LINE_THICKNESS,
    range: [0, 1],
    strokeColor: "#000",
    subControls: [
      numberOfSpokesSettings,
      rotationSettings,
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
