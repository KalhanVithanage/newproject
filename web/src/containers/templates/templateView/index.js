import React from "react";
import Footer from "../../../components/footer";
import Header from "../../../components/header";
import { Checkbox, Button, Row, Col, Pagination } from "antd";
import { UpOutlined, DownOutlined } from "@ant-design/icons";
import Commonviewcard from "../../../components/common/commonViewCard";

function onChange(checkedValues) {
  console.log("checked = ", checkedValues);
}

const plainOptions = ["Greetings", "Promotions"];

const TemplateView = () => {
  return (
    <div className="templateViewMainContainer">
      <Header />
      <div className="templateViewBodyContainer">
        <div className="templateLinkSection">
          <a href="/A" className="templateLink">
            Create Template
          </a>
          <a href="#" className="templateLink">
            View Template
          </a>
        </div>
        <div className="middleSection">
          <div>
            <p className="greetingsPromoHeading">Greetings and Promo List</p>
          </div>
          <div className="checkBoxConatainer">
            <Checkbox.Group
              options={plainOptions}
              defaultValue={["Greetings"]}
              onChange={onChange}
              className="checkboxOptions"
            />
          </div>
        </div>
        <div className="cardGallerySection">
          <Row className="galleryRow" justify="center" gutter={[40, 0]}>
            <Col xs={24} sm={24} md={24} lg={12} xl={12}>
              <Commonviewcard />
            </Col>

            <Col xs={24} sm={24} md={24} lg={12} xl={12}>
              <Commonviewcard />
            </Col>
          </Row>
          <Row className="galleryRow" justify="center" gutter={[40, 0]}>
            <Col xs={24} sm={24} md={24} lg={12} xl={12}>
              <Commonviewcard />
            </Col>

            <Col xs={24} sm={24} md={24} lg={12} xl={12}>
              <Commonviewcard />
            </Col>
          </Row>
          <Row className="galleryRow" justify="center" gutter={[40, 0]}>
            <Col xs={24} sm={24} md={24} lg={12} xl={12}>
              <Commonviewcard />
            </Col>

            <Col xs={24} sm={24} md={24} lg={12} xl={12}>
              <Commonviewcard />
            </Col>
          </Row>
        </div>
        <div className="paginationSection">
          <div className="paginationSectionOne">
            <div>
              <p className="itemsPerPageHeading">Items per page</p>
            </div>

            <div className="paginationBtnSection">
              <div>
                <p className="pageCount">5</p>
              </div>

              <div className="upDownBtn">
                <UpOutlined className="btnSwitch" />
                <DownOutlined className="btnSwitch" />
              </div>
            </div>
          </div>
          <div className="paginationSectionTwo">
            <Pagination defaultCurrent={6} total={50} />
          </div>
        </div>
        <div className="viewListBtnSection">
          <Button className="backBtn">Back</Button>
          <Button className="nextBtn">Next</Button>
        </div>
      </div>
      <Footer className="viewFooter" />
    </div>
  );
};

export default TemplateView;
