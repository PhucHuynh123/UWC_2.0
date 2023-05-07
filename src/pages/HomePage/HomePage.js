import React from "react";
import "./HomePage.css";
import Header from "../../components/Header/Header";
import BackgoundImg from "../../assets/background.png";

function HomePage() {
  return (
    <>
      <div className="homepage">
        <Header />
        <div className="container">
          <img src={BackgoundImg} alt="background" className="homepage_image" />
          <div className="wrapper">
            <div className="content">
              <h1>URBAN WASTE COLLECTION AID UWC 2.0</h1>
              <span>Nhóm 7 - L01</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
