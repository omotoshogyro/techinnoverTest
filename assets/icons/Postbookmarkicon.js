import React from 'react'
import Svg, { Path } from "react-native-svg"


function Postbookmarkicon() {
  return (
    <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={25}
    fill="none"
  >
    <Path fill="#000" d="M.385.692h24v24h-24z" />
    <Path
      stroke="#fff"
      strokeLinejoin="round"
      strokeWidth={1.8}
      d="M4.285 21.77V2.593h16.2v19.179L12.96 15.5a.9.9 0 0 0-1.153 0l-7.523 6.27Z"
    />
  </Svg>
  )
}

export default Postbookmarkicon