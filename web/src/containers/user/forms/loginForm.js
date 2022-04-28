import React, { useState } from "react";
import { connect, useSelector } from "react-redux";
import { Row, Col, Input, Button } from "antd";
import { doLogin } from "../action/loginAction";
import loginImgBackground from "../../../assets/Images/login1.png";
import logoImg from "../../../assets/Images/logo.png";

const Loginform = (props) => {
  const { doLogin } = props;
  const [form, setForm] = useState({ email: "", password: "" });

  const submit = (e) => {
    e.preventDefault();

    doLogin(form);
  };

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="loginContainer">
      <Row>
        <Col xs={24} sm={24} md={24} lg={12} xl={12}>
          <div
            className="leftSectionLogin"
            style={{
              backgroundImage: `url(${loginImgBackground})`,
            }}
          >
            <p className="loginText">
              This app enables the bank to send greetings to clients on their
              life celebrations , religious & cultural festivals and to send
              promotional advertisments.{" "}
            </p>
          </div>
        </Col>

        <Col xs={24} sm={24} md={24} lg={12} xl={12}>
          <div className="rightSectionLogin">
            <div className="logoWithLogin">
              <img className="logoLogin" alt="logoImg" src={logoImg} />
              <p className="headingLogin">Login</p>
            </div>
            <form onSubmit={submit}>
              <div className="inputSection">
                <p className="email label">Email</p>
                <Input
                  className="inputFeild "
                  name="email"
                  onChange={handleChange}
                />
                <p className="password label">Password</p>
                <Input
                  className="inputFeild"
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                />
              </div>
              <Button htmlType="submit" className="continueBtn" >
                Continue
              </Button>
            </form>
          </div>
        </Col>
      </Row>
      <div className="uploadImage"></div>
    </div>
  );
};
const mapStateToProps = (dispatch) => ({});

const mapDispatchToProps = (dispatch) => ({
  doLogin: (payload) => {
    dispatch(doLogin(payload));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Loginform);
