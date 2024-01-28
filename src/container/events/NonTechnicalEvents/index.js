import React, { useEffect } from "react";
import styled from "styled-components";
import eventData from "../../../events.json";
import event_top_bg from "../../../assets/images/event/event-top-bg.png";
import nontech_event_left from "../../../assets/images/event/non-tech-event-left-image.png";
import Aos from "aos";
import { useNavigate } from "react-router-dom";
import Navbar from "../../../components/common/navbar";

const TechWrapper = styled.div`
  .main_div {
    flex: 0 0 33.333333%;
    max-width: 33.33%;
  }
  #about {
    margin-top: 120px !important;
    position: relative;
    max-width: 1560px;
    width: 100%;
    margin: 0 auto;
  }
  #about .container {
    position: absolute;
    top: -10px;
    left: 10%;
    display: flex;
    justify-content: space-between;
  }
  .about-us {
    height: 200px;
    background-repeat: no-repeat !important;
    background-position: center center !important;
    background-size: 100% 114% !important;
    padding: 140px 0px 120px 0px;
  }
  .about-us .left-image {
    margin-right: 45px;
  }
  .about-us .left-image img {
    width: 280px;
  }
  .auto-container {
    position: static;
    max-width: 1200px;
    padding: 0px 15px;
    margin: 0 auto;
  }
  .inner-box {
    position: relative;
    margin-bottom: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .inner-box .image-box {
    position: relative;
    display: block;
    border-radius: 5px;
    width: 100%;
    margin-bottom: 35px;
    box-shadow: 0 0px 30px 20px #f4f4f7;
    transition: all 500ms ease;
  }

  .inner-box:hover .image-box {
    transform: translateY(-10px);
  }

  .inner-box .image-box img {
    width: 100%;
    min-height: 400px;
    object-fit: cover;
    border-radius: 5px;
    cursor: pointer;
  }

  .inner-box .lower-content {
    cursor: pointer;
    position: relative;
    display: block;
    text-align: center;
    background: #fff;
    width: 100%;
    padding: 27px 15px 25px 15px;
    border-radius: 10px;
    box-shadow: 0 0px 50px 5px rgba(0, 0, 0, 0.1);
    transition: all 500ms ease;
    z-index: 1;
  }

  .inner-box .lower-content:after {
    position: absolute;
    content: "";
    background-image: linear-gradient(
      90deg,
      #ffbc45 0%,
      #ff5959 51%,
      #ffbc45 100%
    );
    background-size: 200% auto;
    width: 100%;
    height: 0%;
    left: 0px;
    bottom: 0px;
    border-radius: 10px;
    z-index: -1;
    transition: all 500ms ease;
  }

  .inner-box:hover .lower-content:after {
    height: 100%;
    top: 0px;
  }

  .inner-box:hover .lower-content {
    transform: translateY(-10px);
  }

  .inner-box .lower-content:before {
    position: absolute;
    content: "";
    background: #fff;
    width: 40px;
    height: 40px;
    left: 50%;
    margin-left: -20px;
    top: -14px;
    transform: rotate(45deg);
    z-index: -1;
    transition: all 500ms ease;
  }

  .inner-box:hover .lower-content:before {
    background: #ff874f;
  }

  .inner-box .lower-content h3 {
    position: relative;
    display: block;
    font-size: 18px;
    line-height: 28px;
    font-family: "Muli", sans-serif;
    font-weight: 600;
    color: #48474a;
    transition: all 500ms ease;
  }

  .inner-box .lower-content h3 div {
    display: inline-block;
    color: #48474a;
    text-transform: capitalize;
    font-size: 18px;
    text-decoration: none;
    font-family: "Poppins", sans-serif;
    font-weight: 700;
    transition: all 500ms ease;
  }
  .inner-box .lower-content .coordinator {
    color: #48474a;
    font-size: 18px;
    text-decoration: none;
    transition: all 500ms ease;
  }

  .inner-box:hover .lower-content h3 div {
    color: #fff;
  }
  .inner-box:hover .lower-content .coordinator {
    color: #fff;
  }
  .coordinator {
    font-size: 16px;
    font-weight: 600;
  }
  .event-row {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    max-width: 1200px;
    width: 100%;
    gap: 50px;
  }
  .inner-box {
    width: 340px;
  }
  .technical-price {
    line-height: 1.3;
  }
  @media only screen and (max-width: 690px) {
    #about .container {
      position: absolute;
      top: 22px;
      left: 5%;
      margin-left: 0 !important;
      width: calc(100% - 24px);
    }
    .left-image {
      margin-right: 0px !important;
    }
    .about-us .left-image img {
      width: 150px;
    }
    .text-end {
      padding-top: 50px;
      padding-right: 0px;
    }
    .technical-title {
      font-size: 28px !important;
    }
    .technical-price {
      font-size: 18px !important;
    }
    .event-row {
      grid-template-columns: repeat(1, minmax(0px, 1fr));
      gap: 50px;
      justify-items: center;
    }
    .main_div {
      max-width: 100%;
    }
    .inner-box .lower-content {
      padding: 15px !important;
    }
  }
`;

const Index = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    Aos.init({ duration: 3000 });
  }, []);

  return (
    <TechWrapper>
      <Navbar />
      <div
        id="about"
        className="about-us section"
        style={{ background: `url(${event_top_bg})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="left-image wow fadeIn">
                <img src={nontech_event_left} alt="person graphic" />
              </div>
            </div>
          </div>
          <div className="pt79 text-end pr90">
            <div className="technical-title font-40 pb5 semi-bold-text white--text">
              Non Technical Events
            </div>
            <div className="technical-price font-21 semi-bold-text">
              Registration Fee 30₹/-
            </div>
            <div className="technical-price font-21 semi-bold-text">
              per Event per Person
            </div>
          </div>
        </div>
      </div>
      <div className="auto-division mt60">
        <div className="auto-container">
          <div className="main_div">
            <div className="event-row">
              {eventData[1]?.events?.map((z, index) => {
                return (
                  <>
                    <div
                      className="inner-box"
                      data-aos="flip-right"
                      key={index}
                      onClick={() => navigate(`/event/${z.id}`)}
                    >
                      <figure className="image-box">
                        <div>
                          <img src={z.image} alt="Event_Image" />
                        </div>
                      </figure>
                      <div className="lower-content">
                        <h3>
                          <div>{z.event_name}</div>
                        </h3>
                        <div className="coordinator">{z.cordinator_name}</div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </TechWrapper>
  );
};

export default Index;
