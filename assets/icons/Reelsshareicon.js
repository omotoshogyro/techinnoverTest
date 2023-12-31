import React from 'react'
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function Reelsshareicon() {
  return (
    <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={28}
    fill="none"
  >
    <G filter="url(#a)">
      <G clipPath="url(#b)">
        <Path
          fill="#fff"
          d="M26.394 4.784a2.899 2.899 0 0 0-1.21-.615 3.22 3.22 0 0 0-1.407-.026L8.82 6.843a5.08 5.08 0 0 0-2.343.882c-.67.475-1.171 1.101-1.449 1.808a3.458 3.458 0 0 0-.12 2.19c.199.726.63 1.39 1.245 1.916l1.606 1.376a.806.806 0 0 1 .202.26.703.703 0 0 1 .071.307v2.539c.003.357.098.709.28 1.03l-.007.005.025.02c.274.473.721.855 1.273 1.087l.024.021.007-.006c.374.156.785.238 1.201.24h2.962c.247 0 .485.084.66.234l1.606 1.376c.43.373.943.67 1.507.872.565.202 1.171.307 1.783.308.51 0 1.017-.072 1.5-.211a4.71 4.71 0 0 0 2.095-1.215c.552-.565.91-1.25 1.032-1.98l3.155-12.848c.116-.4.11-.82-.02-1.219a2.339 2.339 0 0 0-.72-1.05Zm-17.312 9.1-1.607-1.376a2.295 2.295 0 0 1-.756-1.148 2.037 2.037 0 0 1 .081-1.316c.168-.434.477-.817.891-1.105a3.045 3.045 0 0 1 1.446-.518l14.81-2.672L9.9 17.789v-2.207a2.093 2.093 0 0 0-.21-.92 2.399 2.399 0 0 0-.608-.779Zm13.06 5.745c-.071.442-.285.859-.618 1.203-.333.344-.77.601-1.265.744a3.252 3.252 0 0 1-1.532.062A2.96 2.96 0 0 1 17.385 21l-1.608-1.378a2.852 2.852 0 0 0-.908-.522 3.193 3.193 0 0 0-1.072-.181H11.22L25.27 6.882l-3.126 12.747Z"
        />
      </G>
    </G>
    <Defs>
      <ClipPath id="b">
        <Path fill="#fff" d="M4.782 4.077h22.436v19.231H4.782z" />
      </ClipPath>
    </Defs>
  </Svg>
  )
}

export default Reelsshareicon