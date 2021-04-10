import React from "react";
import styled from "styled-components";
import logo from "../images/logo.png";

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const LogoImage = styled.div`
  width: 100px;
  height: 100px;
  img {
    width: 100%;
    object-fit: contain;
  }
`;

const LogoText = styled.h2`
  font-size: 16px;
  color: #222;
  font-weight: 500px;
`;

function Logo() {
  return (
    <LogoWrapper>
      <LogoImage>
        <img src={logo} alt="logo of the web site" />
      </LogoImage>
      <LogoText>FlyBizClass</LogoText>
    </LogoWrapper>
  );
}

export default Logo;
