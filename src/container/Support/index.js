import React from "react";
import styled from "styled-components";
import Navbar from "../../components/common/navbar";
import Footer from "../../components/common/Footer/Footer";
import { message } from "antd";

const SupportWrapper = styled.div`
  .contact-wrapper {
    text-align: center;
  }
  .home-text {
    color: #0064fb;
  }
  .contact-text {
    color: #79798d;
  }
  .contact-page {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  .contact-page-input {
    outline: none;
    height: 60px;
    background-color: #f4f8fc;
    border-radius: 4px;
    border: none;
    width: 100%;
    padding-left: 15px;
  }
  .wrapper {
    max-width: 1150px;
    width: 100%;
    text-align: center;
    margin: 0 auto;
  }
  .message-text {
    color: #212529;
    height: 120px;
    width: 100%;
    padding: 16px 0px 0px 16px;
    border-radius: 4px;
    background-color: #f4f8fc;
    border: none;
    outline: none;
  }
  .footer-button {
    margin-top: 10px;
    padding: 15px 30px;
    border-radius: 4px;
    color: white;
    background-color: #0064fb;
    border: none;
  }
  .footer-button:hover {
    background-color: #237efd;
  }
  .contact-header {
    background: rgba(1, 6, 15, 0.402);
  }
  @media (min-width: 300px) and (max-width: 780px) {
    .contact-page {
      display: grid;
      grid-template-columns: 1fr;
    }
    .contact-header {
      padding: 70px 0px;
    }
    .contact-wrapper {
      margin-top: 68px;
      background-position-x: -173px !important;
    }
    .contact-title {
      font-size: 22px;
    }
    .home-text {
      font-size: 12px;
    }
    .contact-text {
      font-size: 12px;
    }
    .get-in {
      font-size: 20px;
    }
    .contact-page-input {
      outline: none;
      height: 50px;
      background-color: #f4f8fc;
      border-radius: 4px;
      border: none;
      font-size: 14px;
      width: 100%;
      padding-left: 15px;
    }
  }
`;

const Index = () => {
  const [formdata, setFormData] = React.useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormData((predata) => {
      return {
        ...predata,
        [name]: value,
      };
    });
  };
  const formSubmit = (e) => {
    e.preventDefault();
    if (formdata.name && formdata.email && formdata.message && formdata.phone && formdata.subject) {
      console.log("send");
      setFormData({name:"", email:"", message:"", subject:"", phone:""});
      message.success("Message Send Successfully");
    } else {
      console.log("error");
      message.error("Please Fill All Field!");
    }
  };

  return (
    <SupportWrapper>
      <Navbar />
      <div id="contact">
        <div
          className="mt88 contact-wrapper"
          style={{
            background: `url("https://media.istockphoto.com/id/1416335096/photo/businessman-hand-holding-smart-phone-with-icon-mobile-phone-mail-telephone-and-address.jpg?b=1&s=170667a&w=0&k=20&c=O39_wq7HB2oZHV3pyeZDxFAq0Xb_zNvLKrAIEWDVveY=")`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="flex flex-col py100 gap6 items-center contact-header">
            <div className="font-45 semi-bold-text contact-title white--text">
              Contact{" "}
            </div>
            <div className="flex gap5 items-center">
              <div className="contact-text normal-text font-16">Contact Us</div>
            </div>
          </div>
        </div>

        <div className="py80">
          <div className="wrapper">
            <h3 className="font-30 semi-bold-text get-in pb25">
              Get In Touch{" "}
            </h3>
            <form action="" id="contact-form">
              <div className="mt14">
                <div className="contact-page mx24 gap20">
                  <input
                    type="text"
                    placeholder="Name"
                    className="contact-page-input"
                    name="name"
                    value={formdata?.name}
                    onChange={(e) => onChangeHandler(e)}
                    id=""
                  />
                  <input
                    type="text"
                    placeholder="Email"
                    className="contact-page-input"
                    name="email"
                    value={formdata?.email}
                    onChange={(e) => onChangeHandler(e)}
                    id=""
                  />
                  <input
                    type="text"
                    placeholder="Phone"
                    className="contact-page-input"
                    name="phone"
                    value={formdata?.phone}
                    onChange={(e) => onChangeHandler(e)}
                    id=""
                  />
                  <input
                    type="text"
                    placeholder="Subject"
                    className="contact-page-input"
                    name="subject"
                    value={formdata?.subject}
                    onChange={(e) => onChangeHandler(e)}
                    id=""
                  />
                </div>
                <div className="px20 pt24">
                  <textarea
                    type=""
                    name="message"
                    value={formdata.message}
                    onChange={(e) => onChangeHandler(e)}
                    placeholder="Message"
                    className=" message-text"
                  />
                </div>
                <div className="text-center mt20">
                  <button
                    className="footer-button normal-text bg-blue-500 text-white"
                    onClick={(e) => formSubmit(e)}
                  >
                    Send Message
                  </button>{" "}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </SupportWrapper>
  );
};

export default Index;
