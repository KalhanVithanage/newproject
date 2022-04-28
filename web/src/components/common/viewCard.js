import { Modal } from "antd";
import React from "react";
import cardimg from "../../assets/Images/cardimg.png";

const Viewlist = (props) => {
  const { show, handlecansel } = props;

  return (
    <>
      <Modal
        centered
        title="Basic Modal"
        visible={show}
        wrapClassName="viewModal"
        onCancel={() => {
          handlecansel();
        }}
      >
        <div className="cardImgContainer">
          <div className="cardImgBody">
            <img src={cardimg} alt="cardImg" className="cardImg" />
          </div>
          <div className="cardBodySection">
            <p className="mainHead">
              Dear <span> Title </span> <span> Second Name</span>
            </p>
            <p className="subHead">Apply for Dec 2021 Hotel Promo!!!!</p>
            <p className="mainHead">
              <span>From</span> <span>Name</span> <span>Branch</span>
            </p>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Viewlist;
