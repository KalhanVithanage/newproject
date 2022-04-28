import React from "react";
import logo from "../../assets/Images/logo.png";
import { Row, Col } from "antd";
const Header = () => {
  return (
    <div>
      <div className="headerContainer">
        <div className="headerMain"></div>
        <Row>
          <Col>
            <img src={logo} className="logoImg" />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Header;
