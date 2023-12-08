import React from "react";
import Svg, { Circle, Path } from "react-native-svg";

function Searchtabicon() {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width={25} height={24} fill="none">
      <Circle
        cx={10.596}
        cy={9.615}
        r={7.788}
        stroke="#fff"
        strokeWidth={1.731}
      />
      <Path
        stroke="#fff"
        strokeLinecap="round"
        strokeWidth={1.731}
        d="m22.135 21.154-5.77-5.77"
      />
    </Svg>
  );
}

export default Searchtabicon;
