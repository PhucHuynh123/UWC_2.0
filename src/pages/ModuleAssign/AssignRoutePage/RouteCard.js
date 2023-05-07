import React from "react";
import "./RouteCard.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteRoute, setRoute } from "../../../redux/actions";
import { getListRouteSelector } from "../../../redux/selectors";

const RouteCard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const routeList = useSelector(getListRouteSelector);

  const handleUpdateRoute = (route_id, route_name) => {
    navigate("/updateRoute", { state: { route_id: route_id, route_name: route_name } });
  };

  const handleDeleteRoute = (route_id) => {
    dispatch(deleteRoute(route_id));
  };

  const handleChooseRoute = (route_name) => {
    dispatch(setRoute(route_name));
    // DON'T PROCESS WHEN UPDATE AND DELETE
    navigate(-1);
  };

  return (
    <div className="routeCard">
      {routeList.map((route, index) => {
        return (
          <div key={index} className="content_item">
            <div className="id">{`R${index+1}`}</div>
            <div className="name">{route.name}</div>
            <div className="action_btn">
              <button className="md-btn" onClick={() => handleUpdateRoute(route.route_id, route.name)}>
                CHỈNH SỬA
              </button>
              <button className="md-btn" onClick={() => handleDeleteRoute(route.route_id)}>
                XÓA
              </button>
              <button className="md-btn" onClick={() => handleChooseRoute(route.name)}>
                CHỌN
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RouteCard;
