import React from "react";
import "./Dashboard.css";

function Dashboard() {
  return (
    <div>
      <div className="flex-container">
        <div style={{ marginLeft: "300px", width: "150px" }}> </div>
        <div style={{ marginLeft: "600px" }}></div>
        <div></div>
      </div>
      <div className="flex-container">
        <div style={{ marginLeft: "300px", width: "500px" }}> </div>
        <div style={{ marginLeft: "400px", width: "400px" }}></div>
        <div></div>
      </div>

      <div className="flex-container">
        <div
          style={{ marginLeft: "300px", width: "800px", height: "200px" }}
        ></div>
        <div style={{ width: "320px", height: "200px" }}> </div>
      </div>
      <div className="flex-container">
        <div
          style={{ marginLeft: "300px", width: "800px", height: "200px" }}
        ></div>
        <div style={{ width: "320px", height: "200px" }}> </div>
      </div>
      <div className="flex-container">
        <div
          style={{ marginLeft: "300px", width: "600px", height: "200px" }}
        ></div>
        <div style={{  width: "600px", height: "200px" }}> </div>
      </div>
      
    </div>
  );
}
export default Dashboard;
