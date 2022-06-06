import { useState } from "react"

const useAdjustShape = () => {
  const [numOfLines, setNumOfLines] = useState(3)

  return {
    numOfLines,
    setNumOfLines,
  }
}

export default useAdjustShape
