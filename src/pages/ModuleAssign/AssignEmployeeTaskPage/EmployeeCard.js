import React from "react";
import "./AssignEmployeeCard.css";
import { Link } from "react-router-dom";

const EmployeeCard = ({ id, fullname }) => {
  return (
    <div className="assignEmployeeCard">
      <div className="content_item">
        <div className="content_card">
          <div className="content_id">{id}</div>
          <div className="content_name">{fullname}</div>
          <div className="content_action">
            <Link to={"/createTask"} state={{fullname: fullname, id: id}}>
              <button className="md-btn">TẠO TASK MỚI</button>
            </Link>
            <Link to={"/viewDetailTask"} state={{ employee_id: id, fullname: fullname }}>
              <button className="md-btn">XEM CHI TIẾT</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeCard;
