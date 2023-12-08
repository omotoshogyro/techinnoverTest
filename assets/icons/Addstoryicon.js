import React from 'react'
import Svg, { Circle, Path } from "react-native-svg"

function Addstoryicon() {
  return (
    <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
  >
    <Circle cx={9.846} cy={10.192} r={9.615} fill="#1FA1FF" />
    <Path
      fill="#fff"
      fillRule="evenodd"
      d="M10.808 6.346a.962.962 0 0 0-1.923 0v2.885H6a.962.962 0 1 0 0 1.923h2.885v2.884a.962.962 0 0 0 1.923 0v-2.884h2.884a.962.962 0 0 0 0-1.923h-2.884V6.346Z"
      clipRule="evenodd"
    />
  </Svg>
  )
}

export default Addstoryicon