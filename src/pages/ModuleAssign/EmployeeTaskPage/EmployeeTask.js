import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import "./EmployeeTask.css";

import Form from "react-bootstrap/Form";
import Header from "../../../components/Header/Header";
import AvatarInfo from "../../../components/AvatarInfo/AvatarInfo";
import EmployeeTaskCard from "./EmployeeTaskCard";
import { useSelector } from "react-redux";
import { getCollectorTasksSelector, getJanitorTasksSelector } from "../../../redux/selectors";

const EmployeeTask = () => {
  const [taskInput, setTaskInput] = useState("");
  const [filterStatus, setFilterStatusList] = useState("");
  const [taskList, setTaskList] = useState([]);
  const [taskData, setTaskData] = useState([]);

  const location = useLocation();
  const { employee_id, fullname } = location.state;
  const collectorTaskList = useSelector(getCollectorTasksSelector);
  const janitorTaskList = useSelector(getJanitorTasksSelector);

  const handleInputChange = (e) => {
    setTaskInput(e.target.value);
  };

  const handleFiterStatusChange = (e) => {
    setFilterStatusList(e.target.value);
  };

  useEffect(() => {
    if (employee_id.includes("CO")) {
      // Call API [GET] employeeInfo, taskList
      const employeeTasks = collectorTaskList.filter((task) => task.employee_id === employee_id);
      setTaskData(employeeTasks);
      setTaskList(employeeTasks);
    }
    if (employee_id.includes("JA")) {
      // Call API [GET] taskList
      const employeeTasks = janitorTaskList.filter((task) => task.employee_id === employee_id);
      setTaskList(employeeTasks);
      setTaskData(employeeTasks);
    }
  }, [employee_id, collectorTaskList, janitorTaskList]);

  useEffect(() => {
    const newInputTaskList = taskData.filter((task) => task.route.includes(taskInput));

    if (filterStatus !== "Tat ca") {
      const newTaskList = newInputTaskList.filter((task) => task.status.includes(filterStatus));
      setTaskList(newTaskList);
    } else {
      setTaskList(taskData);
    }
  }, [filterStatus, taskInput, taskData]);

  return (
    <div className="employeeTask">
      <Header active={"taskAssignment"} />
      <div className="container">
        <div className="wrapper">
          <h1 className="title">THÔNG TIN CHI TIẾT</h1>
          <div className="action">
            <input type="text" placeholder="Tìm kiếm task route..." value={taskInput} onChange={handleInputChange} />
            <Form.Select onChange={handleFiterStatusChange}>
              <option value="Tat ca">--Chọn Status--</option>
              <option value="Đã hoàn thành">Đã hoàn thành</option>
              <option value="Đang tiến hành">Đang tiến hành</option>
              <option value="Chưa làm">Chưa làm</option>
            </Form.Select>
            <Link to={"/createTask"} state={{ fullname: fullname, id: employee_id, taskList: taskList }}>
              <button className="md-btn">TẠO TASK MỚI</button>
            </Link>
          </div>
          <div className="content">
            <div className="content_left">
              <AvatarInfo employee_id={employee_id} fullname={fullname} />
            </div>
            <div className="content_right">
              {taskList.map((task, index) => (
                <EmployeeTaskCard
                  key={index}
                  index={index}
                  employee_id={employee_id}
                  fullname={fullname}
                  task_id={task.task_id}
                  route={task.route}
                  time={task.time}
                  vehicle={task.vehicle}
                  status={task.status}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeTask;
