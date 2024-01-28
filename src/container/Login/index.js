import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { useLoginMutation } from "../../redux/services/auth";

const LoginWrapper = styled.div`
  * {
    display: flex;
    justify-content: center;
  }
`;

const Login = () => {
  const [userLogin] = useLoginMutation();
  const [userData, setUserData] = React.useState();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((predata) => {
      return {
        ...predata,
        [name]: value,
      };
    });
  };

  const loginUser = useSelector((state) => state?.auth?.user);
  const handleLogin = async () => {
    if (userData) {
      await userLogin(userData);
    }
  };
  return (
    <LoginWrapper>
      <div>
        <h1>Login</h1>
      </div>
      <div className="main-content">
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={userData?.email}
          onChange={(e) => handleChange(e)}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={userData?.password}
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div>
        <button onClick={handleLogin}>Login</button>
      </div>
    </LoginWrapper>
  );
};

export default Login;
