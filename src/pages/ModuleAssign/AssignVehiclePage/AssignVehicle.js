import React from "react";
import "./AssignVehicle.css";
import Header from "../../../components/Header/Header";
import VehicleCard from "./VehicleCard";

const AssignVehicle = () => {
  return (
    <div className="assignVehicle">
      <Header active={"taskAssignment"} />
      <div className="container">
        <div className="wrapper">
          <h1 className="title">THÔNG TIN PHƯƠNG TIỆN</h1>
          <div className="content">
            <VehicleCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssignVehicle;
