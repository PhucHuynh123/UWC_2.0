import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getTask } from "../../../redux/selectors";
import Header from "../../../components/Header/Header";
import AvatarInfo from "../../../components/AvatarInfo/AvatarInfo";
import { setTask, updateTask } from "../../../redux/actions";
import "./UpdateTask.css";

const UpdateTask = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const { fullname, employee_id, task_id, time, vehicle, route, status } = location.state;
  console.log(vehicle);
  let date, _timeStart, _timeEnd;
  if (time) {
    date = time.slice(14);
    _timeStart = time.slice(0, 5);
    _timeEnd = time.slice(6, 11);
  }

  const [newVehicle, setNewVehicle] = useState(vehicle);
  const [newRoute, setNewRoute] = useState(route);
  const [timeStart, setTimeStart] = useState(date + "T" + _timeStart);
  const [timeEnd, setTimeEnd] = useState(date + "T" + _timeEnd);
  const [newStatus, setNewStatus] = useState(status);
  const [isDisableBtnVehicle, setIsDisableBtnVehicle] = useState(false);
  const [error, setError] = useState(false);
  const task = useSelector(getTask);

  useEffect(() => {
    if (employee_id.includes("JA")) {
      setIsDisableBtnVehicle(true);
    } else {
      setIsDisableBtnVehicle(false);
    }
  }, [employee_id]);

  useEffect(() => {
    if (task.vehicle !== newVehicle && task.vehicle !== undefined && task.vehicle !== "") {
      setNewVehicle(task.vehicle);
    }
    if (task.route !== newRoute && task.route !== undefined && task.route !== "") {
      setNewRoute(task.route);
    }
  }, [task, newVehicle, newRoute]);

  const handleTimeStartChange = (e) => {
    setTimeStart(e.target.value);
  };

  const handleTimeEndChange = (e) => {
    setTimeEnd(e.target.value);
  };

  const handleUpdateRouteClick = () => {
    navigate("./assignRoute");
  };

  const handleUpdateVehicleClick = () => {
    navigate("./assignVehicle");
  };

  const handleUpdateStatusClick = (e) => {
    setNewStatus(e.target.value);
  };

  const handleUpdateTask = () => {
    if (timeStart && timeEnd && newRoute && newVehicle && newStatus) {
      const date = timeStart.split("T")[0];
      const formatTimeStart = timeStart.split("T")[1];
      const formatTimeEnd = timeEnd.split("T")[1];
      const time = formatTimeStart + "-" + formatTimeEnd + " - " + date;
      const payload = {
        employee_id: employee_id,
        task_id: task_id,
        time,
        route: newRoute,
        vehicle: newVehicle,
        status: newStatus,
      };
      dispatch(updateTask(payload));
      dispatch(setTask(""));
      navigate(-1);
    } else {
      setError(true);
    }
  };

  const handleCancelForm = () => {
    navigate(-1);
  };

  return (
    <div>
      <Header active={"taskAssignment"} />
      <div className="container update_task">
        <div className="wrapper">
          <h1 className="title">CẬP NHẬT CÔNG VIỆC</h1>
          <div className="content">
            <div className="content_left">
              <AvatarInfo employee_id={employee_id} fullname={fullname} />
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
                  <p>{newRoute}</p>
                  <div className="md-btn" onClick={handleUpdateRouteClick}>
                    Chọn
                  </div>
                </div>
                <div className="input_block">
                  <label>PHƯƠNG TIỆN:</label>
                  <p>{newVehicle}</p>
                  {!isDisableBtnVehicle && (
                    <div className="md-btn" onClick={handleUpdateVehicleClick}>
                      Chọn
                    </div>
                  )}
                </div>
                <div className="input_block">
                  <label>TRẠNG THÁI:</label>
                  <p>{newStatus}</p>
                  <select className="md-btn" onChange={handleUpdateStatusClick} defaultValue={newStatus}>
                    <option value="Đã hoàn thành">Đã hoàn thành</option>
                    <option value="Đang tiến hành">Đang tiến hành</option>
                    <option value="Chưa làm">Chưa làm</option>
                  </select>
                </div>
              </div>
              <div className="action">
                <div className="md-btn" onClick={handleUpdateTask}>
                  CẬP NHẬT
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

export default UpdateTask;
