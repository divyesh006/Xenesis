/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./landing.scss";
import left_arrow from "../../assets/images/Registration/right_arrow.svg";
import Aos from "aos";
import { BsFillCalendarDateFill, BsRobot } from "react-icons/bs";
import { BiTime } from "react-icons/bi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { RiUserStarLine } from "react-icons/ri";
import { TiLocation } from "react-icons/ti/index";
import { TbDeviceGamepad2 } from "react-icons/tb/index";
import "aos/dist/aos.css";
import Events from "../../events.json";
import robot from "../../assets/images/landing/robot.png";
import About from "../common/About/About";

const Landing = () => {
  const navigate = useNavigate();
  const [activeTabPane, setActiveTabPane] = useState(1);
  useEffect(() => {
    Aos.init({ duration: 2000 });
    Aos.refresh();
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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const allEvents = [...techEvents, ...nonTechEvents];

  const dayWiseEvents = useMemo(() => {
    if (activeTabPane === 1) {
      const dayOneEvent = allEvents.filter((event) => event.date === "24");
      return dayOneEvent;
    } else if (activeTabPane === 2) {
      const dayTwoEvent = allEvents.filter((event) => event.date === "25");
      return dayTwoEvent;
    } else if (activeTabPane === 3) {
      const dayThreeEvent = allEvents.filter((event) => event.date === "26");
      return dayThreeEvent;
    }
  }, [activeTabPane, allEvents]);

  return (
    <>
      {/* Landing Hero Section Begin */}
      <section className="hero-header">
        <div className="title-container" data-aos="fade-left">
          <div className="welcome-text">Welcome To Our Event</div>
          <div className="tech-utsav-text">
            Xenesis <span>2024</span>
          </div>
          <div className="college-text">- LDRP</div>
        </div>
      </section>
      {/* Landing Hero Section End */}
      {/* About Section Begin */}
        <About />
      {/* About Section End */}
      {/* Events Section Begin */}
      <section className="events">
        <div className="events-title">
          <div className="events-titles pt70 font-18 semi-bold-text lh-25 primary--text" data-aos="fade-right">
            OUR EVENTS
          </div>
          <div className="events-titles font-34 pb15 bold-text" data-aos="fade-right">
            See Our Recent <span className="tomato--text">Events</span>
          </div>
        </div>
        <div className="events-container flex pl80 pb50">
          <div
            className="wrapper cursor-pointer"
            data-aos="flip-left"
            onClick={() => navigate("/tech-events")}
          >
            <div className="clash-card barbarian">
              <div className="clash-card__image techncial-card__image--robot">
                <img src={robot} alt="barbarian" />
              </div>
              <div className="ag-courses-item_title pl20 pt5 primary--text font-20">
                Technical <br />
                <span className="font-32 tomato--text">Events</span>
              </div>
              <div className="read-more-wrapper pl20 pt20 flex gap10 items-center">
                <div className="read-more-text primary--text">Read More</div>
                <img
                  src={left_arrow}
                  className="read-more-arrow"
                  alt=""
                  style={{ zIndex: "2", color: "white" }}
                />
              </div>
            </div>
          </div>
          <div
            className="wrapper cursor-pointer"
            data-aos="flip-right"
            onClick={() => navigate("/non-tech-events")}
          >
            <div className="clash-card barbarian">
              <div className="clash-card__image clash-card__image--barbarian">
                <img
                  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/barbarian.png"
                  alt="barbarian"
                />
              </div>
              <div className="ag-courses-item_title pl20 pt5 primary--text font-20">
                Non Technical <br />
                <span className="font-32 tomato--text">Events</span>
              </div>
              <div className="read-more-wrapper pl20 pt20 flex gap10 items-center">
                <div className="read-more-text primary--text">Read More</div>
                <img
                  src={left_arrow}
                  className="read-more-arrow"
                  alt=""
                  style={{ zIndex: "2", color: "white" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Events Section End */}
      {/* Latest Events Section Begin */}
      <section className="our-events section">
        <div className="container">
          <div className="row pb45">
            <div className="col-lg-6">
              <div className="section-heading">
                <h2 className="check-container-text font-24 semi-bold-text lh-10" data-aos="fade-right">
                  Check Out What Is{" "}
                  <span className="primary--text font-31 bold-text">
                    Trending
                  </span>{" "}
                </h2>
                <h2 className="check-container-text2 font-24 semi-bold-text lh-15" data-aos="fade-right">
                  <br />
                  In Our Latest{" "}
                  <span className="font-31 bold-text tomato--text">Events</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6" data-aos="flip-left">
              <div className="left-image">
                <img
                  src="https://media.istockphoto.com/id/1305999733/photo/web-design-desktop.jpg?s=612x612&w=0&k=20&c=mdGnzSrhUGijPuXHR3vA_hrQyshToudcJc8A50L0a9I="
                  alt="Workspace Desktop"
                />
                <div className="info">
                  <div className="inner-content" data-aos="flip-up">
                    <ul className="flex ml0 pl0 date-time-add">
                      <li>
                        <BsFillCalendarDateFill color="#2868C5" /> 21 February 2024
                      </li>
                      <li>
                        <TiLocation color="#2868C5" />
                        Seminar Hall
                      </li>
                      <li>
                        <BsRobot color="#2868C5" />
                        Technical Event
                      </li>
                    </ul>
                    <a href="/event/11" className="text-decoration">
                      <h4>Be A Dev</h4>
                    </a>
                    <p>
                      Developers can also collaborate with other developers, designers, testers, and stakeholders to build high-quality software applications that are scalable, secure and user-friendly.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 wow" data-aos="flip-right">
              <div className="right-list">
                <ul>
                  <li data-aos="flip-up">
                    <div className="left-content align-self-center">
                      <span className="flex gap-2">
                        {" "}
                        <BsFillCalendarDateFill color="#07a832" /> 22 February 2024
                      </span>
                      <a href="/event/23" className="text-decoration">
                        <h4>Campus Hunt</h4>
                      </a>
                      <p>
                        There are many types of campus hunt events that can be organized on a college campus. Some of them include scavenger hunts, treasure hunts, and photo hunts.
                      </p>
                    </div>
                    <div className="right-image relative">
                      <span className="event-type">
                        {" "}
                        <TbDeviceGamepad2 color="#2868C5" />
                      </span>
                      <a href="/event/23" >
                        <img
                          src="https://thetruthspy.com/wp-content/uploads/2019/11/Top-8-Remote-Spy-Apps-for-Android-iPhone.jpg"
                          alt=""
                        />
                      </a>
                      {/* <a href="#"><img src="https://cdn.dribbble.com/users/653912/screenshots/11733726/media/aed0c3bceed7001b39e9dd39a2fd3f69.jpg?compress=1&resize=1000x750&vertical=top" alt=""/></a> */}
                    </div>
                  </li>
                  <li data-aos="flip-up">
                    <div className="left-content align-self-center">
                      <span className="flex gap-2">
                        {" "}
                        <BsFillCalendarDateFill color="#9da804" /> 24 April 2023
                      </span>
                      <a href="/event/2" className="text-decoration">
                        <h4>Crack It Up</h4>
                      </a>
                      <p>
                        There will be a list of 5 codes, Participant will have to debug them one by one according to level.
                      </p>
                    </div>
                    <div className="right-image relative">
                      <span className="event-type">
                        {" "}
                        <BsRobot color="#c30d0d" />
                      </span>
                      <a href="/event/23">
                        <img
                          src="https://blog.radware.com/wp-content/uploads/2019/10/Confidence.jpg"
                          alt=""
                        />
                      </a>
                    </div>
                  </li>
                  <li data-aos="flip-up">
                    <div className="left-content align-self-center">
                      <span className="flex gap-2">
                        {" "}
                        <BsFillCalendarDateFill color="#e7a924" /> 25 April 2023
                      </span>
                      <a href="/event/14" className="text-decoration">
                        <h4>BGMI (Virtual Gaming)</h4>
                      </a>
                      <p>
                        Battlegrounds Mobile India, or BGMI, is a TPP-FPP survival shooter game in which up to 100 players compete in a battle royale.
                      </p>
                    </div>
                    <div className="right-image relative">
                      <span className="event-type">
                        {" "}
                        <TbDeviceGamepad2 color="#f88621" />
                      </span>
                      <a href="/event/14">
                        <img
                          src="https://wallpaperaccess.com/full/1696121.jpg"
                          alt=""
                        />
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Latest Events Section End */}
      {/* Schedule Section Begin */}
      <section className="schedule-section spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title pt50 pb40 text-center">
                <h2 className="font-32 bold-text" data-aos="fade-right">
                  Our <span className="tomato--text">Schedule</span>
                </h2>
                <p className="font-18" data-aos="fade-right">
                 Don't miss any event at aiet
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="schedule-tab">
                <ul className="nav nav-tabs" role="tablist">
                  <li className="nav-item">
                    <div
                      className={`nav-link ${
                        activeTabPane === 1 ? "active" : ""
                      }`}
                      onClick={() => setActiveTabPane(1)}
                    >
                      <h5>Day 1</h5>
                      <p>April 24, 2023</p>
                    </div>
                  </li>
                  <li className="nav-item">
                    <div
                      className={`nav-link ${
                        activeTabPane === 2 ? "active" : ""
                      }`}
                      onClick={() => setActiveTabPane(2)}
                    >
                      <h5>Day 2</h5>
                      <p>April 25, 2023</p>
                    </div>
                  </li>
                  <li className="nav-item">
                    <div
                      className={`nav-link ${
                        activeTabPane === 3 ? "active" : ""
                      }`}
                      onClick={() => setActiveTabPane(3)}
                    >
                      <h5>Day 3</h5>
                      <p>April 26, 2023</p>
                    </div>
                  </li>
                </ul>
                <div className="tab-content">
                  <div
                    className={`tab-pane ${activeTabPane ? "active" : ""}`}
                    id="tabs-1"
                    role="tabpanel"
                  >
                    {dayWiseEvents.map((event , index) => {
                      return (
                        <div
                        key={index}
                          className="st-content"
                          data-aos="flip-down"
                          onClick={() => navigate(`/event/${event?.id}`)}
                        >
                          <div className="container">
                            <div className="row">
                              <div className="col-lg-3">
                                <div className="sc-pic">
                                  <img src={event?.image} alt="" />
                                </div>
                              </div>
                              <div className="col-lg-5 self-center">
                                <div className="sc-text">
                                  <h4>{event?.event_name}</h4>
                                  <ul style={{ padding: "0" }}>
                                    <li className="pt1">
                                      <RiUserStarLine />{" "}
                                      {event?.cordinator_name}
                                    </li>
                                    <li className="pt1">
                                      {event?.event_type === "Technical" ? (
                                        <BsRobot />
                                      ) : (
                                        <TbDeviceGamepad2 />
                                      )}{" "}
                                      {event?.event_type} Event
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="col-lg-4 self-center">
                                <ul className="sc-widget">
                                  <li>
                                    <BiTime /> {event?.start_time} -{" "}
                                    {event?.end_time}
                                  </li>
                                  <li>
                                    <HiOutlineLocationMarker /> {event?.venue}
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Schedule Section End */}
    </>
  );
};

export default Landing;
