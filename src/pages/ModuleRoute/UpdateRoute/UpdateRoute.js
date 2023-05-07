import React, { useEffect, useState } from "react";
import "../index.css";
import Header from "../../../components/Header/Header";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateRoute } from "../../../redux/actions";
import Map from "../../../components/Map/Map";
import Geocode from "react-geocode";

Geocode.setApiKey("AIzaSyBQzPJC2jemC_NtfuJH3xqGmJKMQuNguF0");

const UpdateRoute = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const { route_id, route_name } = location.state;
  const [routeUpdate, setRouteUpdate] = useState(route_name);

  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  useEffect(() => {
    Geocode.fromAddress(route_name).then(
      (response) => {
        const { lat, lng } = response.results[0].geometry.location;
        setLatitude(lat);
        setLongitude(lng);
      },
      (error) => {
        console.error(error);
      }
    );
  }, [route_name]);

  const handleUpdateRoute = () => {
    dispatch(
      updateRoute({
        route_id,
        name: routeUpdate,
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
                {console.log(latitude, longitude)}
                <Map latitude={10.77283} longitude={106.65768} />
              </div>
            </div>
            <div className="content_right">
              {/* <div className="route">{route_name}</div> */}
              <input
                type="text"
                className="route"
                value={routeUpdate}
                onChange={(e) => setRouteUpdate(e.target.value)}
              />
              <div className="action">
                <div className="md-btn" onClick={handleUpdateRoute}>
                  CẬP NHẬT
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

export default UpdateRoute;
