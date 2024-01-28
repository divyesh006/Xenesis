import React from "react";
import styled from "styled-components";
import Navbar from "../../components/common/navbar";
import Footer from "../../components/common/Footer/Footer";
import About from "../../components/common/About/About";
import "../../components/Home/landing.scss";

const AboutWrapper = styled.div`
  .about-wrapper {
    text-align: center;
  }
  .home-text {
    color: #0064fb;
  }
  .about-text {
    color: #79798d;
  }
  .about-page {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  .about-header {
    background: rgba(1, 6, 15, 0.402);
  }
  @media (min-width: 300px) and (max-width: 780px) {
    .about-page {
      display: grid;
      grid-template-columns: 1fr;
    }
    .about-header {
      padding: 70px 0px;
    }
    .about-title {
      font-size: 22px;
    }
    .about-wrapper {
      background-position-y: -60px !important;
      margin-top: 64px;
    }
  }
`;

const Index = () => {
  return (
    <AboutWrapper>
      <Navbar />
      <div id="about">
        <div className="mt88 about-wrapper" style={{ background: `url("https://media.istockphoto.com/id/1382779593/photo/eco-friendly-modern-open-plan-office-interior-with-tables-office-chairs-meeting-room-and.jpg?b=1&s=170667a&w=0&k=20&c=6rUYB9XfdtJGZiYdZm4z5QnZEoL9_cyB_RZ_TEjviZ0=")`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPositionY: "-325px"}}>
          <div className="flex flex-col py100 gap6 items-center about-header">
            <div className="font-45 semi-bold-text about-title white--text">About Us </div>
          </div>
        </div>
        <About />
      </div>
      <Footer />
    </AboutWrapper>
  );
};

export default Index;
