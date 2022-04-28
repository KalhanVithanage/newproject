import React, { useState } from "react";
import { Button, Row, Col, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import img1 from "../../assets/Images/birhday.jpg";
import ViewCard from "./viewCard";
const Imageuploadtemplate = (props) => {
  const { handleImg } = props;
  const [iscardVisible, setIsCardVisible] = useState();

  const uploadProps = {
    name: 'file',
    action: 'https://run.mocky.io/v3/729f33a2-ff2a-4111-9676-4a5140b13248',
 
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        
        console.log(info.file.name);
      } else if (info.file.status === 'error') {
        console.log(info.file.name);

      }
    },
  };
  const viewCardModel = () => {
    setIsCardVisible(true);
  };

  const handleCansel = () => {
    setIsCardVisible(false);
  };

  return (
    <div>
      <div className="imgUploadContainer">
        <div className="uploadRightSection">
          <Row>
            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
              <div className="uploadRightSectionLeft">
                <p className="uploadImageLabel">Upload Image</p>
                {/* <Button className="Upload-btn">Upload Template</Button> */}

                <Upload {...uploadProps}>
                  <Button className="uploadTemplateBtn" icon={<UploadOutlined />}> Upload Template</Button>
                </Upload>
              </div>
            </Col>
            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
              <div className="uploadRightSectionRight">
                <div className="uploadViewImgSection">
                  <img src={img1} alt="greetingImg" className="wishImg" />

                  <div className="viewBtnSection">
                    <Button className="viewBtn" onClick={viewCardModel}>
                      View
                    </Button>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>

      {iscardVisible && (
        <ViewCard show={iscardVisible} handlecansel={handleCansel} />
      )}
    </div>
  );
};

export default Imageuploadtemplate;
