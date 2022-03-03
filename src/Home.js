import React from "react";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  const navigateTo = () => {
    navigate("/contact");
  };
  return (
    <div>
      home page
      <button onClick={navigateTo}>go to contact</button>
    </div>
  );
};

export default Home;