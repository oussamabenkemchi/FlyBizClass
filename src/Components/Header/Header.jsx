import React from "react";

import { Link } from "react-router-dom";
import "./Header.css";
import styled from "styled-components";
import { useState } from "react";
import { useEffect } from "react";

function Header() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    const _fnEmptyFunctionPointer = () => {};
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll", _fnEmptyFunctionPointer);
    };
  }, []);

  return (
    <div className={show ? "header header_scroll" : "header"}>
      <div class="header__LefSection">
        <Link className="header__leftSection_title" to="/">
          FlyBizClass
        </Link>
      </div>

      <div className="header__MiddleSection">
        <Link className="header__MiddleSection_link" to="/">
          Home
        </Link>
        <Link className="header__MiddleSection_link" to="/about">
          About
        </Link>
        <Link className="header__MiddleSection_link" to="/destinations">
          Destinations
        </Link>
        <Link className="header__MiddleSection_link" to="/pages">
          Pages
        </Link>
        <Link className="header__MiddleSection_link" to="/faq">
          FAQ
        </Link>
        <Link className="header__MiddleSection_link" to="/contact">
          Contact
        </Link>
      </div>

      <div className="header__RightSection">
        <h2>phone number</h2>
      </div>
    </div>
  );
}

export default Header;
