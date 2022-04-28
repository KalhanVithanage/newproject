import React, { useState } from "react";
import Imageuploadtemplate from "../../../components/common/imageUploadTemplate";
import Commantemplate from "../../../components/common/templateForm";
import Header from "../../../components/header";
import { Checkbox, Button, Row, Col } from "antd";
import Footer from "../../../components/footer";
import { connect } from "react-redux";
import { saveForm } from "../action/templateFormAction";
import { GREETING, PROMOTION } from "../../../config/constants";

const TemplateForm = (props) => {
  const { doSaveForm } = props;
  const [isPromotion, setisPromotion] = useState(false);
  const [isgreeting, setisgreeting] = useState(true);

  const submitTemplate = (form) => {
    doSaveForm(form);
  };

  function onChange(checkedValues, type) {
    if (type === GREETING) {
      setisPromotion(false);
      setisgreeting(true);
    }
    if (type === PROMOTION) {
      setisgreeting(false);
      setisPromotion(true);
    }
  }
  return (
    <div>
      <div className="templateMainSection">
        <Header />

        <div className="templateBodyContainer">
          <div className="templateLinkSection">
            <a href="#" className="templateLink">
              Create Template
            </a>
            <a href="/B" className="templateLink">
              View Template
            </a>
          </div>
          <p className="greetingHeading">Create  {isPromotion ? PROMOTION : isgreeting ? GREETING : null}</p>

          
            <Row className="checkboxSection" gutter={[30, 0]}>
              <Col className="sectionOne" xs={24} sm={4} md={24} lg={12} xl={12}>
              <div>
              <Checkbox
                    className=" option"
                    checked={isgreeting}
                    onChange={(e, type) => {
                      onChange(e, GREETING);
                    }}
                  >
                    Greetings
                  </Checkbox>
              </div>
              <div>
   
              <Checkbox
                    className="checkboxOptions  option"
                    checked={isPromotion}
                    onChange={(e, type) => {
                      onChange(e, PROMOTION);
                    }}
                  >
                    Promotions
                  </Checkbox>
              </div>
            
               
              </Col>
              <Col className="sectionTwo" xs={24} sm={4} md={24} lg={12} xl={12}>
              
                  <p className="subHead">
                    Upload{" "}
                    {isPromotion ? PROMOTION : isgreeting ? GREETING : null}
                     {" "}  Design
                  </p>
              
              </Col>
            </Row>
        
          <div className="commonSectionAdmin">
            <Commantemplate handleSubmit={submitTemplate} />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};
const mapStateToProps = (dispatch) => ({});

const mapDispatchToProps = (dispatch) => ({
  doSaveForm: (payload) => {
    dispatch(saveForm(payload));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TemplateForm);
