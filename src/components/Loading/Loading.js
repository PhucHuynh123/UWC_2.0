import React from 'react';
import "./Loading.css"
import logo from '../../assets/logo.png'

const Loading = () => {
    return (
      <div className="loading-container">
        <img src={logo} alt="Logo" className="loading-logo" />
        <p className="text-gray-500 text-lg font-semibold"
        style={{
            color: "rbg(107 114 128)",
            fontSize: "1.5rem",
            fontWeight: "600",
            margin: "24px"
        }}
        >Loading...</p>
      </div>
    );
  };

export default Loading;