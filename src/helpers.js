const createSliderMarks = (startValue, endValue) => {
  const marks = []
  for (let i = startValue; i < endValue + 1; i++) {
    marks.push({
      value: i,
      label: i.toString(),
    })
  }
  return marks
}

export { createSliderMarks }
