import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./AssignEmployeeTask.css";

import Header from "../../../components/Header/Header";
import EmployeeCard from "./EmployeeCard";

const AssignEmployeeTaskPage = () => {
  // GET DATA FROM PROPS FROM ASSIGN TASK PAGE
  const location = useLocation();
  const { employeeList, title } = location.state;
  const [employeeSearchList, setEmployeeSearchList] = useState(employeeList);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    const newEmployeeList = employeeList.filter(employee => employee.fullname.includes(searchInput))
    setEmployeeSearchList(newEmployeeList);
  }, [searchInput, employeeList]);
  
  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <div className="assignEmployeeTask">
      <Header active={"taskAssignment"}/>
      <div className="container">
        <div className="wrapper">
          <h1 className="title">{title}</h1>
          <input type="text" value={searchInput} placeholder="Tìm kiếm tên..." onChange={handleInputChange} />
          {employeeSearchList.map((employee, index) => {
            return <EmployeeCard key={index} id={employee.id} fullname={employee.fullname} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default AssignEmployeeTaskPage;
