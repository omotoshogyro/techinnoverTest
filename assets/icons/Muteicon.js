import React from 'react'
import Svg, { Path } from "react-native-svg"


function Muteicon() {
  return (
    <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={20}
    fill="none"
  >
    <Path
      fill="#fff"
      d="M12.5 2.06C12.5.725 10.884.056 9.94 1l-4.5 4.5H3.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 0 0 .5 10c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V2.06ZM16.78 7.22a.75.75 0 1 0-1.06 1.06L17.44 10l-1.72 1.72a.75.75 0 1 0 1.06 1.06l1.72-1.72 1.72 1.72a.75.75 0 1 0 1.06-1.06L19.56 10l1.72-1.72a.75.75 0 0 0-1.06-1.06L18.5 8.94l-1.72-1.72Z"
    />
  </Svg>
  )
}

export default Muteicon