import React from "react";
import Header from "./Header";
import MobileHeader from "./MobileHeader";

import { DeviceSize } from "../../devices";
import { useMediaQuery } from "react-responsive";

function Banner() {
  const isMobile = useMediaQuery({ maxWidth: DeviceSize.mobile });

  return <div>{isMobile ? <MobileHeader /> : <Header />}</div>;
}

export default Banner;
