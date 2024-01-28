import React, { useState } from "react";
import styled from "styled-components";
import location_icon from "../../../assets/images/footer/location_icon.svg";
import mail_icon from "../../../assets/images/footer/mail_icon.svg";
import contact_icon from "../../../assets/images/footer/contact_icon.svg";
import twitter_icon from "../../../assets/images/Social_icon/twitter_icon.svg";
import facebook_icon from "../../../assets/images/Social_icon/facebook_icon.svg";
import linkedin_icon from "../../../assets/images/Social_icon/linkedin_icon.svg";
import insta_icon from "../../../assets/images/Social_icon/insta_icon.svg";
import tech from "../../../assets/images/navbar/tech-utsav-logo.png";
const FooterWrapper = styled.div`
  background: #2868c5 !important;
  a {
    text-decoration: none;
  }
  .logo {
    height: 130px;
    width: 230px;
  }
  .footer--main-container {
    max-width: 1440px;
    width: 100%;
    margin: 0 auto;
  }
  .footer--container {
    padding: 51px 95px 32px 100px;
  }
  .sckilled--text {
    letter-spacing: 0.2em;
  }
  .skilled-description {
    max-width: 581px;
    width: 100%;
  }
  .footer-copyright-section {
    border-top: 1px solid #ffffff;
    padding-left: 135px;
    padding-right: 135px;
  }
  .email-submit-btn {
    width: max-content;
  }
  .footer-address,
  .about-us,
  .quick-link {
    width: 380px !important;
  }
  .social-icon {
    filter: grayscale(50);
  }
  .social-icon:hover {
    filter: brightness(100);
  }
  .about-us {
    width: auto;
    justify-self: center;
  }
  .quick-link {
    width: auto;
    justify-self: end;
  }
  .get-in-touch ul li {
    list-style-type: none;
  }
  .links-section {
    grid-gap: auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
  .made-love-text {
    text-align: center;
  }
  .name-text:hover {
    color: #ffffff !important;
  }
  .footer--mobile-container {
    display: none;
  }
  @media only screen and (max-width: 870px) {
    .footer--container {
      padding: 50px 30px 32px 30px;
    }
    .footer-address {
      width: 280px !important;
    }
  }
  @media only screen and (max-width: 690px) {
    /* .footer--container {
      display: none;
    } */
    .get-in-touch {
      display: none;
    }
    .logo {
      height: 100px;
      width: 174px;
    }
    .top-containers {
      padding-bottom: 0;
    }
    .footer--container {
      padding: 0px 20px 0px;
    }
    .skilled-description {
      font-size: 12px !important;
    }
    .footer--mobile-container {
      display: flex;
      flex-direction: column;
      padding: 26px 15px 40px 17px;
    }
    .email--container-mobile input {
      border: 0.746154px solid #8991a4;
      border-radius: 5.96923px 0 0 5.96923px;
      color: #8991a4;
      width: calc(100% - 40px);
    }
    .email--container-mobile button {
      border-radius: 0px 5.96923px 5.96923px 0px;
    }
    .footer-copyright-section {
      flex-direction: column;
      text-align: center;
      font-size: 10px;
      padding: 9px 17px 16px 17px;
    }
    .social-icon-mobile {
      height: 16px;
    }
    .isContainerOpen {
      transform: rotate(180deg);
    }
  }
`;

