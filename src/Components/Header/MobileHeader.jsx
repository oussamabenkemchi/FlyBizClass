import React from "react";
import { useState } from "react";

import { Link } from "react-router-dom";
import "./Mobile.css";
import { MenuToggle } from "./menuToggle";

function MobileHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="headerMobile">
      <div class="headerMobile__LefSection">
        <Link className="headerMobile__leftSection_title" to="/">
          FlyBizClass
        </Link>
      </div>

      {isOpen && (
        <div className="headerMobile__MiddleSection">
          <Link className="headerMobile__MiddleSection_link" to="/">
            Home
          </Link>
          <Link className="headerMobile__MiddleSection_link" to="/about">
            About
          </Link>
          <Link className="headerMobile__MiddleSection_link" to="/destinations">
            Destinations
          </Link>
          <Link className="headerMobile__MiddleSection_link" to="/pages">
            Pages
          </Link>
          <Link className="headerMobile__MiddleSection_link" to="/faq">
            FAQ
          </Link>
          <Link className="headerMobile__MiddleSection_link" to="/contact">
            Contact
          </Link>

          <div className="headerMobile__RightSection">
            {isOpen && <h2>phone number</h2>}
          </div>
        </div>
      )}

      <MenuToggle isOpen={isOpen} toggle={() => setIsOpen(!isOpen)} />
    </div>
  );
}

export default MobileHeader;
