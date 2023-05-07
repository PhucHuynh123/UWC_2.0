import React, { useState } from "react";
import "./EmployeeTaskCard.css";
import { useNavigate } from "react-router-dom";
import { Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteTask } from "../../../redux/actions";

const EmployeeTaskCard = ({ index, fullname, employee_id, task_id, route, time, vehicle, status }) => {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDeleteTask = () => {
    dispatch(
      deleteTask({
        employee_id: employee_id,
        task_id: task_id,
      })
    );
    handleClose();
  };

  const handleUpdateTask = () => {
    const state = {
      fullname,
      employee_id,
      task_id,
      route,
      time,
      vehicle,
      status,
    };
    navigate("/updateTask", { state: state });
  };

  return (
    <div className="employeeTaskCard">
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>XÓA TASK</Modal.Title>
        </Modal.Header>
        <Modal.Body>Bạn có chắc chắn muốn xóa task này?</Modal.Body>
        <Modal.Footer>
          <div className="md-btn" onClick={handleDeleteTask}>
            XÓA
          </div>
          <div className="md-btn" style={{ backgroundColor: "#e3e3e3", color: "#000" }} onClick={handleClose}>
            HỦY
          </div>
        </Modal.Footer>
      </Modal>

      <div className="content_item">
        <div className="id">{index + 1}</div>
        <div className="route">{route}</div>
        <div className="time">{time}</div>
        <div className="vehicle">{vehicle}</div>
        <div className="status">{status}</div>
        <div className="action_btn">
          <button className="md-btn" onClick={handleUpdateTask}>
            CẬP NHẬT
          </button>
          <button className="md-btn" onClick={handleShow}>
            XÓA TASK
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmployeeTaskCard;
