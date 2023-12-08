import React from "react";
import Svg, { Circle } from "react-native-svg"

function Moreicon() {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={25} fill="none">
      <Circle cx={6.5} cy={12.251} r={1.5} fill="#fff" />
      <Circle cx={12} cy={12.251} r={1.5} fill="#fff" />
      <Circle cx={17.5} cy={12.251} r={1.5} fill="#fff" />
    </Svg>
  );
}

export default Moreicon;
