import React, { useState } from "react";
import { Input, Row, Col, Button } from "antd";
import moment from "moment";
import { DatePicker } from "antd";
import Imageuploadtemplate from "./imageUploadTemplate";

const dateFormatList = ["DD/MM/YYYY", "DD/MM/YY"];
const Commantemplate = (props) => {
  const { handleSubmit } = props;
  const [form, setForm] = useState({
    templateName: "",
    startDate: "",
    subjectLine: "",
    endDate: "",
    uploadImg: "",
  });

  const handleForm = (e) => {
    e.preventDefault();
    handleSubmit(form);
  };

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleChangeDate = (dateString, type) => {
    if (type === "startDate")
      setForm((pre) => {
        return { ...pre, startDate: dateString };
      });
    if (type === "endDate")
      setForm((pre) => {
        return { ...pre, endDate: dateString };
      });
  };

  return (
    <div>
      <form onSubmit={handleForm}>
        <Row justify="center" gutter={[30, 0]} className="mainRow">
          <Col className="colForm" xs={24} sm={4} md={24} lg={12} xl={12}>
            <div className="templateFormContainer">
              <Row >
                <Col xs={24} sm={4} md={24} lg={24} xl={24}>
                <div className="formTemplateLeft">
                  <Row gutter={[30, 0]}>
                    <Col xs={24} sm={4} md={24} lg={12} xl={12}>

                 
                    <p className="templateFormLabel">Template Name</p>
                    <Input
                      className="inputFeildTemplate "
                      name="templateName"
                      onChange={handleChange}
                    />
                    </Col>
                    <Col xs={24} sm={4} md={24} lg={12} xl={12}>
                    <p className="templateFormLabel">Subject Line</p>
                    <Input
                      className="inputFeildTemplate "
                      name="subjectLine"
                      onChange={handleChange}
                    />
                    </Col>
                
                  
                   
                
                  </Row>
                  </div>
                </Col>

                <Col xs={24} sm={4} md={24} lg={24} xl={24}>
                  <div className="formTemplateRight">
                    <Row gutter={[30, 0]}>
                    <Col xs={24} sm={4} md={24} lg={12} xl={12}>
                  
                     <p className="templateFormLabel">Start Date</p>
                    <DatePicker
                      className="inputFeildTemplate"
                      defaultValue={
                        form.startDate !== ""
                          ? moment(form?.startDate, dateFormatList[0])
                          : moment("01/01/2015", dateFormatList[0])
                      }
                      format={dateFormatList}
                      name="startDate"
                      onChange={(date, dateString, type) => {
                        handleChangeDate(dateString, "startDate");
                      }}
                    />
                    </Col>
                    <Col xs={24} sm={4} md={24} lg={12} xl={12}>
                    <p className="templateFormLabel">End Date</p>
                    <DatePicker
                      className="inputFeildTemplate"
                      defaultValue={
                        form.endDate !== ""
                          ? moment(form?.endDate, dateFormatList[0])
                          : moment("01/01/2015", dateFormatList[0])
                      }
                      format={dateFormatList}
                      name="endDate"
                      onChange={(date, dateString, type) => {
                        handleChangeDate(dateString, "endDate");
                      }}
                    />
                    </Col>
                    </Row>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
          <Col xs={24} sm={4} md={24} lg={12} xl={12}>
            <Imageuploadtemplate />
          </Col>
        </Row>

        <div className="templateBtnSection">
          <Button className="backBtn" href="/">
            Back
          </Button>
          <Button className="saveBtn" htmlType="submit">
            Save
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Commantemplate;
