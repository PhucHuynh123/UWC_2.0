import React from "react";
import "./AvatarInfo.css";

const AvatarInfo = ({ employee_id, fullname }) => {
  return (
    <>
      <div className="user_avatar"></div>
      <div className="user_role">
        Role: {employee_id.includes("CO") ? `Collector(${employee_id})` : `Janitor(${employee_id})`}
      </div>
      <div className="user_name">{fullname}</div>
    </>
  );
};

export default AvatarInfo;