const Footer = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [isOpenCategory, setIsOpenCategory] = useState(false);
  return (
    <FooterWrapper>
      <div className="footer--main-container">
        <div className="footer--container white--text">
          <div>
            <div className="top-containers flex justify-between pb74 gap20">
              <div>
                <div className="flex gap22 pb22">
                  <img
                    // src="https://scontent.famd5-3.fna.fbcdn.net/v/t31.18172-8/12841297_147261078997884_7143298158485428347_o.jpg?_nc_cat=100&ccb=1-7&_nc_sid=be3454&_nc_ohc=kuwEYJKikM4AX-_2f3M&_nc_ht=scontent.famd5-3.fna&oh=00_AfC8iNFGhOB_ZBSnVS__Ich2J2CSujBgZh-5hoYv8Y6Ndw&oe=65CA11FF"
                    src={tech}
                    alt="logo"
                    className="logo"
                    style={{height: "140px",
                  width:"140px"}}
                  />
                </div>
                <div className="font-16 skilled-description regular-text">
                  LDRP Institute of Technology and Research is organizing a
                  Technical Event-" Xenesis- 2024" during April 24th to
                  April 26th.Participate in the event to Network with the best
                  tech and non-tech head around the world who exchange ideas,
                  share knowledge and have fun together and win exciting prizes.
                </div>
              </div>

              <div className="get-in-touch">
                <div className="font-24 semi-bold-text pb27">Get in Touch</div>
                <ul className="pl0 mb0">
                  <li
                    className="font-16 regular-text flex pb8 cursor-pointer"
                    onClick={() =>
                      window.open(
                        "https://maps.app.goo.gl/Na9b9WaYhWwe6F1r9"
                      )
                    }
                  >
                    <img src={location_icon} alt="location" className="pr20" />
                    <div className="footer-address">
                      <div className="full-width pb5">
                        LDRP Institute of Technology and Research
                      </div>
                      <div className="font-14">
                      KH, 5, Rd No. 5, Sector 15, Gandhinagar, Gujarat 382016
                      </div>
                    </div>
                  </li>
                  <li className="font-16 regular-text flex py8">
                    <img src={contact_icon} alt="contact" className="pr20" />
                    <a href="tel:079 2324 1492" className="white--text">
                      079 2324 1492
                    </a>
                  </li>
                  <li className="font-16 regular-text flex pt8">
                    <img src={mail_icon} alt="mail" className="pr20" />
                    <a href="mailto: info@ldrp.ac.in" className="white--text">
                      info@ldrp.ac.in
                    </a>
                  </li>
                </ul>
                <div className="pt25">
                  <img
                    src={twitter_icon}
                    alt="twitter"
                    onClick={() =>
                      window.open("https://twitter.com/ldrpd?lang=en")
                    }
                    className="social-icon pr15 cursor-pointer"
                  />
                  <img
                    src={facebook_icon}
                    alt="facebook"
                    onClick={() =>
                      window.open("https://www.facebook.com/ldrpitr/")
                    }
                    className="social-icon pr15 cursor-pointer"
                  />
                  <img
                    src={linkedin_icon}
                    alt="linkedin"
                    className="social-icon pr15 cursor-pointer"
                    onClick={() =>
                      window.open(
                        "https://in.linkedin.com/school/ldrp-institute-of-technology-research-gujarat-technological-university-india/"
                      )
                    }
                  />
                  <img
                    src={insta_icon}
                    alt="instagram"
                    onClick={() =>
                      window.open("https://www.instagram.com/ksv_ldrp_itr/?hl=en")
                    }
                    className="social-icon cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer--mobile-container white--text">
          <div>
            <div
              className="flex justify-between pt20"
              onClick={() => {
                setSelectedCategory("get-in-touch");
                setIsOpenCategory(!isOpenCategory);
              }}
            >
              <div className="font-14 bold-text lh-28">Get In Touch</div>
              {/* <img src={down_arrow} alt="" className={`${selectedCategory === "get-in-touch" && isOpenCategory ? "isContainerOpen" : ""}`}/> */}
            </div>
            {/* {selectedCategory === "get-in-touch" && isOpenCategory && ( */}
            <ul className="pl15 mb0 pt10">
              <li className="font-12 regular-text flex pb8 items-center">
                <img
                  src={location_icon}
                  alt="location"
                  className="pr10"
                  style={{ height: "17px" }}
                />
                <div className="footer-address">
                  LDRP Institute of Technology and Research <br />
                  KH, 5, Rd No. 5, Sector 15, Gandhinagar, Gujarat 382016
                </div>
              </li>
              <li className="font-12 regular-text flex py8">
                <img
                  src={contact_icon}
                  alt="contact"
                  className="pr10"
                  style={{ height: "17px" }}
                />
                <a href="tel:079 2324 1492" className="white--text">
                  079 2324 1492
                </a>
              </li>
              <li className="font-12 regular-text flex pt8">
                <img
                  src={mail_icon}
                  alt="mail"
                  className="pr10"
                  style={{ height: "17px" }}
                />
                <a href="mailto: info@ldrp.ac.in" className="white--text">
                  info@ldrp.ac.in
                </a>
              </li>
            </ul>
            {/* )}   */}
          </div>
          <div className="pt25">
            <img
              src={twitter_icon}
              alt="twitter"
              className="pr10 cursor-pointer social-icon-mobile"
            />
            <img
              src={facebook_icon}
              alt="facebook"
              className="pr10 cursor-pointer social-icon-mobile"
            />
            <img
              src={linkedin_icon}
              alt="linkedin"
              className="pr10 cursor-pointer social-icon-mobile"
            />
            <img
              src={insta_icon}
              alt="instagram"
              className="cursor-pointer social-icon-mobile"
            />
          </div>
        </div>
      </div>
      <div className="primary bordercolor--text flex justify-between pt30 pb32 footer-copyright-section items-center font-16">
        <div>
          Copyright ©{" "}
          <span
            className="white--text cursor-pointer"
            onClick={() => window.open("https://www.ldrp.ac.in/")}
          >
            Xenesis 2024-LDRP.
          </span>{" "}
          All Rights Reserved.
        </div>
        <div className="made-love-text">
          <div>Made with ❤ by</div>
          <div>
            {/* <a
              href="https://sahilsutariya.vercel.app"
              target="_blank"
              className="name-text bordercolor--text"
            >
              Sahil Sutariya
            </a> */}
            Divyesh Patel, Hirak Patel, Nishant Patel & Anshul Prajapati
          </div>
        </div>
      </div>
    </FooterWrapper>
  );
};

export default Footer;
