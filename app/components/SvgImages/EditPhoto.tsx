import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";

function EditPhoto(props: any) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={94}
      height={94}
      viewBox="0 0 436.259 436"
      {...props}
    >
      <Circle cx={218.129} cy={218} r={218.129} fill="#eceff1" />
      <Path
        xmlns="http://www.w3.org/2000/svg"
        d="M274.437 134.44c0 34.291-27.8 62.092-62.092 62.092s-62.092-27.801-62.092-62.093 27.8-62.092 62.092-62.092 62.092 27.8 62.092 62.092zm98.766 111.532l11.333-11.337 26.284 26.283-11.335 11.337zm-74.73 74.645l67.76-67.76 26.282 26.283-67.76 67.76zM282.748 362.7l32.969-10.99-21.979-21.981zm4.2-43.682l.211-.418c0-.072 0-.072.068-.14a3.79 3.79 0 01.632-.982c0-.068.068-.068.068-.14l.211-.21 20.371-20.368c-18.066-36.591-55.305-59.782-96.11-59.85-57.4 0-104.44 45.429-106.961 102.2h174.86l6.719-20.092zm0 0"
        data-original="#000000"
        fill="#455a64"
      />
    </Svg>
  );
}

export default EditPhoto;
