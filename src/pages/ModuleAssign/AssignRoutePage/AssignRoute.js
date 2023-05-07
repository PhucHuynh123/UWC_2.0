import React from "react";
import "./AssignRoute.css";
import Header from "../../../components/Header/Header";
import RouteCard from "./RouteCard";
import Map from "../../../components/Map/Map";
import { useNavigate } from "react-router-dom";

const AssignRoute = () => {
  const navigate = useNavigate();
  const handleCreateRoute = () => {
    navigate("/createRoute");
  };

  return (
    <div className="assignRoute">
      <Header active={"taskAssignment"} />
      <div className="container">
        <div className="wrapper">
          <h1 className="title">DANH SÁCH TUYẾN ĐƯỜNG</h1>
          <div className="content">
            <div className="content_left">
              <div className="map">
                <Map latitude={10.77283} longitude={106.65768} />
              </div>
              <div className="md-btn" onClick={handleCreateRoute}>
                TẠO TUYẾN ĐƯỜNG MỚI
              </div>
            </div>
            <div className="content_right">
              <RouteCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssignRoute;
