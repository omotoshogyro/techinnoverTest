import React from 'react'
import Svg, { Circle, Defs, LinearGradient, Stop } from "react-native-svg"


function Reelstoryringicon() {
  return (
    <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={36}
    height={37}
    fill="none"
  >
    <Circle cx={18} cy={18.231} r={17.25} stroke="url(#a)" strokeWidth={1.5} />
    <Defs>
      <LinearGradient
        id="a"
        x1={39.789}
        x2={0}
        y1={4.021}
        y2={28.178}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#C913B9" />
        <Stop offset={0.501} stopColor="#F9373F" />
        <Stop offset={1} stopColor="#FECD00" />
      </LinearGradient>
    </Defs>
  </Svg>
  )
}

export default Reelstoryringicon