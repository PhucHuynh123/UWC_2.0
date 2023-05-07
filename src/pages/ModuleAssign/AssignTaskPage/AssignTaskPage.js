import React from "react";
import "./AssignTaskPage.css";
import { collectorList } from "../../../data/collectorList";
import { janitorList } from "../../../data/janitorList";
import Header from "../../../components/Header/Header";
import { Link } from "react-router-dom";
import CollectorImg from "../../../assets/collector.png";
import JanitorImg from "../../../assets/janitor.png";

const AssignTaskPage = () => {
  return (
    <>
      <div className="assign_task_page">
        <Header active={"taskAssignment"} />
        <div className="container">
          <div className="wrapper">
            <h1 className="title">CHỌN NHÂN VIÊN ĐỂ TIẾN HÀNH GIAO VIỆC</h1>
            <div className="content">
              <div className="content_box">
                <img src={CollectorImg} style={{ width: "450px", height: "424px" }} alt="Collector" />
                <Link to="assignCOTask" state={{ employeeList: collectorList, title: "GIAO VIỆC CHO COLLECTOR" }}>
                  <button className="lg-btn">COLLECTOR</button>
                </Link>
              </div>
              <div className="content_box">
                <img src={JanitorImg} style={{ width: "500px", height: "250px" }} alt="Janitor" />
                <Link to="assignJATask" state={{ employeeList: janitorList, title: "GIAO VIỆC CHO JANITOR" }}>
                  <button className="lg-btn">JANITOR</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AssignTaskPage;
