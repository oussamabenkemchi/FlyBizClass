import React from "react";

import { Button } from "@material-ui/core";
import KeyboardVoiceIcon from "@material-ui/icons/KeyboardVoice";
import { Link } from "react-router-dom";
import RoomIcon from "@material-ui/icons/Room";
import PhoneIcon from "@material-ui/icons/Phone";
import SendIcon from "@material-ui/icons/Send";

import "./Footer.css";

function Footer() {
  return (
    <div className="footer__container">
      <div className="footer">
        <div className="footer__info">
          <div className="footerInfo__left">
            <h2>About</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              finibus, purus vitae lacinia mattis, augue massa venenatis metus,
            </p>
          </div>
          <div className="footerInfo__middle">
            <h2>Navigation Links</h2>
            <Link to="/home">Home</Link>
            <Link to="About">About</Link>
            <Link to="/home">Contacts</Link>
            <Link to="About">FAQ</Link>
          </div>
          <div className="footerInfo__right">
            <h2>Contact Us</h2>
            <div className="footerInfo_items">
              <div className="item">
                <RoomIcon />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  finibus.
                </p>
              </div>
              <div className="item">
                <PhoneIcon />
                <p>134-423-9673</p>
              </div>
              <div className="item">
                <SendIcon />
                <p>email@email.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className="footer__copyright">
          <p>Copyright © 2021</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
