import React from "react";
import { Radio, Space, Input, Form } from "antd";
import styled from "styled-components";
import Select from "react-select";
import makeAnimated from "react-select/animated";

const SignUpFormWrapper = styled.div`
  input,
  label {
    font-family: "Poppins", sans-serif !important;
    font-size: 16px !important;
    font-weight: 500;
  }
  .label {
    font-family: "Poppins", sans-serif !important;
    font-size: 16px !important;
    font-weight: 500;
  }
  .second-page {
    padding-top: 20px;
  }
  .ant-row .ant-form-item-row {
    display: block;
    margin-left: 0px !important;
    margin-right: 0px !important;
  }
  .ant-form-item-control-input-content {
    max-width: 100%;
    width: 300px;
  }
  @media (min-width: 300px) and (max-width: 680px) {
    .second-page {
      padding-top: 0;
    }
    .page-2-main {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
  }
`;

const SignUpForm = ({ pageNumber, onChangeHandler, editData, setEditData }) => {
  const [other, setOther] = React.useState(false);
  const [otherCollege, setOtherCollege] = React.useState(false);
  const [otherCourse, setOtherCourse] = React.useState(false);

  const animatedComponents = makeAnimated();
  const options = [
    { value: "mechrun", label: "Mech Run 50₹/-" },
    { value: "openstage", label: "Open Stage 30₹/-" },
    { value: "codemonk", label: "Code Monk 50₹/-" },
    { value: "mrMachinist", label: "Mr Machinist 50₹/-" },
    { value: "crakeitup", label: "Crake It Up 50₹/-" },
    { value: "anime", label: "Anime Quiz 30₹/-" },
    { value: "bgmi", label: "BGMI 30₹/-" },
    { value: "robotics", label: "Robo Soccer 50₹/-" },
    { value: "counterstrike", label: "counter strike 30₹/-" },
    { value: "mysterybox", label: "Mystery Box 30₹/-" },
    { value: "waterjet", label: "water jet 50₹/-" },
    { value: "ornithopter", label: "ornithopter 50₹/-" },
    { value: "wrestlemania", label: "wrestlemania 50₹/-" },
    { value: "tapewalk", label: "tape walk 50₹/-" },
    { value: "insight typing", label: "insight typing 50₹/-" },
    { value: "quizit", label: "quiz it 50₹/-" },
    { value: "cadart", label: "cad art 50₹/-" },
    { value: "rodiezz", label: "rodiezz 30₹/-" },
    { value: "fitnessfreak", label: "fitness freak 30₹/-" },
    { value: "beadev", label: "be a dev 50₹/-" },
    { value: "campushunt", label: "campus hunt 30₹/-" },
    { value: "reelstar", label: "reel star 30₹/-" },
  ];

  return (
    <>
      <SignUpFormWrapper>
        {pageNumber === 1 && (
          <div className="ant-row">
            <div className="">
              <Form.Item label="Name" rules={[{ required: true }]}>
                <Input
                  placeholder="Name"
                  className="px20 py10 font-14"
                  name="name"
                  value={editData?.name}
                  onChange={(e) => onChangeHandler(e)}
                />
              </Form.Item>
            </div>
            <div className="">
              <Form.Item label="Email" rules={[{ required: true }]}>
                <Input
                  placeholder="Email"
                  name="email"
                  className="px20 py10 font-14"
                  value={editData?.email}
                  onChange={(e) => onChangeHandler(e)}
                />
              </Form.Item>
            </div>
            <div className="">
              <Form.Item label="Mobile Number" rules={[{ required: true }]}>
                <Input
                  placeholder="Mobile"
                  name="mobile"
                  className="px20 py10 font-14"
                  value={editData?.mobile}
                  onChange={(e) => onChangeHandler(e)}
                />
              </Form.Item>
            </div>
            <div className="">
              <Form.Item label="Enrollment Number" rules={[{ required: true }]}>
                <Input
                  placeholder="Enrollment Number"
                  name="enrollment_number"
                  className="px20 py10 font-14"
                  value={editData?.enrollment_number}
                  onChange={(e) => onChangeHandler(e)}
                />
              </Form.Item>
            </div>
          </div>
        )}
        {pageNumber === 2 && (
          <div className="page-2-main">
            <div className="secong-page">
              <div className="label">Select Your Degree Course</div>
              <Radio.Group style={{ padding: "10px 0px" }}>
                <Space direction="vertical">
                  <Radio
                    name="degree"
                    value="be"
                    onChange={(e) => setEditData({ ...editData, degree: "BE" })}
                    onClick={() => setOther(false)}
                  >
                    BE
                  </Radio>
                  <Radio
                    name="degree"
                    value="diploma"
                    onChange={(e) =>
                      setEditData({ ...editData, degree: "Diploma" })
                    }
                    onClick={() => setOther(false)}
                  >
                    Diploma
                  </Radio>
                  <Radio value="Other" onClick={() => setOther(true)}>
                    Other
                  </Radio>
                  {other && (
                    <Form.Item label="other" rules={[{ required: true }]}>
                      <Input
                        height={20}
                        placeholder="Please Type Your Course Name"
                        className="px20 py10 font-14"
                        onChange={(e) =>
                          setEditData({ ...editData, degree: e.target.value })
                        }
                        style={{
                          border: "none",
                          borderBottom: "1px solid",
                          borderRadius: "0",
                        }}
                      />
                    </Form.Item>
                  )}
                </Space>
              </Radio.Group>
            </div>
            <div className="second-page">
              <div className="label"> Select Your College Name</div>
              <Radio.Group style={{ padding: "10px 0px" }}>
                <Space direction="vertical">
                  <Radio
                    name="college"
                    onChange={() =>
                      setEditData({
                        ...editData,
                        college:
                          "LDRP Institute of Technology and Research",
                      })
                    }
                    value="LDRP Institute of Technology and Research"
                    onClick={() => setOtherCollege(false)}
                  >
                    LDRP Institute of Technology and Research
                  </Radio>
                  
                  {otherCollege && (
                    <Form.Item label="other" rules={[{ required: true }]}>
                      <Input
                        height={20}
                        className="px20 py10 font-14"
                        onChange={(e) =>
                          setEditData({ ...editData, college: e.target.value })
                        }
                        style={{
                          border: "none",
                          borderBottom: "1px solid",
                          borderRadius: "0",
                        }}
                      />
                    </Form.Item>
                  )}
                </Space>
              </Radio.Group>
            </div>
            <div className="second-page">
              <div className="label"> Select Your Course Name</div>
              <Radio.Group style={{ padding: "10px 0px" }}>
                <Space direction="vertical">
                  <Radio
                    name="course"
                    value="it"
                    onChange={(e) => setEditData({ ...editData, course: "it" })}
                    onClick={() => setOtherCourse(false)}
                  >
                    IT
                  </Radio>
                  <Radio
                    name="course"
                    onChange={(e) => setEditData({ ...editData, course: "ce" })}
                    value="ce"
                    onClick={() => setOtherCourse(false)}
                  >
                    CE
                  </Radio>
                  <Radio
                    name="mechanical"
                    onChange={() =>
                      setEditData({ ...editData, course: "mechanical" })
                    }
                    value="mechanical"
                    onClick={() => setOtherCourse(false)}
                  >
                    MECHANICAL
                  </Radio>
                  <Radio
                    name="course"
                    onChange={() =>
                      setEditData({ ...editData, course: "electrical" })
                    }
                    value="electrical"
                    onClick={() => setOtherCourse(false)}
                  >
                    ELECTRICAL
                  </Radio>
                  <Radio
                    name="course"
                    onChange={() =>
                      setEditData({ ...editData, course: "civil" })
                    }
                    value="civil"
                    onClick={() => setOtherCourse(false)}
                  >
                    CIVIL
                  </Radio>
                  <Radio value="Other" onClick={() => setOtherCourse(true)}>
                    Other
                  </Radio>
                  {otherCourse && (
                    <Form.Item label="other" rules={[{ required: true }]}>
                      <Input
                        height={20}
                        className="px20 py10 font-14"
                        onChange={(e) =>
                          setEditData({ ...editData, course: e.target.value })
                        }
                        style={{
                          border: "none",
                          borderBottom: "1px solid",
                          borderRadius: "0",
                        }}
                      />
                    </Form.Item>
                  )}
                </Space>
              </Radio.Group>
            </div>
            <div className="second-page">
              <div className="label"> Select Event</div>
              <Select
                options={options}
                isMulti
                components={animatedComponents}
                className="pt10 font-15 uppercase"
                onChange={(e) =>
                  setEditData({
                    ...editData,
                    events: e,
                  })
                }
              />
            </div>
          </div>
        )}
      </SignUpFormWrapper>
    </>
  );
};

export default SignUpForm;
