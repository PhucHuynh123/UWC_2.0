import React from "react";
import "./VehicleCard.css";
import { vehicleList } from "../../../data/vehicleList";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setVehicle } from "../../../redux/actions";

const VehicleCard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChooseVehicle = (vehicle_name) => {
    dispatch(setVehicle(vehicle_name));
    navigate(-1);
  };

  return (
    <div className="vehicleCard">
      {vehicleList.map((vehicle, index) => {
        return (
          <div key={index} className="content_item">
            <div className="id">{vehicle.vehicle_id}</div>
            <div className="name">{vehicle.name}</div>
            <div className="weight">{vehicle.weight}</div>
            <div className="status">{vehicle.status}</div>
            <div className="action_btn">
              <button className="md-btn" onClick={() => handleChooseVehicle(vehicle.name)}>
                CHỌN
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default VehicleCard;
