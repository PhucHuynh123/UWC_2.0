import React, { useEffect, useState } from "react";
import "./CreateTaskPage.css";
import { useLocation, useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
// REDUX
import { useDispatch, useSelector } from "react-redux";
import { getRouteSelector, getTimeSelector, getVehicleSelector } from "../../../redux/selectors";
// COMPONENT
import Header from "../../../components/Header/Header";
import AvatarInfo from "../../../components/AvatarInfo/AvatarInfo";
import { createTask, setTask, setTime } from "../../../redux/actions";

const CreateTaskPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { fullname, id } = location.state;
  const newVehicle = useSelector(getVehicleSelector);
  const newRoute = useSelector(getRouteSelector);
  const newTime = useSelector(getTimeSelector);
  let date, _timeStart, _timeEnd;
  if (newTime) {
    date = newTime.slice(14);
    _timeStart = newTime.slice(0, 5);
    _timeEnd = newTime.slice(6, 11);
  }

  const [vehicle, setVehicle] = useState(newVehicle);
  const [route, setRoute] = useState(newRoute);
  const [timeStart, setTimeStart] = useState(date + "T" + _timeStart);
  const [timeEnd, setTimeEnd] = useState(date + "T" + _timeEnd);
  const [isDisableBtnVehicle, setIsDisableBtnVehicle] = useState(false);
  const [error, setError] = useState(false);

  if (vehicle !== newVehicle && newVehicle !== undefined) {
    setVehicle(newVehicle);
  }
  if (route !== newRoute && newRoute !== undefined) {
    setRoute(newRoute);
  }

  useEffect(() => {
    if (timeStart && timeEnd) {
      const date = timeStart.split("T")[0];
      const formatTimeStart = timeStart.split("T")[1];
      const formatTimeEnd = timeEnd.split("T")[1];
      const time = formatTimeStart + "-" + formatTimeEnd + " - " + date;
      dispatch(setTime(time));
    }
  }, [timeStart, timeEnd, dispatch]);

  useEffect(() => {
    if (id.includes("JA")) {
      setVehicle("Troller");
      setIsDisableBtnVehicle(true);
    } else {
      setIsDisableBtnVehicle(false);
    }
  }, [id]);

  const handleTimeStartChange = (e) => {
    setTimeStart(e.target.value);
  };

  const handleTimeEndChange = (e) => {
    setTimeEnd(e.target.value);
  };

  const handleCreateRouteClick = () => {
    navigate("./assignRoute");
  };

  const handleCreateVehicleClick = () => {
    navigate("./assignVehicle");
  };

  const handleCancelForm = () => {
    navigate(-1);
  };

  const handleCreateTask = () => {
    if (timeStart && timeEnd && route && vehicle) {
      const date = timeStart.split("T")[0];
      const formatTimeStart = timeStart.split("T")[1];
      const formatTimeEnd = timeEnd.split("T")[1];
      const time = formatTimeStart + "-" + formatTimeEnd + " - " + date;
      const payload = {
        employee_id: id,
        task_id: uuidv4(),
        time,
        route,
        vehicle,
        status: "Chưa làm",
      };
      dispatch(createTask(payload));
      dispatch(setTask(""));
      navigate(-1);
    } else {
      setError(true);
    }
  };

  return (
    <div>
      <Header active={"taskAssignment"} />
      <div className="container create_task">
        <div className="wrapper">
          <h1 className="title">TẠO CÔNG VIỆC MỚI</h1>
          <div className="content">
            <div className="content_left">
              <AvatarInfo employee_id={id} fullname={fullname} />
            </div>
            <div className="content_right">
              <div className="content_right-item">
                <div className="input_block">
                  <label>THỜI GIAN:</label>
                  <input type="datetime-local" value={timeStart} onChange={handleTimeStartChange} />
                  <span>ĐẾN</span>
                  <input type="datetime-local" value={timeEnd} onChange={handleTimeEndChange} />
                </div>
                <div className="input_block">
                  <label>TUYẾN ĐƯỜNG:</label>
                  <p>{route}</p>
                  <div className="md-btn" onClick={handleCreateRouteClick}>
                    Chọn
                  </div>
                </div>
                <div className="input_block">
                  <label>PHƯƠNG TIỆN:</label>
                  <p>{vehicle}</p>
                  {!isDisableBtnVehicle && (
                    <div className="md-btn" onClick={handleCreateVehicleClick}>
                      Chọn
                    </div>
                  )}
                </div>
              </div>
              <div className="action">
                <div className="md-btn" onClick={handleCreateTask}>
                  TẠO MỚI
                </div>
                <div className="md-btn cancel" onClick={handleCancelForm}>
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

export default CreateTaskPage;
