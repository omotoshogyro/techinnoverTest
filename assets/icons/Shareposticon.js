import React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

function Shareposticon() {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={25} fill="none">
      <G clipPath="url(#a)">
        <Path fill="#000" d="M0 .692h24v24H0z" />
        <Path
          stroke="#fff"
          strokeLinejoin="round"
          strokeWidth={1.8}
          d="M2.684 4.642H21.57l-9.443 16.356-2.766-9.068a.9.9 0 0 0-.203-.352L2.684 4.642Z"
        />
      </G>
      <Defs>
        <ClipPath id="a">
          <Path fill="#fff" d="M0 .692h24v24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default Shareposticon;
