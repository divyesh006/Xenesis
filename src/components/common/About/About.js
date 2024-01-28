import React, { useEffect } from "react";
import about_collge from "../../../assets/images/landing/about-college.jpg";
import "aos/dist/aos.css";
import Aos from "aos";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
    Aos.refresh();
  }, []);

  return (
    <section className="about-college">
      <div className="about-container pa30 pt50 flex">
        <div className="leftside py70 pl50 pr70" data-aos="flip-left">
          <div
            className="college-title pt15 nevyblue--text"
            data-aos="fade-down"
          >
            LDRP Institute of Technology and Research
          </div>
          <div className="event-title" data-aos="fade-down">
            xenesis - 2024 | April 24th to April 26th
          </div>
          <div className="about-college-detail">
            <div data-aos="fade-down">
              LDRP Institute of Technology and Research is organizing a
              Technical Event-" xenesis - 2024" during April 24th to April
              26th.Participate in the event to Network with the best tech and
              non-tech head around the world who exchange ideas, share
              knowledge and have fun together and win exciting prizes.{" "}
              <a href="/registration" className="">
                Click to Registration Page
              </a>
            </div>
            <div
              className="story-wrapper items-center flex gap15 pt30"
              data-aos="fade-up"
            >
              <div>
                <img
                  src="https://ozen-react.envytheme.com/images/experiences/img1.png"
                  alt=""
                />
              </div>
              <div className="story-content">
                LDRP Institute of Technology and Research provides
                quality education in engineering fields. There are varoius
                fields that teaches students to persue degree for their
                future.
              </div>
            </div>
            <div
              className="story-wrapper items-center flex gap15 pt30"
              data-aos="fade-up"
            >
              <div>
                <img
                  src="	https://ozen-react.envytheme.com/images/experiences/img3.png"
                  alt=""
                />
              </div>
              <div className="story-content">
                LDRP Institute of Technology and Research provides
                quality education in engineering fields. There are varoius
                fields that teaches students for their career.
              </div>
            </div>
            <div
              className="story-wrapper items-center flex gap15 pt30"
              data-aos="fade-up"
            >
              <div>
                <img
                  src="https://ozen-react.envytheme.com/images/experiences/img2.png"
                  alt=""
                />
              </div>
              <div className="story-content">
                LDRP Institute of Technology and Research provides
                quality education in engineering fields. The fee structure of
                Bachelor of Engineering and Diploma Engineering is as follows.
              </div>
            </div>
          </div>
        </div>
        <div className="rightside" data-aos="flip-right">
          <img src={about_collge} alt="Apollo_Image" className="full-width" />
        </div>
      </div>
    </section>
  );
};

export default About;
