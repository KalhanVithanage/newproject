import React, { useState } from "react";
import { Button, Row, Col, Input, Divider, Modal } from "antd";
import cardimg from "../../assets/Images/cardimg.png";
import { DatePicker, Popover } from "antd";
import moment from "moment";
import Viewlist from "./viewCard";
import { MoreOutlined } from "@ant-design/icons";
const dateFormatList = ["DD/MM/YYYY", "DD/MM/YY"];

const Commonviewcard = () => {
  const [iscardVisibleNew, setIsCardVisibleNew] = useState();

  const viewCardModel = () => {
    setIsCardVisibleNew(true);
  };

  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleCansel = () => {
    setIsCardVisibleNew(false);
  };

  const content = (
    <div className="popUpEdit">
      <a className="linksEdit">Edit</a>
      <Divider className="divider" />
      <Modal
        wrapClassName="deactivateModal"
        centered
        title="Basic Modal"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p className="deactivateText">Are you sure want to deactivate?</p>
        <div className="deactivateBtnSection">
          <Button className="noBtn">No</Button>
          <Button className="yesBtn">Yes</Button>
        </div>
      </Modal>

      <a className="linksEdit" onClick={showModal}>
        Deactivate
      </a>
    </div>
  );

  return (
    <div className="viewCardContainer">
      <Row gutter={[40, 0]}>
        <Col xs={6} sm={6} md={6} lg={8} xl={6}>
          <div className="viewCardLeft">
            <img src={cardimg} className="greetingImg" />
          </div>
        </Col>
        <Col xs={12} sm={12} md={18} lg={16} xl={18}>
       
          <div className="viewCardRight">
            <Row>
              <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                <div className="formTemplateTop">
                  <Row  gutter={[30, 0]}>
                  <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                  <p className="templateFormLabel">Template Name</p>
                  <Input className="inputFeildTemplate " />

                    </Col>
                    <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                    <p className="templateFormLabel">Subject Line</p>
                  <Input className=" inputFeildTemplate" />
                    </Col>

                  </Row>
                </div>
              </Col>

              <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                <div className="formTemplateBottom">
                <Popover
                    placement="bottom"
                    content={content}
                    trigger={"hover"}
                  >
                    <MoreOutlined className="dotsPopup" />
                  </Popover>
                  <Row  gutter={[30, 0]}>
                    <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                    <p className="templateFormLabel">Start Date</p>
                  <DatePicker
                    className="inputFeildTemplate"
                    defaultValue={moment("01/01/2015", dateFormatList[0])}
                    format={dateFormatList}
                  />
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                    <p className="templateFormLabel">End Date</p>
                  <DatePicker
                    className="inputFeildTemplate"
                    defaultValue={moment("01/01/2015", dateFormatList[0])}
                    format={dateFormatList}
                  />
                    </Col>
                  </Row>
              
                  <div className="viewLinkSection">
                    <a className="viewLink" onClick={viewCardModel}>
                      View
                    </a>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
          
        </Col>
      </Row>

      {/* {(iscardVisibleNew && <ViewCard show= {iscardVisibleNew} handlecansel = {handleCansel}/>)} */}
      {iscardVisibleNew && (
        <Viewlist show={iscardVisibleNew} handlecansel={handleCansel} />
      )}
    </div>
  );
};
export default Commonviewcard;
