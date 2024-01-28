import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Events from "../../events.json";
import { Button, message } from "antd";
import ShareButton from "../../assets/images/landing/shareButton.svg";
import {
  FacebookIcon,
  FacebookShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";
import { CopyOutlined } from "@ant-design/icons";
import { IoChevronBackCircleSharp } from "react-icons/io5";
import event_bg from "../../assets/images/landing/blog-left-dec.jpg";
import tech from "../../assets/images/navbar/tech-utsav-logo-1.png";

const EventWrapper = styled.div`
  .collection-header {
    height: 360px;
    background: rgba(0, 0, 0, 0.5);
    color: white;
    justify-content: space-between;
    padding: 0px 116px;
  }
  .rules-ul {
    margin-top: 0;
    margin-left: 18px;
    list-style: upper-roman;
  }
  .share-button {
    width: 147px;
    height: 38px;
    background: #ffffff;
    color: black;
    border-radius: 28px;
  }
  .share-button img {
    height: 20px;
    width: 20px;
  }
  .backarrow {
    display: none;
  }
  .Restaurant_Collection {
    display: flex;
    width: 100%;
    max-width: 1300px;
    margin: auto;
    flex-wrap: wrap;
    margin-top: 40px;
    justify-content: flex-start;
  }
  .share-icons {
    background: #fff;
    position: relative;
    width: max-content;
    right: 11px;
    border-radius: 21px;
    height: 42px;
  }
  .socialicon {
    margin: 5px;
  }
  .copy-clipboard {
    background: #1a1a1a;
    height: 31px;
    width: 31px;
    border-radius: 50%;
    align-self: center;
    margin-right: 6px;
    margin-left: 5px;
  }
  .logo-section img {
    width: 200px;
    object-fit: contain;
  }
  .event-wrapper {
    border-radius: 20px;
    margin: 35px;
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
  }
  .btn-box a {
    position: relative;
    display: inline-block;
    font-size: 17px;
    font-weight: 600;
    text-decoration: none;
    color: #fff;
    text-align: center;
    font-family: "Poppins", sans-serif;
    background-image: linear-gradient(
      90deg,
      #ffbc45 0%,
      #ff5959 51%,
      #ffbc45 100%
    );
    padding: 15px 50px;
    background-size: 200% auto;
    z-index: 1;
    border-radius: 29px;
    border-bottom-left-radius: 0;
  }
  .event-content {
    padding: 40px;
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
  .back_img {
    top: 35px;
    cursor: pointer;
    left: 50px;
  }
  @media (min-width: 300px) and (max-width: 680px) {
    .collection-header {
      height: 250px;
      padding: 0px;
    }
    .store-images-container {
      display: none;
    }
    .backarrow {
      display: block;
      position: absolute;
      top: 35px;
      left: 36px;
    }
    .collection-name {
      font-size: 30px !important;
      width: 177px;
    }
    .collection-place-like {
      font-size: 13px !important;
    }
    .share-button {
      width: 117px;
      height: 30.14px;
    }
    .share-button img {
      width: 15.92px;
      height: 15.86px;
    }
    .share-text {
      font-size: 11.1429px !important;
    }
    .logo-section img {
      position: absolute;
      top: 30px;
      right: 26px;
      width: 73.88px;
      height: 39px;
    }
    .collection-details {
      display: flex;
      align-items: center;
      width: 100%;
      justify-content: space-around;
      margin-top: 136px;
      margin-bottom: 25px;
      padding: 0 15px !important;
    }
    .Restaurant_Collection {
      justify-content: center;
      column-gap: 12px;
      padding-top: 20px;
      margin-top: 0px;
    }
    .share-icons {
      right: 0px;
      left: -13px;
      border-radius: 16px;
      width: fit-content;
      height: 34px;
      text-align: center;
    }
    .socialicon {
      margin: 3px;
      width: 28px;
      height: 28px;
    }
    .copy-clipboard {
      margin-right: 3px;
    }
    .pagination-container {
      display: none;
    }
    .description {
      font-size: 14px;
    }
    .back_img {
      top: 26px;
      cursor: pointer;
      left: 30px;
    }
    .description-wrapper {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
  }
`;

export const Socialmedia = () => {
  const url = String(window.location);
  const copytoclipboard = () => {
    navigator.clipboard.writeText(url);
    message.success("copied to clipboard");
  };

  return (
    <EventWrapper>
      <div className="share-icons flex-x">
        <FacebookShareButton url={url} className="socialbutton">
          <FacebookIcon className="socialicon" size={32} round={true} />
        </FacebookShareButton>
        <WhatsappShareButton url={url} className="socialbutton">
          <WhatsappIcon className="socialicon" size={32} round={true} />
        </WhatsappShareButton>
        <TwitterShareButton url={url} className="socialbutton">
          <TwitterIcon className="socialicon" size={32} round={true} />
        </TwitterShareButton>
        <div
          className="copy-clipboard cursor-pointer"
          onClick={() => copytoclipboard()}
        >
          <CopyOutlined
            style={{ fontSize: "15px", color: "#fff", margin: "8px" }}
          />
        </div>
      </div>
    </EventWrapper>
  );
};

const Index = () => {
  const { id } = useParams();
  const [isEventShare, setIsEventShare] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const techEvents = Events[0]?.events.map((all) => {
    return {
      ...all,
      event_type: "Technical",
    };
  });
  const nonTechEvents = Events[1]?.events.map((all) => {
    return {
      ...all,
      event_type: "Non-Technical",
    };
  });
  const allEvents = [...techEvents, ...nonTechEvents];
  const activeEvent = allEvents.find(
    (event) => event.id.toString() === id.toString()
  );

  return (
    <EventWrapper>
      <div>
        <div
          className="header-background relative"
          style={{
            backgroundImage: `url(${
              activeEvent?.image ? activeEvent?.image : ""
            })`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <a href="/" className="absolute back_img">
            <IoChevronBackCircleSharp size={40} color="#FFFFFF" />
          </a>
          <div className="flex-x center collection-header">
            <div className="collection-details">
              <div className="collection-name-like">
                <div className="collection-name bold-text font-50 pb5">
                  {activeEvent?.event_name}
                </div>
                <div className="collection-place-like semibold-text font-21 pb15">
                  {activeEvent?.date}-04-2024 | {activeEvent?.event_type} Event
                </div>
              </div>
              {/* <Dropdown menu={socialmedia} trigger={["click"]}> */}
              <div className="relative">
                <Button
                  className="flex-x center share-button cursor-pointer"
                  onClick={() => setIsEventShare(!isEventShare)}
                >
                  <img src={ShareButton} alt="share" />
                  <div className="share-text bold-text font-14 pl5">
                    Share this Event
                  </div>
                </Button>
                {isEventShare && (
                  <div className="absolute pt5">
                    <Socialmedia />
                  </div>
                )}
              </div>
              {/* </Dropdown> */}
            </div>
            <div>
              <div className="logo-section text-center">
                <img
                  src={tech}
                  alt="tech-utsav-logo"
                  className="cursor-pointer tech-utsav-logo"
                />
              </div>
              <div className="flex-x center mt20 store-images-container">
                <div className="btn-box">
                  <a href="/registration">Apply For Event</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="event-wrapper py40"
        style={{
          background: `url(${event_bg})`,
          backgroundSize: "cover",
        }}
      >
        <div className="event-content ">
          <div className="event-1 flex flex-col gap20">
            <div className="flex gap10 items-center">
              <div className="gray--text noraml-text font-16">Event Name:</div>
              <div className="semi-bold-text font-16">
                {activeEvent.event_name}
              </div>
            </div>
            <div className="flex gap10 items-center">
              <div className="gray--text noraml-text font-16">
                Co-ordinator Name:
              </div>
              <div className="semi-bold-text font-16">
                {activeEvent.cordinator_name}
              </div>
            </div>
            <div className="flex gap10 items-center">
              <div className="gray--text noraml-text font-16">Event Date:</div>
              <div className="semi-bold-text font-16">
                {activeEvent.date}-04-2024
              </div>
            </div>
            <div className="flex gap10 items-center">
              <div className="gray--text noraml-text font-16">Event Time:</div>
              <div className="semi-bold-text font-16">
                {activeEvent.start_time}
              </div>
            </div>
          </div>
          <div className="event-2 flex flex-col gap10">
            <div className="flex gap10">
              <div className="gray--text noraml-text font-16">Event Rules:</div>
              <ul className="rules-ul semi-bold-text font-16 flex flex-col gap10">
                {activeEvent.rules.map((z, index) => {
                  return (
                    <li key={index} className="">
                      {z}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="event-3 flex flex-col gap20">
            <div className="flex gap10 items-center">
              <div className="gray--text noraml-text font-16">Event Type:</div>
              <div className="semi-bold-text font-16">
                {activeEvent.event_type}
              </div>
            </div>
            <div className="flex gap20 items-center">
              <div className="gray--text noraml-text font-16">Venue:</div>
              <div className="semi-bold-text font-16">{activeEvent.venue}</div>
            </div>
          </div>
          <div className="event-4 flex flex-col gap10">
            <div className="flex gap20 description-wrapper">
              <div className="gray--text noraml-text font-16">Description:</div>
              <div className="semi-bold-text font-16 description lp1">
                {activeEvent.description}
              </div>
            </div>
          </div>
        </div>
      </div>
    </EventWrapper>
  );
};

export default Index;
