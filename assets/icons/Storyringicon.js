import React from 'react'
import Svg, { Circle, Defs, LinearGradient, Stop } from "react-native-svg"


function Storyringicon() {
  return (
    <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={70}
    height={70}
    fill="none"
  >
    <Circle
      cx={35.385}
      cy={34.962}
      r={33.413}
      stroke="url(#a)"
      strokeWidth={2.404}
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={77.287}
        x2={0.769}
        y1={7.634}
        y2={54.091}
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

export default Storyringicon