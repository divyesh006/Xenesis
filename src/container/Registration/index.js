/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from "react";
import right_arrow from "../../assets/images/Registration/right_arrow.svg";
import left_arrow from "../../assets/images/Registration/left_arrow.svg";
import { useAddUserMutation } from "../../redux/services/user";
import SignUpForm from "./SignUpForm";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { message } from "antd";
import Navbar from "../../components/common/navbar";

const RegistratonWrapper = styled.div`
  .sign-up-header {
    font-family: "Anek Latin", sans-serif;
    font-weight: 600;
  }
  .right--form {
    width: 42%;
    padding: 0 40px;
  }
  .registration--left {
    width: 58% !important;
  }
  .img-fluid {
    width: 100%;
  }
  .next-btn:hover {
    background-color: #2868c5;
    color: white !important;
    .next-img {
      color: white !important;
      filter: brightness(500);
      font-weight: 800;
    }
    .next-btn-text {
      color: white !important;
    }
  }
  @media only screen and (max-width: 690px) {
    .main-form-container {
      flex-direction: column;
      padding-left: 15px;
    }
    .registration--left,
    .right--form {
      width: 100% !important;
    }
    .registration--left {
      margin-top: 220px;
    }
    .sign-up-header {
      font-size: 32px !important;
    }
    .next-btn {
      padding: 10px 30px !important;
      span {
        font-size: 18px;
      }
    }
  }
`;

const Registration = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const navigate = useNavigate();
  const [registration] = useAddUserMutation();
  const [isSubmitInProcess, setIsSubmitInProcess] = useState(false);

  const [editData, setEditData] = React.useState({
    name: "",
    email: "",
    mobile: "",
    enrollment_number: "",
    degree: "",
    course: "",
    college: "",
    events: [],
  });

  const handleSubmit = async () => {
    if (editData) {
      setIsSubmitInProcess(true);
      const submit = await registration({ editData });
      if (submit?.data?.code === 200) {
        message.success("Registration Successfull");
        navigate("/");
        setIsSubmitInProcess(false);
      } else {
        setIsSubmitInProcess(false);
        message.error("Something Went Wrong!");
      }
    }
  };

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setEditData((predata) => {
      return {
        ...predata,
        [name]: value,
      };
    });
  };
  console.log(editData?.events, "lllllllllll");

  return (
    <>
      <RegistratonWrapper>
        <Navbar />
        <div className="full-height registration-background items-center fill-width flex pt50">
          <div className="white br25">
            <div className="pa28">
              <div className="main-form-container row flex justify-content-center w-100">
                <div className="registration--left flex items-center justify-center">
                  <img
                    src="https://i.pinimg.com/originals/01/32/31/01323190cd6933de96287a5804fd636a.gif"
                    className="img-fluid"
                    alt="registration"
                  />
                </div>
                <div className="right--form relative form-rightside">
                  <p className="text-center font-42 pb20 primary--text sign-up-header relative">
                    Registration
                  </p>
                  <form className="mx-1 mx-md-4">
                    <SignUpForm
                      pageNumber={pageNumber}
                      onChangeHandler={onChangeHandler}
                      setEditData={setEditData}
                      editData={editData}
                    />
                  </form>
                  <div className="button-area pt15">
                    <div className="flex justify-between items-center">
                      {pageNumber !== 1 ? (
                        <div
                          className="flex cursor-pointer back-btn"
                          onClick={() => setPageNumber(pageNumber - 1)}
                        >
                          <img src={left_arrow} className="left_arrow" alt="" />
                          <span className="font-20 bold-text primary--text self-center">
                            Back
                          </span>
                        </div>
                      ) : (
                        <div className="nbsp_space"></div>
                      )}
                      <div className="d-flex justify-content-center">
                        {pageNumber !== 2 ? (
                          <div
                            className="py14 flex cursor-pointer px43 border1 primary--border br8 next-btn"
                            onClick={() => setPageNumber(pageNumber + 1)}
                          >
                            <span className="font-20 bold-text primary--text pr13 next-btn-text">
                              Next
                            </span>
                            <img
                              src={right_arrow}
                              alt=""
                              className="self-center next-img"
                            />
                          </div>
                        ) : (
                          <div
                            onClick={() => handleSubmit()}
                            className="font-20 bold-text px46 py14 primary white--text br8 next-btn cursor-pointer"
                          >
                            {isSubmitInProcess ? "Loading..." : "Register"}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RegistratonWrapper>
    </>
  );
};

export default Registration;
