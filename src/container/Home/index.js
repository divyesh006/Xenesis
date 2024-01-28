import React from "react";
import styled from "styled-components";
import { useAddUserMutation } from "../../redux/services/user";
import Landing from "../../components/Home/landing";
import Footer from "../../components/common/Footer/Footer";
import Navbar from "../../components/common/navbar";

const HomeWrapper = styled.div`
  .h1 {
    text-align: center;
  }
`;

const Home = () => {
  const [registration] = useAddUserMutation();
  const [editData, setEditData] = React.useState({
    first_name: "",
    last_name: "",
    email: "",
    mobile: "",
    password: "",
  });

  const handleRegistration = async () => {
    if (editData) {
      await registration({ editData });
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

  return (
    <HomeWrapper>
      <div>
        <Navbar />
        <Landing />
        <Footer />
      </div>
    </HomeWrapper>
  );
};

export default Home;
