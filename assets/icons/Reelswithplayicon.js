import React from "react";
import Svg, { G, Rect, Path, Defs } from "react-native-svg";

function Reelswithplayicon() {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} fill="none">
      <G filter="url(#a)">
        <Rect
          width={23.077}
          height={23.077}
          x={4.462}
          y={4.231}
          fill="#fff"
          rx={4.808}
        />
        <Rect
          width={22.115}
          height={22.115}
          x={4.942}
          y={4.712}
          stroke="#fff"
          strokeWidth={0.962}
          rx={4.327}
        />
      </G>
      <Rect
        width={11.539}
        height={11.539}
        x={20}
        y={13}
        fill="#000"
        rx={5.769}
      />
      <Path
        fill="#fff"
        d="M28.898 15.485a1.179 1.179 0 0 0-.976-.253l-2.722.51a1.482 1.482 0 0 0-1.21 1.458v2.92a1.175 1.175 0 0 0-1.688.567 1.187 1.187 0 1 0 2.281.454v-2.705a.593.593 0 0 1 .484-.583l3.316-.623a.297.297 0 0 1 .351.294v1.708a1.174 1.174 0 0 0-.593-.166 1.186 1.186 0 1 0 1.186 1.186v-3.854a1.183 1.183 0 0 0-.429-.913Z"
      />
      <Defs></Defs>
    </Svg>
  );
}

export default Reelswithplayicon;
