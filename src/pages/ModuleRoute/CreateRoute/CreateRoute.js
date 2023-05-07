import React, { useState } from "react";
import "../index.css";
import Header from "../../../components/Header/Header";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import Map from "../../../components/Map/Map";
import { createRoute } from "../../../redux/actions";

const CreateRoute = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [routeName, setRouteName] = useState("");

  const handleCreateRoute = () => {
    dispatch(
      createRoute({
        route_id: uuidv4(),
        name: routeName,
      })
    );
    navigate(-1);
  };

  const handleCancelClick = () => {
    navigate(-1);
  };

  return (
    <div>
      <Header active={"taskAssignment"} />
      <div className="container moduleRoute">
        <div className="wrapper">
          <div className="content">
            <div className="content_left">
              <div className="map">
                <Map latitude={10.77283} longitude={106.65768} />
              </div>
            </div>
            <div className="content_right">
              <input value={routeName} className="route" onChange={(e) => setRouteName(e.target.value)} />
              <div className="action">
                <div className="md-btn" onClick={handleCreateRoute}>
                  TẠO MỚI
                </div>
                <div className="md-btn cancel" onClick={handleCancelClick}>
                  HỦY
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateRoute;
