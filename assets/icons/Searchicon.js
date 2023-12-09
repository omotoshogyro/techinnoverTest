import React from 'react'
import Svg, { Path } from "react-native-svg"


function Searchicon() {
  return (
    <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={17}
    height={17}
    fill="none"
  >
    <Path
      fill="#969696"
      d="m15.203 13.918-3.313-3.313a5.56 5.56 0 1 0-.785.785l3.313 3.313a.555.555 0 0 0 .785-.785Zm-7.609-2.383a4.441 4.441 0 1 1 0-8.882 4.441 4.441 0 0 1 0 8.882Z"
    />
  </Svg>
  )
}

export default Searchicon