import React from 'react'
import Svg, { G, Path, Defs } from "react-native-svg"

function IspostPhotoicon() {
  return (
    <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={37}
    height={40}
    fill="none"
  >
    <G filter="url(#a)">
      <Path
        fill="#fff"
        d="M21.359 24.367h-5.556a2.781 2.781 0 0 1-2.777-2.777v-5.556a2.781 2.781 0 0 1 2.777-2.778h5.556a2.782 2.782 0 0 1 2.778 2.778v5.556a2.78 2.78 0 0 1-2.778 2.777Zm5-.555V16.59a.556.556 0 0 0-1.111 0v7.222a1.666 1.666 0 0 1-1.667 1.667H16.36a.556.556 0 1 0 0 1.11h7.222a2.781 2.781 0 0 0 2.778-2.777Z"
      />
    </G>
    <Defs></Defs>
  </Svg>
  )
}

export default IspostPhotoicon


